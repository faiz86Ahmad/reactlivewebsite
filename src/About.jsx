import React from "react";
import web from "../src/images/about-1.jpg";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";
const About = () => {
    return (
        <>
        <Commom
        name="welcome to about page"
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"

        
        />
        </>
    );
};
export default About;