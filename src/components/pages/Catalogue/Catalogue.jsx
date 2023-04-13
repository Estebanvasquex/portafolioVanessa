import React from "react";
import catalogue from "../../../api/api.js";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

const Catalogue = () => {
  return (
    <div
      style={{
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
      <Grid container spacing={2}>
        {catalogue.map((item) => {
          return (
            <Grid item xs={12} sm={4} md={3} key={item.id}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 250 }}
                  image={item.img}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Catalogue;
