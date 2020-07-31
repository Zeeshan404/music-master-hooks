import { FETCH_TRACKS } from '../actions/types'
const initialState = {
    tracks: []
}
export default (state = initialState, { type, payload }) =>{
    switch (type) {
        case FETCH_TRACKS:
          console.log("TRK REDUCER")
            return { ...state, tracks: payload.trackObj }
        default:
            return state
    }
}

