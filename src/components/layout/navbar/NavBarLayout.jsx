import React from "react";


import "./navBarLayout.css";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import ShareIcon from "@mui/icons-material/Share";
import InfoIcon from '@mui/icons-material/Info';
import WorkIcon from '@mui/icons-material/Work';
import CreateIcon from '@mui/icons-material/Create';
import MenuBookIcon from '@mui/icons-material/MenuBook';


const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
  position: "absolute",
  "&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft": {
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  "&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight": {
    top: theme.spacing(2),
    left: theme.spacing(2),
  },
}));



const NavBarLayout = (props) => {
  const
  {
    handleExperience,
    handleAboutMe,
    handleCatalogue,
    handleContact,
    handleSkills
    
  } =props

  const actions = [
  { icon: <InfoIcon onClick={handleAboutMe}/>, name: "Sobre mi" },
  { icon: <WorkIcon onClick={handleExperience}/>, name: "Experiencia" },
  { icon: <CreateIcon onClick={handleSkills} />, name: "Habilidades" },
  { icon: <MenuBookIcon onClick={handleCatalogue}/>, name: "Catalogo" },
  { icon: <ShareIcon onClick={handleContact}/>, name: "Contacto" },
];


  const [direction, setDirection] = React.useState("right");
  const [hidden, setHidden] = React.useState(false);

  const handleDirectionChange = (event) => {
    setDirection(event.target.value);
  };

  const handleHiddenChange = (event) => {
    setHidden(event.target.checked);
  };

  return (
    <Box sx={{ transform: "translateZ(0px)", flexGrow: 1 }}>
      <Box>
        <StyledSpeedDial
          ariaLabel="SpeedDial playground example"
          hidden={hidden}
          icon={<SpeedDialIcon />}
          direction={direction}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              
            />
          ))}
        </StyledSpeedDial>
      </Box>
    </Box>
  );
};

export default NavBarLayout;
