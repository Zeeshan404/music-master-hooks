import { FETCH_ARTIST, API_ADDRESS  } from './types'


export const fetchArtist = (json) => {
    const artist = json.artists.items[0];
    return { type: FETCH_ARTIST, payload: { artist } }
}

export const searchArtist = (artistQuery,dispatch) => {
    fetch(`${API_ADDRESS}/artist/${artistQuery}`)
        .then(response => response.json())
        .then(json => {dispatch(fetchArtist(json))})
        .catch(error => alert(error.message));
};


    // fetch(`${API_ADDRESS}/artist/${artistQuery}`)
    //   .then(response => response.json())
    //   .then(json => {
    //     if (json.artists.total > 0) {
    //       const artist = json.artists.items[0];
    //       setArtist(artist);
    //       fetch(`${API_ADDRESS}/artist/${artist.id}/top-tracks`)
    //         .then(response => response.json())
    //         .then(json => { setTracks(json.tracks) })
    //         .catch(error => alert(error.message));
    //     }
    //   })
    //   .catch(error => alert(error.message));
    // fetch(`${API_ADDRESS}/artist/Justin`)
    //     .then(response => response.json())
    //     .then(json => { 
    // return { type: FETCH_ARTIST, payload: { artistObj } }
    //  })
    //     .catch(error => alert(error.message));