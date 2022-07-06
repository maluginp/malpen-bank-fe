import { ReactElement } from "react";
import { Navigate } from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import Sidebar from "./Sidebar";

interface SidebarPageProps {
  children: ReactElement | ReactElement[]
}

const SidebarProtectedPageWrapper: React.FC<SidebarPageProps> = ({
  children
}) => {

  const {
    token 
  } = useTypedSelector(state => state.tokenReducer)


  if (token != null) {
    return (
      <div className="main-flex">
        <Sidebar />
        <div className="main-wrapper">
          {children}
        </div>
      </div>
    )
  } else {
    return (<Navigate to="/signin" />)
  }
}

export default SidebarProtectedPageWrapper;