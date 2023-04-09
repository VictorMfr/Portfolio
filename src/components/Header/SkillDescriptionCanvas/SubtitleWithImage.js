import React from "react";

const SubtitleWithImage = (props) => {
    return (
        <div className="border rounded p-3 bg-white">
            <div className="d-flex mb-3">
                <i className={`${props.image} fs-4 me-3`}></i>
                <h5 className="m-0">{props.text}</h5>
            </div>
            <p>{props.description}</p>
        </div>
    )
}

export default SubtitleWithImage;