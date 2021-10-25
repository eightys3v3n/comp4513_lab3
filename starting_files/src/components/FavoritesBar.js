import React from "react";
import FavoriteItem from "./FavoriteItem.js";
import imgURL from "./imageURL.js";

const FavoritesBar = props => {
    let favorites = [...props.favorites];
    favorites.map( fav => {
        let photo = props.photos.find(p => p.id == fav);
        if (photo === undefined) {
            console.warn(`Couldn't find image information for favorite ${fav}`);
        }
        
        return {
            'source': imgURL(photo.filename),
            'title': photo.title,
            'alt': photo.title,
        };
    });

    console.log(favorites);
    
    return (
        <section className='favorites'>
            ❤ Favorites
            {favorites.map(
                fav => {
                    <FavoriteItem image={fav} />
                }
            )}
        </section>);
}

export default FavoritesBar;
