import { Navigate } from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import { useTypedSelector } from "../hooks/useTypedSelector";

const SignUpPage: React.FC = () => {
    const {
        token
    } = useTypedSelector(state => state.tokenReducer)

    if (token == null) {
        return(<SignUpForm />)
    } else {
        return (<Navigate to="/account" />)
    }
}

export default SignUpPage;