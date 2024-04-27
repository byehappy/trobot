import {ErrorMessage, Formik} from "formik";
import * as Yup from "yup";
import {ErrorContainer, FieldContainer, FormContainer, FormField, FormHeader, SubmitButton} from "./FormStyle";

const RegisterForm = () => {
    const initialValues = {
        email: '',
        password: '',
        confirmPassword: '',
        login: ''
    };
    const validationSchema = Yup.object({
        email: Yup.string().email('Неверный формат email').required('Это поле обязательно для заполнения'),
        password: Yup.string().required('Это поле обязательно для заполнения').min(6, 'Пароль слишком короткий')
            .matches(/^[a-zA-Z0-9]+$/, 'Используйте только латинские буквы и цифры'),
        confirmPassword: Yup.string().required('Это поле обязательно для заполнения')
            .oneOf([Yup.ref('password')], 'Пароли не совпадают'),
        login: Yup.string().required('Это поле обязательно для заполнения').min(4, 'Имя слишком короткое')
            .matches(/^[a-zA-Z0-9]+$/, 'Используйте только латинские буквы и цифры')
    });
    const handleSubmit = async (values) => {
        await fetch("http://localhost:3001/api/user/registration", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({login: values.login, passwordHash: values.password,role:"USER",email:values.email})
        })
    }
    return (
        <>
            <FormHeader>
                Регистрация
            </FormHeader>
            <Formik initialValues={initialValues} validationSchema={validationSchema}
                    onSubmit={async (values) =>
                        await handleSubmit(values)}>
                {({isSubmitting, isValid, dirty}) => (
                    <FormContainer>
                        <FieldContainer>
                            <FormField placeholder={'Имя пользователя'} type='text' name='login'/>
                            <ErrorContainer>
                                <ErrorMessage name='login' component='div' className='ErrorMessages'/>
                            </ErrorContainer>
                        </FieldContainer>
                        <FieldContainer>
                            <FormField placeholder={'Адрес электронной почты'} type="email" name="email"
                                   className={"form-field"}/>
                            <ErrorContainer >
                                <ErrorMessage name="email" component="div" className="ErrorMessages"/>
                            </ErrorContainer>
                        </FieldContainer>
                        <FieldContainer>
                            <FormField placeholder={'Пароль'} type="password" name="password" className={"form-field"}/>
                            <ErrorContainer>
                                <ErrorMessage name="password" component="div" className="ErrorMessages"/>
                            </ErrorContainer>
                        </FieldContainer>
                        <FieldContainer>
                            <FormField placeholder={'Подтвердите пароль'} type="password" name="confirmPassword"
                                   className={"form-field"}/>
                            <ErrorContainer>
                                <ErrorMessage name="confirmPassword" component="div" className="ErrorMessages"/>
                            </ErrorContainer>
                        </FieldContainer>
                        <FieldContainer>
                            <SubmitButton type="submit" disabled={!(isValid && dirty) || isSubmitting}>
                                <div>
                                    {isSubmitting ? 'Загрузка...' : 'Регистрация'}
                                </div>
                            </SubmitButton>
                        </FieldContainer>
                    </FormContainer>
                )}
            </Formik>
        </>
    )
}

export default RegisterForm