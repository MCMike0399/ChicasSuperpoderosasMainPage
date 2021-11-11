import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Bombon from "../../Images/Bombon.png";

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

const CardBombon = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
            src={Bombon} component="img" title="Cordero"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Francisco Cordero
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ fontWeight: "bold", fontSize: 16  }}
          >
            4to. Semestre, Licenciatura en Ciencia de Datos
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardBombon;
