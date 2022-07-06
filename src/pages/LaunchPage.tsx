import { Navigate } from 'react-router-dom'
import Storage from '../store/Storage'

const LaunchPage: React.FC = () => {
    
    var redirect
    if (Storage.getToken() != null) {
        redirect = <Navigate to={"/main"} />
    } else {
        redirect = <Navigate to={"/signin"} />
    }
    
    return(
        <>
        {redirect}
        </>
    )
}

export default LaunchPage;