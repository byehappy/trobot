import {ErrorMessage, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {ErrorContainer, FieldContainer, FormContainer, FormField, FormHeader, SubmitButton} from "./FormStyle";

function LoginForm() {
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
        await fetch("http://localhost:3001/api/user/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({login: values.identity, passwordHash: values.password})
        })
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