import { FETCH_ARTIST_AND_TRACKS } from '../actions/types'
const initialState = {
    artist: null,
    tracks:[]
}
export const rootReducer = (state = initialState,{type,payload}) => {
    switch (type) {
        case FETCH_ARTIST_AND_TRACKS:
            console.log("PAYLOAD",payload)
        return { ...state, artist: payload.artistObj ,tracks:payload.trackObj }
        default:
            return state
    }
}




