import React from "react";
import { Grid, Typography, Box, Button } from "@material-ui/core";
import AssignmentIcon from '@material-ui/icons/Assignment';

const Encuesta = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: 70 }}
      >
        <Typography component="div">
          <Box
            sx={{
              fontStyle: "italic",
              width: 600,
              fontSize: 20,
              color: "black",
            }}
          >
            Con esta encuesta buscamos entender los mitos de ciberseguridad que
            los jóvenes universitarios de entre 18 y 24 años pueden llegar a
            tener. Específicamente en los campos de redes sociales y compras en
            línea.
          </Box>
        </Typography>
      </Grid>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ marginTop: 80 }}
      >
        <Button variant="contained" size="medium" startIcon={<AssignmentIcon />}>Realiza Esta Encuesta</Button>
      </Grid>   
    </>
  );
};

export default Encuesta;
