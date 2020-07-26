import { FETCH_ARTIST } from '../actions/types'
const initialState = {
    artist: null
}
export const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_ARTIST:
            return { ...state, artist: payload }
        case "TEST_ACTION":
            return { ...state, testState: payload }
        default:
            return state
    }
}




