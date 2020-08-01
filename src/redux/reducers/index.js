import { combineReducers } from 'redux';
import ArtistReducer from './ArtistReducer';
import TrackReducer from './TrackReducer';

export const rootReducer = combineReducers({
    ArtistReducer,
    TrackReducer
});




