import React from "react";
import classes from "./Main.module.css"


const Main = () => {
    return (
        <div>
            <div className="text-center">
                <img src="/images/logo-portfolio.svg" alt="portfolio-image" className="mt-5 mb-4" style={{ width: '8rem' }} />
                <h1 className="mb-5">¡Bienvenido a mi portafolio!</h1>


                <div className="w-50 mx-auto">
                    <div className="row justify-content-center">
                        <div className="col-md-6 mb-4">
                            <div class="card mx-auto">
                                <img src="./images/example.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-start">Card with stretched link</h5>
                                    <p class="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div class="card mx-auto">
                                <img src="./images/example.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-start">Card with stretched link</h5>
                                    <p class="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <div class="card mx-auto">
                                <img src="./images/example.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-start">Card with stretched link</h5>
                                    <p class="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-5">
                            <div class="card mx-auto">
                                <img src="./images/example.png" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title text-start">Card with stretched link</h5>
                                    <p class="card-text text-start">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Main;