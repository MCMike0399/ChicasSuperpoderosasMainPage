import React from "react";
import CardBombon from "./Cards/CardBombon";
import CardBellota from "./Cards/CardBellota";
import CardBurbuja from "./Cards/CardBurbuja";
import CardMojojo from "./Cards/CardMojojo";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const NuestroEquipo = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <CardBombon />
        <CardBellota />
        <CardBurbuja />
        <CardMojojo />
      </Grid>
    </>
  );
};

export default NuestroEquipo;
