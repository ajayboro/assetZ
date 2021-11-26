import React from "react";
import heroImage from "../../assets/heroImage.svg";
import { useStyles } from "./styles";

const HeroImage = () => {
	const classes = useStyles();
	return <img className={classes.img} src={heroImage} alt="" />;
};

export default HeroImage;
