import React from "react";

function SaveButton(props) {
    return (
        <button type="button" className="btn btn-primary float-right" onClick={props.onClick}>Save</button>
    )
}

export default SaveButton;