import { NavLink } from "react-router";

const AdminNavbar = () => {
  return (
    <div>
      <NavLink
        to={"/admin/users"}
        className={({ isActive }) => (isActive ? "active-class" : "")}
      >
        users
      </NavLink>
      <NavLink
        to={"/admin/reports"}
        className={({ isActive }) => (isActive ? "active-class" : "")}
      >
        reports
      </NavLink>
    </div>
  );
};

export default AdminNavbar;
