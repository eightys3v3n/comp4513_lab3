import './App.css';
import React, { useEffect, useState }  from "react";
import HeaderApp from './components/HeaderApp.js';
import PhotoBrowser from './components/PhotoBrowser.js';
import * as cloneDeep from 'lodash/cloneDeep';
import { Route } from 'react-router-dom';
import Home from './components/Home.js';
import FavoritesBar from './components/FavoritesBar.js';

function App() {
    const [photos, setPhotos] = useState([]);
    const [favorites, setFavorites] = React.useState([]);
    
/*   useEffect( () => {
    const url = "https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php?iso=gb";
    fetch(url)
      .then( resp => resp.json() )
      .then( data => setPhotos(data))
      .catch( err => console.error(err));

  }); */

  useEffect(  () => {
    const getData = async () => {
      try {
        const url = "https://www.randyconnolly.com/funwebdev/3rd/api/travel/images.php?iso=gb";
        const response = await fetch(url);
        const data = await response.json();
          setPhotos(data);
          console.log(photos[0]);
      }
      catch (err) {
        console.error(err);
      }
    };
    // invoke the async function
    getData();
  }, [] );

  const updatePhoto = (id, photo) => {
    // Create deep clone of photo array from state.
    // We will use a lodash function for that task.
    const copyPhotos = cloneDeep(photos);
    // find photo to update in cloned array
    const photoToReplace = copyPhotos.find( p => p.id === id);
    // replace photo fields with edited values
    photoToReplace.title = photo.title;
    photoToReplace.location.city = photo.location.city;
    photoToReplace.location.country = photo.location.country;
    // update state
    setPhotos(copyPhotos);
  }

    const addFavorite = (id) => {
        console.log(`Adding favorite ${id}`);
    }

    const removeFavorite = (id) => {
        console.log(`Removing favorite ${id}`);
    }
    

  return (
    <main>
      <HeaderApp />
      <Route path='/' exact component={Home} />
        <Route path='/home' exact component={Home} />
        <Route path='/browse' exact 
               render={ (props) =>
                   <div>
                       <FavoritesBar favorites={favorites}
                                     removeFavorite={removeFavorite}
                       />
                       <PhotoBrowser 
                           photos={photos}
                           updatePhoto={updatePhoto}
                           addFavorite={addFavorite}
                       />
                   </div>
               }
         />
    </main>
  );
}


/* class App extends React.Component { 

  constructor(props) {
    super(props);
    this.state = { photos: [] };
  }

  async componentDidMount() {
    try {
      const url = "http://randyconnolly.com/funwebdev/3rd/api/travel/images.php?iso=gb";
      const response = await fetch(url);
      const jsonData = await response.json();
      this.setState( {photos: jsonData } );
    }
    catch (error) {
       console.error(error);
    }
  }
  
  
  render() {
    return (
      <main>
        <HeaderApp />
        <PhotoBrowser photos={this.state.photos} />
      </main>
    );
  }
} */

export default App;
