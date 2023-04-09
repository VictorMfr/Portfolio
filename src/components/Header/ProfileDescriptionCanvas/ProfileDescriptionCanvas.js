import React from "react";
import classes from "./ProfileDescriptionCanvas.module.css";

const ProfileDescriptionCanvas = () => {
    return (
        <div className="offcanvas offcanvas-start postion-relative" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel" style={{ zIndex: 2000 }}>
            <div className="offcanvas-header p-0">
                <div className={`position-relative start-0 d-flex justify-content-around align-items-center p-2 ${classes.profileBackground}`} style={{ width: '100%', height: '16rem' }}>
                    <div className={`bg-white ${classes.profileImage}`} style={{ width: '10rem', height: '10rem', borderRadius: '100rem' }} />
                    <div className="w-50 text-white ">
                        <h2>Víctor Martínez</h2>
                        <p>Desarrollador Web FullStack</p>
                    </div>
                </div>
                <button type="button" className="btn-close text-reset position-absolute bg-white" data-bs-dismiss="offcanvas" aria-label="Close" style={{ top: '1rem', right: '1rem' }}></button>


            </div>
            <div className="offcanvas-body">
                <br />
                <p className="fs-2 mb-3 border-bottom">Descripcción general</p>
                <br />
                <p>¡Hola! Soy Víctor Martínez, un apasionado programador FullStack con varios años de experiencia en el desarrollo web.</p>
                <p>Me especializo en tecnologías MERN y he trabajado en una variedad de proyectos interesantes, desde una aplicación de administración de canciones hasta una aplicación móvil para administrar tareas de mesonería.</p>
                <p>A través de mi pasión por la programación y mi capacidad autodidacta, he adquirido habilidades y conocimientos que me permiten mejorar mi trabajo constantemente. También estoy siempre buscando oportunidades para aprender más y mantenerme actualizado en el mundo de la programación.</p>
                <p>Mi estilo de programación es centrado en la comprensión y el nombramiento adecuado de variables. Me gusta anotar y dibujar cosas, lo que me permite pensar mejor y asegurarme de que mi código sea fácil de entender y coherente. Cuando trabajo en proyectos de desarrollo web, divido el trabajo en contenido y diseño, y suelo hacer un boceto en papel y lápiz de cómo será la página antes de comenzar a programar.</p>
                <p>Aunque todavía no he tenido la oportunidad de trabajar en proyectos colaborativos, estoy abierto a hacerlo y trabajar en equipo. Uno de los proyectos más desafiantes en los que he trabajado fue una aplicación de administración de canciones, que me enseñó la perseverancia y la determinación, ya que me llevó un año completarlo.</p>
                <p>¡Me emociona lo que el futuro me depara en mi carrera como desarrollador web!</p>
                <br/>
                <p className="fs-2 mb-3 border-bottom">Educación</p>
                <br />
                <p>
                    Formalicé mis estudios como Bachiller en Ciencias en la escuela
                    secundaria Francisco Verde a los 16 años.
                </p>
                <p>
                    Actualmente llevo 3 años cursando la carrera de ingeniería de Sistemas
                    en la Universidad de Oriente Núcleo Monagas.
                </p>
            </div>
        </div>
    )
}

export default ProfileDescriptionCanvas;