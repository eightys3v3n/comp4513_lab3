import React from "react";
import FavoriteItem from "./FavoriteItem.js";

const FavoritesBar = props => {
    return (
        <section className='favorites'>
            ❤ Favorites
            {props.favorites.map(
                fav => {
                    <FavoriteItem image={fav} />
                }
            )}
        </section>);
}

export default FavoritesBar;
