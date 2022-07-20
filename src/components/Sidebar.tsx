import { NavLink } from "react-router-dom"
import { AccountApi } from "../services/AccountService"

const Sidebar: React.FC = () => {
  const {
    data: profile
  } = AccountApi.useGetProfileQuery()

  return (
    <div className="sidebar">
      <div className="sidebar-start">
        <div className="sidebar-head">
          <NavLink to="/main" className="logo-wrapper logo-text" title="Home">
            <div className="logo-title">Malpen</div>
          </NavLink>
        </div>
        <div className="sidebar-body">
          <ul className="sidebar-body-menu">
            <li><NavLink to="/main">Главная</NavLink></li>
            <li><NavLink to="/transactions">Операции</NavLink></li>
          </ul>
        </div>
      </div>
      {profile && (
        <div className="sidebar-footer">
        <NavLink to="/profile" className="sidebar-user">
          <div className="sidebar-user-info">
            <span className="sidebar-user__title">Пользователь</span>
            <span className="sidebar-user__subtitle">{profile.nickname}</span>
          </div>
        </NavLink>
      </div>
      )}
      
    </div>
  )
}

export default Sidebar