import { FETCH_ARTIST } from '../actions/types'
const initialState = {
    artist: null,
}
export default (state = initialState, { type, payload }) =>{
    switch (type) {
        case FETCH_ARTIST:
            return { ...state, artist: payload.artistObj }
        default:
            return state
    }
}