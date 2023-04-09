import React from "react";
import classes from "./SkillCanvas.module.css";
import utils from "../../../utilis.js";
import SkillList from "../SkillDescriptionCanvas/SkillList";
import SubtitleWithImage from "../SkillDescriptionCanvas/SubtitleWithImage";

const SkillCanvas = () => {
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel" style={{ zIndex: 2000 }}>
            <div className="offcanvas-header p-0 h-100">

                <div className="w-100 h-100">
                    <div id="carouselExampleCaptions" className="carousel slide h-100" data-bs-ride="carousel" style={{ width: '100%' }}>
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        </div>
                        <div className="carousel-inner h-100">
                            <div className="carousel-item active h-100">
                                <div className={classes.carouselImageOne} />
                                <div className="carousel-caption d-md-block">
                                    <h5>Certificado HTML</h5>
                                    <p>2003-2021</p>
                                    <a href="/images/html-certificate.png" className="btn btn-primary btn-sm">Ver certificado</a>
                                </div>
                            </div>
                            <div className="carousel-item h-100">
                                <div className={classes.carouselImageTwo} />
                                <div className="carousel-caption d-md-block">
                                    <h5>Certificado CSS</h5>
                                    <p>2003-2021</p>
                                    <a href="/images/css-certificate.png" className="btn btn-primary btn-sm">Ver certificado</a>
                                </div>
                            </div>
                            <div className="carousel-item h-100">
                                <div className={classes.carouselImageThree} />
                                <div className="carousel-caption d-md-block">
                                    <h5>Certificado Javascript</h5>
                                    <p>2003-2021</p>
                                    <a href="/images/javascript-certificate.png" className="btn btn-primary btn-sm">Ver certificado</a>
                                </div>
                            </div>
                            <div className="carousel-item h-100">
                                <div className={classes.carouselImageFour} />
                                <div className="carousel-caption d-md-block">
                                    <h5>Certificado Node.js</h5>
                                    <p>2003-2021</p>
                                    <a href="/images/nodejs-certificate.png" className="btn btn-primary btn-sm">Ver certificado</a>
                                </div>
                            </div>
                            <div className="carousel-item h-100">
                                <div className={classes.carouselImageFive} />
                                <div className="carousel-caption d-md-block">
                                    <h5>Certificado React</h5>
                                    <p>2003-2021</p>
                                    <a href="/images/react-certificate.png" className="btn btn-primary btn-sm">Ver certificado</a>
                                </div>
                            </div>
                            <div className="carousel-item h-100">
                                <div className={classes.carouselImageSix} />
                                <div className="carousel-caption d-md-block">
                                    <h5>Certificado PHP</h5>
                                    <p>2003-2021</p>
                                    <a href="/images/php-certificate.png" className="btn btn-primary btn-sm">Ver certificado</a>
                                </div>
                            </div>
                            <div className="carousel-item h-100">
                                <div className={classes.carouselImageSeven} />
                                <div className="carousel-caption d-md-block">
                                    <h5>Certificado Java</h5>
                                    <p>2003-2021</p>
                                    <a href="/images/java-certificate.png" className="btn btn-primary btn-sm">Ver certificado</a>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <button type="button" className="btn-close text-reset position-absolute end-0 top-0 bg-white m-2" data-bs-dismiss="offcanvas" aria-label="Close" style={{ zIndex: 1 }}></button>
                </div>

            </div>
            <div className="offcanvas-body p-0">
                <div className="p-4">
                    <SubtitleWithImage
                        image={"fa-solid fa-brain"}
                        text="Habilidades principales"
                        description="Referente a mis habilidades fuertemente asentadas" />
                    <SkillList skills={utils.mainskills} />
                </div>

                <div className="p-4">
                    <SubtitleWithImage
                        image={"fa-solid fa-brain"}
                        text="Experiencias"
                        description="Referente a mis experiencias como programador en ciertas tecnologías" />
                    <SkillList skills={utils.experiences} />
                </div>
                <div className="p-4">
                    <SubtitleWithImage
                        image={"fa-solid fa-brain"}
                        text="Otras habilidades comúnes"
                        description="Referente a mis habilidades que he usado durante mucho tiempo" />
                    <SkillList skills={utils.commonusage} />
                </div>




            </div>
        </div>
    );
}

export default SkillCanvas;