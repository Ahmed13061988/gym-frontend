import React from "react";

const gymCard = (props) =>{
    const {image_url, name} = props 
    return (

        <div className="card">
            <img src={image_url} alt={name}/>
            <p>{name}</p>

        </div>
    )
}

export default gymCard; 