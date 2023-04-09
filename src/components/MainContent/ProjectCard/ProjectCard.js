import React, { useState } from 'react';
import classes from "./ProjectCard.module.css";
import ProjectCarousel from '../../ProjectCarousel';

const ProjectCard = props => {

    const isProjectSelected = props.selectedItem && props.selectedItem == props.id;



    const projectCardSelectionStyle = {
        width: isProjectSelected? "90vw": "14rem",
        height: isProjectSelected? "auto": "18rem",
        backgroundImage: !isProjectSelected ? `url(./images/${props.image}.png)` : "none",
    }

    const projectSelectionHandler = () => {
        props.selectionItem(props.id);
    }

    const closeProjectSelection = e => {
        e.stopPropagation();

        props.selectionItem(null)
    }

    return (

        <>
            {(!props.selectedItem || isProjectSelected) && <div className='d-flex flex-column'>
                <div className={`${classes.ProjectCard} ${isProjectSelected ? `p-0 pb-4 ${classes.projectCardSelectionStyle}` : ""} border`} style={projectCardSelectionStyle} onClick={projectSelectionHandler}>
                    {!isProjectSelected && <div className={classes.text}>
                        <div className={classes.title}>
                            <h3 className='fs-5'>{props.title}</h3>
                            <hr />
                            <p className={classes.description}>{props.description}</p>
                        </div>
                    </div>}


                    <div className='d-flex flex-column'>
                        <div className='position-relative'>
                            <h1 className='display-6 my-3'>{props.title}</h1>
                            <ProjectCarousel previews={props.previews} />
                            <br/>
                            <button className='btn btn-primary btn-lg m-2'>Ir a la página</button>
                            <button className='btn btn-secondary btn-lg m-2' onClick={closeProjectSelection}>Cerrar</button>
                        </div>
                    </div>
                </div>
                {!isProjectSelected && <p className='fs-4'>{props.title}</p>}

                

            </div>}
            
        </>



    )
}

export default ProjectCard;
