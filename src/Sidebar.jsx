import { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./UserContext";

function Sidebar() {
  let context = useContext(UserContext);
  return (
    <ul
      className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
      id="accordionSidebar"
    >
      {/* <!-- Sidebar - Brand --> */}
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="index.html"
      >
        <div className="sidebar-brand-icon rotate-n-15">
          <i className="fas fa-laugh-wink"></i>
        </div>
        <div className="sidebar-brand-text mx-3">
          SB Admin <sup>2</sup>
          <br />
          {context.username}
        </div>
      </a>

      {/* <!-- Divider --> */}
      <hr className="sidebar-divider my-0" />

      {/* <!-- Nav Item - Dashboard --> */}
      <li className="nav-item active">
        <Link className="nav-link" to="/portal/dashboard">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/portal/customers">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Customers</span>
        </Link>
      </li>
    </ul>
  );
}
export default Sidebar;
