import React from "react";
import classes from "./ProjectCarousel.module.css";

const ProjectCarousel = props => {

    return (
        <div id="carouselExampleAutoplaying" className="carousel slide position-relative w-100" data-bs-ride="carousel">
            <div className={`carousel-inner mx-auto w-100 bg-secondary ${classes.projectCarousel}`}>
                <div className="carousel-item active w-100 h-100">
                    <div className={classes.image} style={{backgroundImage: `url("./images/${props.previews[0]}.png")`}}/>
                </div>
                <div className="carousel-item w-100 h-100">
                    <div className={classes.image} style={{backgroundImage: `url("./images/${props.previews[1]}.png")`}}/>
                </div>
                <div className="carousel-item w-100 h-100">
                    <div className={classes.image} style={{backgroundImage: `url("./images/${props.previews[2]}.png")`}}/>
                </div>
                <div className="carousel-item w-100 h-100">
                    <div className={classes.image} style={{backgroundImage: `url("./images/${props.previews[3]}.png")`}}/>
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span className="carousel-control-prev-icon rounded-100 p-4" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span className="carousel-control-next-icon p-4" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div >

    )
}

export default ProjectCarousel;