import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Bellota from "../../Images/Bellota.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    backgroundColor: "transparent",
    marginTop: "20px",
    border: "none",
    boxShadow: "none",
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
  },
});

const CardBellota = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
            src={Bellota} component="img" title="Wakka"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Juan Pablo Macías
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontWeight: "bold", fontSize: 16 }}
          >
            4to. Semestre, Ing. en Computación y Matemáticas Aplicadas
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardBellota;
