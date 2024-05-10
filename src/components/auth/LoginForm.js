import {ErrorMessage, Formik} from "formik";
import * as Yup from "yup";
import {useNavigate} from "react-router-dom";
import {ErrorContainer, FieldContainer, FormContainer, FormField, FormHeader, SubmitButton} from "./FormStyle";
import {useDispatch} from "react-redux";
import {addMessage} from "../../toolkitRedux/ToasterSlice";
import {useAuth} from "../../hooks/useAuth";

function LoginForm() {
    const {login} = useAuth();
    const dispatch = useDispatch();
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
        try {
            await login(values.identity, values.password);
            navigate("/");
        } catch (error) {
            dispatch(addMessage({type: "error", message: error.message}));
        }
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