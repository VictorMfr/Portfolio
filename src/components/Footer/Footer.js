import React from "react";

const Footer = () => {
    return (
        <div className="p-4 bg-black mt-5">
            <p className="text-white text-start fs-3 text-center">Contactame</p>
            <div className="d-flex flex-wrap justify-content-center">
                <i className="fa-solid fa-chevron-left me-3 fs-3 text-white "></i>
                <a href="" className="fa-solid fa-envelope me-3 fs-3 text-white text-decoration-none"></a>
                <a href="" className="fa-brands fa-twitter fs-3 text-white text-decoration-none"></a>
                <a href="" className="fa-brands fa-instagram ms-3 fs-3 text-white text-decoration-none"></a>
                <i className="fa-solid fa-chevron-right ms-3 fs-3 text-white "></i>
            </div>
        </div>

    )
}

export default Footer;