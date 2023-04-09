import React from "react";
import ProfileDescriptionCanvas from "./ProfileDescriptionCanvas/ProfileDescriptionCanvas";
import SkillCanvas from "./ProfileDescriptionCanvas/SkillCanvas";


const Header = () => {

    return (
        <>

            <ul className="nav justify-content-center py-3 border-bottom" >
                <li className="nav-item">
                    <button type="button" className="btn text-secondary" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft" aria-controls="offcanvasLeft">Acerca de mi</button>
                </li>
                <li className="nav-item">
                    <button className="btn text-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Habilidades</button>
                </li>
            </ul>

            <ProfileDescriptionCanvas/>
            <SkillCanvas/>
        </>
    )
}

export default Header;