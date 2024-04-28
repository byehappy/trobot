import {ErrorMessage, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {ErrorContainer, FieldContainer, FormContainer, FormField, FormHeader, SubmitButton} from "./FormStyle";
import {setAuthState, setId, setLogin, setRole} from "../../toolkitRedux/toolkitSlice";
import {store} from "../../toolkitRedux";
import {useDispatch} from "react-redux";
import {addError} from "../../toolkitRedux/errorSlice";

function LoginForm() {
    const dispatch=useDispatch();
    const navigate = useNavigate();
    const initialValues = {
        identity: '',
        password: '',
    };

    const validationSchema = Yup.object({
        identity: Yup.string().required('Это поле обязательно для заполнения'),
        password: Yup.string()
            .required('Это поле обязательно для заполнения')
            .min(6, 'Пароль слишком короткий')
            .matches(/^[a-zA-Z0-9]+$/, 'Используйте только латинские буквы и цифры')
    });
    const handleLogin = async (values) => {
           const fetchLogin = async () =>{
               const response = await fetch("http://localhost:3001/api/user/login", {
                   method: "POST",
                   headers: {
                       "Content-Type": "application/json",
                       "accept": "application/json"
                   },
                   body: JSON.stringify({login: values.identity, passwordHash: values.password})
               });
               if (!response.ok) {
                   return Promise.reject(await response.json());
               }
               const tokens = await response.json();
               localStorage.setItem('refreshToken', tokens.refreshToken);
               localStorage.setItem('accessToken', tokens.accessToken);
               const responseData = await fetch("http://localhost:3001/api/user/decode-token", {
                   method: "POST",
                   headers: {
                       "Content-Type": "application/json",
                       "accept": "application/json"
                   },
                   body: JSON.stringify({token: localStorage.getItem("accessToken")})
               });
               if (!responseData.ok) {
                   return Promise.reject(await responseData.json());
               }
               const userData = await responseData.json();
               store.dispatch(setAuthState(true));
               store.dispatch(setLogin(userData.login));
               store.dispatch(setRole(userData.role));
               store.dispatch(setId(userData.id));
               navigate("/");
           }
        fetchLogin().catch((error) => dispatch(addError(error.message)));

    };


    return (
        <>
            <FormHeader>
                Вход
            </FormHeader>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    await handleLogin(values);
                }}
            >
                {({isSubmitting, isValid, dirty}) => (
                    <FormContainer>
                        <FieldContainer>
                            <FormField type="identity" name="identity"
                                       placeholder={'Логин / Почта'}/>
                            <ErrorContainer className={'error-container'}>
                                <ErrorMessage name="identity" component="div" className="ErrorMessages"/>
                            </ErrorContainer>
                        </FieldContainer>
                        <FieldContainer className={'field-container'}>
                            <FormField type="password" name="password" className="form-field" placeholder={'Пароль'}/>
                            <ErrorContainer className={'error-container'}>
                                <ErrorMessage name="password" component="div" className="ErrorMessages"/>
                            </ErrorContainer>
                        </FieldContainer>
                        <SubmitButton type="submit" disabled={!(isValid && dirty) || isSubmitting}>
                            <div>
                                {isSubmitting ? 'Загрузка...' : 'Войти'}
                            </div>
                        </SubmitButton>
                    </FormContainer>
                )}
            </Formik>
        </>
    )
}

export default LoginForm