import React from "react";

const SkillItem = (props) => {



    return (
        <div className="d-flex flex-column align-items-center">
            <div className="bg-white mx-2 border rounded shadow-sm p-3  justify-content-center align-items-center" style={{ transition: "all 0.5s" }}>
                <img src={`./images/${props.image}`} alt="react" width="32" style={{ transition: "all 0.5s" }} />
            </div>
            <p className="">{props.name}</p>
        </div>


    )
}

export default SkillItem;