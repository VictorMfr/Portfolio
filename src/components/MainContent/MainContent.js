import React, { useState } from "react";
import utils from "../../utilis";
import ProjectCard from "./ProjectCard/ProjectCard";
import Footer from "../Footer/Footer";


const MainContent = () => {

    const [selectedItem, setSelectedItem] = useState(null);

    const SelectionItemHandler = item => {
        setSelectedItem(item);
    }




    return (
        <div className="text-center w-100">
            <div className="background my-5">
                <div className="position-relative top-50 start-50 translate-middle">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="60"><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" fill="white" /><path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" fill="white" /></svg>
                    <p className="my-3 text-white fs-4 px-3">¡Bienvenido a mi portafolio!</p>
                </div>
                
            </div>

            <i className="fa-solid fa-microchip fs-1 border p-3" style={{ borderRadius: "100%" }}></i>
            <h1 className="fs-3 mx-3">Proyectos digitales</h1>
            <p className="mx-4 mb-5">Creaciones que inspiran a seguir por más...</p>
            
            
            <hr className="w-50 mx-auto"/>
            <div className="d-flex flex-wrap mx-auto justify-content-center mb-5 w-75">
                {utils.projects.map(project => {
                    return <ProjectCard
                        key={project.id}
                        id={project.id}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        previews={project.projectPreviews}
                        selectionItem={SelectionItemHandler}
                        selectedItem={selectedItem}
                    />
                })}
            </div>
            <hr className="w-50 mx-auto"/>

            <div className="mt-5">
                <img src="/images/react-logo.png" width="50px" />
                <p className="fs-6">Hecho con  React</p>
            </div>
            <Footer />
        </div>
    );
}

export default MainContent;