import React from "react";
import { Link } from "react-router-dom"

const gymCard = (props) =>{
    const {image_url, name, id} = props 
    return (

        <div className="card">
            <img src={image_url} alt={name}/>
            <p><Link to={`/gyms/${id}`}>{name}</Link></p>

        </div>
    )
}

export default gymCard; 