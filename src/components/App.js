import React, { useState, useEffect } from "react";
import Search from "./Search";
import Artist from "./Artist";
// import Tracks from "./Tracks";
import { connect } from 'react-redux';
import { fetchArtist, testAction } from '../redux/actions/ArtistAction';

// const API_ADDRESS = "https://spotify-api-wrapper.appspot.com";

const App = (props) => {

  const [artist, setArtist] = useState(props.artist)
  const [tracks, setTracks] = useState([])
  const { artistprops, fetchArtist ,testAction } = props
  useEffect(() => {
    // dispatch(artistActions.fetchArtist)
    // fetchArtist;
    console.log("PROPS", props)
    
  })
  console.log("PROPS", props)

  // console.log("Artist", artist)
  // console.log("Tracks", tracks)






  function searchArtist(artistQuery) {

  };

  return (
    <div>
      <h2> Music Master </h2>
      <Search searchArtist={searchArtist} />
      <Artist artist={artist} />
      <button onClick={testAction}>CLICKME!</button>
      {/* <Tracks tracks={tracks} /> */}
    </div>
  );
}




const mapStatetoProps = state => {
  return { artist: state.artist }
}
const mapDispatchtoProps = dispatch => {
  return { 
    fetchArtist: () => dispatch(fetchArtist()) ,
    testAction: () => dispatch(testAction()) 

  }
}
const componentConnector = connect(mapStatetoProps, mapDispatchtoProps)
export default componentConnector(App);
