import React from "react";

import NavbarLayout from "./NavBarLayout";
import { Outlet, useNavigate } from "react-router-dom";

const NavBarLayoutContainer = () => {
  const nav = useNavigate();

  const handleExperience = () => {
    nav("/experience");
  };

  const handleAboutMe = () => {
    nav("/aboutMe");
  };

  const handleSkills = () => {
    nav("/skills");
  };

  const handleCatalogue= () => {
    nav("/catalogue");
  };

  const handleContact = () => {
    nav("/contact");
  };


  return (
    <div >
      <NavbarLayout  
      handleExperience={handleExperience}
      handleAboutMe = {handleAboutMe} 
      handleCatalogue ={handleCatalogue}
      handleContact = {handleContact}
      handleSkills = {handleSkills}
      />
      <Outlet />
    </div>
  );
};

export default NavBarLayoutContainer;
