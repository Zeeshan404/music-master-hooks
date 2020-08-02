import { FETCH_TRACKS } from './types'



export const fetchTracks = (tracks) => {
    // console.log("TRK Action")
    return { type: FETCH_TRACKS, payload: { tracks } }
}












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
