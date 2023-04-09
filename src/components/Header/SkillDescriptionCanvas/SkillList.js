import React, { useState } from "react";
import SkillItem from "./SkillItem";

const SkillList = (props) => {

    

    return (
        <div className="d-flex flex-wrap my-4" style={{transition: "all 0.5s"}}>
            {props.skills.map(skill => <SkillItem key={skill} image={`${skill}-logo.png`} name={skill}/> )}
        </div>
    )
}

export default SkillList;