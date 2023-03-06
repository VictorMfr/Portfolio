import React from "react";
import classes from "./Header.module.css"

const Header = () => {
    return (
        <>

            <ul class="nav justify-content-center py-3 border-bottom">
                <li class="nav-item">
                    <button type="button" class="btn text-secondary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">Acerca de mi</button>
                </li>
                <li class="nav-item">
                    <button class="btn text-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Habilidades</button>
                </li>
            </ul>


            <div class="offcanvas offcanvas-start postion-relative" id="offcanvasLeft" aria-labelledby="offcanvasLeftLabel" style={{ zIndex: 2000 }}>
                <div class="offcanvas-header p-0">
                    <div className={`position-relative start-0 d-flex justify-content-around align-items-center p-2 ${classes.profileBackground}`} style={{ width: '100%', height: '16rem' }}>
                        <div className={`bg-white ${classes.profileImage}`} style={{ width: '10rem', height: '10rem', borderRadius: '100rem' }}>

                        </div>
                        <div className="w-50 text-white">
                            <h2>Víctor Martínez</h2>
                            <p>Desarrollador Web FullStack</p>
                        </div>
                    </div>
                    <button type="button" class="btn-close text-reset position-absolute bg-white" data-bs-dismiss="offcanvas" aria-label="Close" style={{ top: '1rem', right: '1rem' }}></button>


                </div>
                <div class="offcanvas-body">
                    <div className="d-flex align-items-base mb-3">
                        <i class="fa-solid fa-user fs-1 me-3"></i>
                        <h3 className="m-0">Acerca de mi</h3>
                    </div>

                    <p>
                        Soy Víctor Daniel Martínez Franco, venezolano de 19 años con aproximadamente
                        3 años de experiencia en el desarrollo de web y casi 5 años de experiencia en el
                        mundo de la programación en general.
                    </p>
                    <p>
                        Soy desarrollador FullStack Jr, especializado principalmente al conjunto de tecnologías
                        MERN.
                    </p>

                    <p>
                        Mis habilidades o conocimientos actuales son el producto de cursos online y
                        mis capacidades autodidacta. Siempre estoy dispuesto a aprender.
                    </p>

                    <div className="d-flex align-items-base mb-3">
                        <i class="fa-solid fa-book fs-1 me-3"></i>
                        <h3>Educación</h3>
                    </div>

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


            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ zIndex: 2000 }}>
                <div class="offcanvas-header p-0" style={{ height: '16rem' }}>

                    <div className="w-100 h-100">
                        <div id="carouselExampleCaptions" class="carousel slide h-100" data-bs-ride="carousel" style={{ width: '100%' }}>
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                            </div>
                            <div class="carousel-inner h-100">
                                <div class="carousel-item active h-100">
                                    <div className={classes.carouselImageOne} />
                                    <div class="carousel-caption d-md-block">
                                        <h5>Certificado HTML</h5>
                                        <p>2003-2021</p>
                                        <button className="btn btn-primary btn-sm">Ver certificado</button>
                                    </div>
                                </div>
                                <div class="carousel-item h-100">
                                    <div className={classes.carouselImageTwo} />
                                    <div class="carousel-caption d-md-block">
                                        <h5>Certificado CSS</h5>
                                        <p>2003-2021</p>
                                        <button className="btn btn-primary btn-sm">Ver certificado</button>
                                    </div>
                                </div>
                                <div class="carousel-item h-100">
                                    <div className={classes.carouselImageThree} />
                                    <div class="carousel-caption d-md-block">
                                        <h5>Certificado Javascript</h5>
                                        <p>2003-2021</p>
                                        <button className="btn btn-primary btn-sm">Ver certificado</button>
                                    </div>
                                </div>
                                <div class="carousel-item h-100">
                                    <div className={classes.carouselImageFour} />
                                    <div class="carousel-caption d-md-block">
                                        <h5>Certificado Node.js</h5>
                                        <p>2003-2021</p>
                                        <button className="btn btn-primary btn-sm">Ver certificado</button>
                                    </div>
                                </div>
                                <div class="carousel-item h-100">
                                    <div className={classes.carouselImageFive} />
                                    <div class="carousel-caption d-md-block">
                                        <h5>Certificado React</h5>
                                        <p>2003-2021</p>
                                        <button className="btn btn-primary btn-sm">Ver certificado</button>
                                    </div>
                                </div>
                                <div class="carousel-item h-100">
                                    <div className={classes.carouselImageSix} />
                                    <div class="carousel-caption d-md-block">
                                        <h5>Certificado PHP</h5>
                                        <p>2003-2021</p>
                                        <button className="btn btn-primary btn-sm">Ver certificado</button>
                                    </div>
                                </div>
                                <div class="carousel-item h-100">
                                    <div className={classes.carouselImageSeven} />
                                    <div class="carousel-caption d-md-block">
                                        <h5>Certificado Java</h5>
                                        <p>2003-2021</p>
                                        <button className="btn btn-primary btn-sm">Ver certificado</button>
                                    </div>
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                        <button type="button" class="btn-close text-reset position-absolute end-0 top-0 bg-white m-2" data-bs-dismiss="offcanvas" aria-label="Close" style={{ zIndex: 1 }}></button>
                    </div>

                </div>
                <div class="offcanvas-body">
                    <div className="d-flex">
                        <i class="fa-solid fa-brain fs-1 me-3"></i>
                        <h3 className="m-0">Habilidades Principales</h3>
                    </div>
                    <div className="">
                        <div className="row">
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/react-logo.png" alt="react" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/nodejs-logo.png" alt="nodejs" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/express-logo.png" alt="express" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/mongodb-logo.png" alt="mongodb" width="32"/>
                            </div>                   
                        </div>
                        <div className="row">
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/html-logo.png" alt="html" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/css-logo.png" alt="css" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/javascript-logo.png" alt="javascript" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/bootstrap-logo.png" alt="bootstrap" width="32"/>
                            </div>                   
                        </div>
                        <div className="row">
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/sass-logo.png" alt="sass" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/socketio-logo.png" alt="socketio" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/figma-logo.png" alt="javascript" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/sql-logo.png" alt="sql" width="32"/>
                            </div>                   
                        </div>
                        <div className="row">
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/sqlite-logo.svg" alt="sqlite" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/php-logo.png" alt="php" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/java-logo.png" alt="java" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/python-logo.png" alt="python" width="32"/>
                            </div>                   
                        </div>
                        <div className="row">
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/unity-logo.png" alt="unity" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/gamemaker-logo.png" alt="gamemaker" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/blender-logo.png" alt="blender" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/premiere-logo.png" alt="premiere" width="32"/>
                            </div>                   
                        </div>
                        <div className="row">
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/illustrator-logo.png" alt="illustrator" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/canva-logo.png" alt="canva" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/word-logo.png" alt="word" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/aftereffects-logo.png" alt="aftereffects" width="32"/>
                            </div>                   
                        </div>
                        <div className="row">
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/excel-logo.png" alt="excel" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/powerpoint-logo.png" alt="powerpoint" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/cinema4d-logo.png" alt="cinema4d" width="32"/>
                            </div>
                            <div className="col shadow-sm p-3 mb-2 bg-body-tertiary rounded m-2 d-flex justify-content-center align-items-center">
                                <img src="./images/androidstudio-logo.png" alt="androidstudio" width="32"/>
                            </div>       
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Header;