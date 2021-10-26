import React from "react";
import imgURL from "./imageURL.js";

const PhotoThumb = props => {
    const handleViewClick = () => {
        props.showImageDetails(props.photo.id);
    }
    
    const addFavoriteClick = (e) => {
        props.addFavorite(props.photo.id);
    }
    
    return ( 
        <div className="photoBox">
            <figure>
                <img src={imgURL(props.photo)}
                     className="photoThumb"
                     title={props.photo.title}
                     alt={props.photo.title}
                     onClick={ handleViewClick } />
            </figure>
            <div>
                <h3>{props.photo.title}</h3>
                <p>{props.photo.location.city}, {props.photo.location.country}</p>    
                <button onClick={ handleViewClick }>View</button>
                <button onClick={ addFavoriteClick }>❤</button>                  
            </div>
        </div>
    );
}

export default PhotoThumb;
