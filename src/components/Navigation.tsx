import * as React from "react";
import { NavLink } from "react-router-dom";

type Route = {
  to: string;
  name: string;
};

const ROUTES: Route[] = [
  {
    to: "/",
    name: "DOMReference",
  },
];

function Navigation() {
  return (
    <nav className="w-screen h-16">
      <ul className="h-full flex justify-between items-center" role="menu">
        {ROUTES.map((route) => (
          <li className="h-full basis-full " key={route.to} role="presentation">
            <NavLink
              to={route.to}
              className={({ isActive }) =>
                `inline-block h-full flex items-center justify-center ${
                  isActive ? "bg-amber-300 font-bold" : "bg-amber-100"
                }`
              }
            >
              {route.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
