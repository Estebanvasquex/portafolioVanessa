import { Box, Typography } from "@mui/material";
import React from "react";
import "./stylesAboutMe.css";

const AboutMe = () => {
  return (
    <div
      style={{
        backgroundColor: "#f0efe0",
        alignItems: "center",
        width: "100%",
        height: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <Box className={"continerImg"}>
        <img
          src="https://res.cloudinary.com/dmzibpgwk/image/upload/v1681404023/portafolioVanessa/perfilVane.jpg"
          alt=""
          className={"imgPerfil"}
        />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Box className={"tituloAbout"}>
          <Typography variant="h4">SOY VANESSA</Typography>
          <Typography variant="h6">comunicadora gráfica</Typography>
        </Box>

        <Typography className={"parrafoAbout"}>
          Me apasiona escribir, crear nuevos contenidos y diseñar. Tengo
          experiencia en la realización de piezas gráficas, videos
          empresariales, organización de eventos, y además en la creación de
          programas de entrenamiento en pro de mejorar el clima organizacional y
          la comunicación asertiva.
        </Typography>

      </Box>
    </div>
  );
};

export default AboutMe;
