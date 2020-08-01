import { FETCH_ARTIST, SET_LOADING } from '../actions/types'
const artistObj = {
    "external_urls": {
        "spotify": "https://open.spotify.com/artist/7vk5e3vY1uw9plTHJAMwjN"
    },
    "followers": {
        "href": null,
        "total": 22732779
    },
    "genres": ["electro house"],
    "href": "https://api.spotify.com/v1/artists/7vk5e3vY1uw9plTHJAMwjN",
    "id": "7vk5e3vY1uw9plTHJAMwjN",
    "images": [{
        "height": 640,
        "url": "https://i.scdn.co/image/86213c012b11a646e3c8c67c7aa093cccf7e6b48",
        "width": 640
    }, {
        "height": 320,
        "url": "https://i.scdn.co/image/71ab34f044b49e006d70df90fdd636032e732469",
        "width": 320
    }, {
        "height": 160,
        "url": "https://i.scdn.co/image/5b253facb0bca7172baec8c0d17a4eedb9799d75",
        "width": 160
    }],
    "name": "Alan Walker",
    "popularity": 85,
    "type": "artist",
    "uri": "spotify:artist:7vk5e3vY1uw9plTHJAMwjN"
}


const initialState = {
    artist: artistObj,
    loading: false
}
export default (state = initialState, { type, payload }) =>{
    switch (type) {
        case FETCH_ARTIST:
            return { ...state, artist: payload.artist , loading : payload.loading }
        case SET_LOADING:
            return { ...state, loading: payload.loading }
        default:
            return state
    }
}
















