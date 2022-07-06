import { Navigate } from "react-router-dom";
import SignInForm from "../components/SignInForm";
import { useTypedSelector } from "../hooks/useTypedSelector";

const SignInPage: React.FC = () => {
    const {
        token
    } = useTypedSelector(state => state.tokenReducer)

    if (token == null) {
        return (<SignInForm />)
    } else {
        return (<Navigate to="/main" />)
    }
}

export default SignInPage;