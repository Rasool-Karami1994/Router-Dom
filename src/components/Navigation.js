import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const Navigation = ({ location }) => {
  const items = [
    { name: "Home", to: "/", exact: true },
    { name: "About us", to: "/about-us" },
    { name: "Blogs", to: "/blogs" },
    { name: "Posts", to: "/posts" },
  ];
  return (
    <nav>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.to}>
              <NavLink
                to={item.to}
                activeClassName="activeLink"
                exact={item.exact || false}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
