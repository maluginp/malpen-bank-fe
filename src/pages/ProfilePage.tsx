import AccountDetails from "../components/AccountDetails";
import SidebarProtectedPageWrapper from "../components/SidebarProtectedPageWrapper";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { AccountApi } from "../services/AccountService";
import { clearToken } from "../store/reducers/tokenReducer";

const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch()

  const {
    data
  } = AccountApi.useGetProfileQuery()


  const onLogoutClick = () => {
    dispatch(clearToken())
  }


  return (
    <SidebarProtectedPageWrapper>
      <div className="container">
        <div className="row">
          <div className="col-8 pt-lg-4 px-lg-2">
            {data && (
              <>
                <h4>ID</h4>
                <h3>{data.id}</h3>
                <h4>Email</h4>
                <h3>{data.email}</h3>
                <button className="btn btn-danger btn-lg" onClick={() => onLogoutClick()}>Выйти</button>
              </>
            )}
            
          </div>
          <div className="col-4 py-lg-4 px-lg-2">
            <AccountDetails />
          </div>
        </div>
      </div>
    </SidebarProtectedPageWrapper>
  )
}

export default ProfilePage;