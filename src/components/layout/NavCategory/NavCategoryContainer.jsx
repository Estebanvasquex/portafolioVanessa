import React from "react";
import { Outlet } from "react-router-dom";
import NavCategory from "./NavCategory";

const NavCategoryContainer = () => {
  return (
    <div>
      <NavCategory />
      <Outlet />
    </div>
  );
};

export default NavCategoryContainer;
