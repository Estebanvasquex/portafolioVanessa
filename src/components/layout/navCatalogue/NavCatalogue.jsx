import { Box, Button } from "@mui/material";
import React from "react";

const NavCatalogue = () => {
  return (
    <div>
      <Box
        sx={{ display: "flex", justifyContent: "flex-end", marginTop: "30px" }}
      >
        <Button>Logos hola</Button>
        <Button>Corporativo</Button>
        <Button>Social Media</Button>
        <Button>Videos</Button>
      </Box>
    </div>
  );
};

export default NavCatalogue;
