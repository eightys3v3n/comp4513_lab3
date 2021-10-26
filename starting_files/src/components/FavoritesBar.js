import React from "react";
import FavoriteItem from "./FavoriteItem.js";
import imgURL from "./imageURL.js";

const FavoritesBar = props => {
  let favorites = props.favorites.map( fav => {
    let photo = props.photos.find(p => p.id == fav);
    if (photo === undefined) {
      console.warn(`Couldn't find image information for favorite ${fav}`);
    }
        
    return {
      'source': imgURL(photo.filename),
      'title': photo.title,
      'alt': photo.title,
      'id': photo.id,
    };
  });
  
  return (
    <section className='favorites'>
      <h1>❤ Favorites</h1>
      { favorites.map(
        fav => {
          return (<FavoriteItem source={fav.source}
                                title={fav.title}
                                alt={fav.alt}
                                key={fav.id} />);
        })
      }
    </section>);
}

export default FavoritesBar;
