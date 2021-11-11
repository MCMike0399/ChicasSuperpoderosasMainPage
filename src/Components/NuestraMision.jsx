import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";

const NuestraMision = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="flex-end"
        style={{marginTop: 40, marginBottom: 80}}
      >
        <Typography variant="h2" component="h2" style={{color: "black"}}>
          Percepción de CiberSeguridad
        </Typography>
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography component="div">
        <Box sx={{ fontStyle: 'italic', width: 600, fontSize: 20, color: "black"}}>Somos estudiantes del ITAM que en colaboración con SocialTIC buscamos conocer la percepción sobre la ciberseguridad entre estudiantes mexicanos de licenciatura. Esto con la finalidad de desmentir o comprobar ciertos mitos que existen sobre su conocimiento acerca de lo que realmente pasa con su información cada que entran al internet.</Box>
        </Typography>
      </Grid>
    </>
  );
};

export default NuestraMision;
