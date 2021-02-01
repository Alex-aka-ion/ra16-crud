import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

export default function Note(props) {
    return <div className="card w-50">
        <span className="pull-right clickable close-icon"><button className="fa fa-times" onClick={() => props.onDelete(props.id)}>X</button></span>
        <div className="card-body">
            <p className="card-text">{props.children}</p>
        </div>
    </div>
}
