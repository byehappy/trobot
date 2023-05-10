require('dotenv').config({path: __dirname+'/./.env'})
const PORT = process.env.PORT || 8083
const express = require('express')
const app = express();
const cors = require('cors');
const knex = require("./DB/db");
const {body, validationResult} = require('express-validator')
const ApiError = require("./exeptions/apiError");
const bcrypt = require('bcrypt')
const userDto = require("./dtos/user-dto");
const tokenService = require('./services/token-services')
app.use(express.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

app.get("/curses", async (req, res) => {
    const curses = await knex.withSchema("public")
        .select("*")
        .from("curses")
    res.send(curses)
})

app.post("/registration", body('email').isEmail(), body('password').isLength({
    min: 6, max: 36
}), async (req, res, next) => {
    const users = await knex
        .select('email')
        .from("users")
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
        }
        const hasDuplicates = await users.some(function (currentObject) {
            return currentObject.email.toLowerCase() === req.body.email;

        })
        if (hasDuplicates) {
            throw ApiError.BadRequest(`Пользователь уже зарегестрирован`)
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        await knex('users').insert({
            email: req.body.email,
            password: hashedPassword,
            name: req.body.name
        })
        const currentUser = await knex
            .select('email', 'uid')
            .from('users')
            .where('email', req.body.email)
        const userdto = new userDto(currentUser[0])
        const tokens = tokenService.generateTokens({...userdto})
        await tokenService.saveToken(userdto.id, tokens.refreshToken)

        res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        res.send({...tokens, user: userdto})
    } catch (e) {
        next(e)
    }
})
app.post("/login", async (req, res, next) => {
    try {
        const user = await knex
            .select("*")
            .from("users")
            .where("email", req.body.email)

        if (!user[0]){
            throw ApiError.BadRequest('Данный пользователь не найден!')
        }
        const PassCompare = await bcrypt.compare(req.body.password, user[0].password)
        if (!PassCompare) {
            throw ApiError.BadRequest('Неверный пароль')
        }
        const userdto = new userDto(user[0])
        const tokens = tokenService.generateTokens({...userdto})
        await tokenService.saveToken(userdto.id, tokens.refreshToken)
        res.cookie('refreshToken', tokens.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
        res.send({...tokens, user: userdto})
    } catch (e){
        next(e)
    }
})
app.post('/logout', async (req, res, next) => {
    try {
        const {refreshToken} = req.cookies;
        await tokenService.removeToken(refreshToken)
        res.clearCookie('refreshToken');
        return res.send('Выход успешен')
    } catch (e) {
        next(e)
    }
})
const start = async () => {
    try {
        app.listen(PORT, () => console.log('Server listening on port: ', PORT))
    } catch (e) {
        console.log(e)
    }
}

start()