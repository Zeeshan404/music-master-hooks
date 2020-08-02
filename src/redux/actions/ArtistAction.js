import { FETCH_ARTIST, API_ADDRESS ,SET_LOADING  } from './types';
import {fetchTracks} from './TrackAction';

export const fetchArtist = (artist) => {
    return { type: FETCH_ARTIST, payload: { artist , loading: false } }
}

export const searchArtist = (artistQuery,dispatch) => {
    dispatch({ type: SET_LOADING, payload: { loading: true } });
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
        .then(response => response.json())
        .then(json => {
            if (json.artists.total > 0) {
                const artist = json.artists.items[0];
                dispatch(fetchArtist(artist))
                fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
                  .then(response => response.json())
                  .then(json => { dispatch(fetchTracks(json.tracks)) })
                  .catch(error => alert(error.message));
              }
      
        })
        .catch(error => {
            dispatch({ type: SET_LOADING, payload: { loading: false } });
            alert(error.message)});

};





    // fetch(`${API_ADDRESS}/artist/${artistQuery}`)
    //   .then(response => response.json())
    //   .then(json => {
        // if (json.artists.total > 0) {
        //   const artist = json.artists.items[0];
        //   setArtist(artist);
        //   fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
        //     .then(response => response.json())
        //     .then(json => { setTracks(json.tracks) })
        //     .catch(error => alert(error.message));
        // }
    //   })
    //   .catch(error => alert(error.message));
    // fetch(`${API_ADDRESS}/artist/Justin`)
    //     .then(response => response.json())
    //     .then(json => { 
    // return { type: FETCH_ARTIST, payload: { artistObj } }
    //  })
    //     .catch(error => alert(error.message));