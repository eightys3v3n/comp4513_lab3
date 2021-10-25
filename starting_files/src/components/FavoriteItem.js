import React from "react";

const FavoriteItem = props => {
    return (
        <div className="item_wrapper">
            <p>favorite</p>
            <img src={props.src}
                 className="photoThumb"
                 title={props.title}
                 alt={props.alt} />
            <div className="popover_content">
                <button className="popover_button">
                    Remove
                </button>
            </div>
        </div>
    );
}

export default FavoriteItem;
