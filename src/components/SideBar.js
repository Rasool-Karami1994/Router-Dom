import { NavLink } from "react-router-dom";
const SideBar = () => {
  return (
    <aside>
      <ul className="side-bar">
        <li>
          <NavLink
            to="/profile/dashboard"
            className={(data) => (data.isActive ? "activeOne" : "")}
          >
            dashbord
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/downloads"
            className={(data) => (data.isActive ? "activeOne" : "")}
          >
            downloads
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
