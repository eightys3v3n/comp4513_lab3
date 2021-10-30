import React from "react";

const FavoriteItem = props => {
  function removeFavorite(e) {
    props.removeFavorite(props.id);
  }

  
  return (
    <div className="item_wrapper">
      <p>favorite</p>
      <img src={props.source}
           className="photoThumb"
           title={props.title}
           alt={props.alt} />
      <div className="popover_content">
        <button className="popover_button"
                onClick={removeFavorite} >
          Remove
        </button>
      </div>
    </div>
  );
}

export default FavoriteItem;
