import React, { useState, useEffect } from "react";
import Search from "./Search";
import Artist from "./Artist";
import Tracks from "./Tracks";
import { connect } from 'react-redux';
import { fetchArtist } from '../redux/actions/ArtistAction';


const App = (props) => {
  const { artist, tracks, fetchArtist } = props
  useEffect(() => {
    searchArtist();
  })

  function searchArtist(artistQuery) {
    fetchArtist()
  };

  return (
    <div>
      <h2> Music Master </h2>
      <Search />
      <Artist />
      <Tracks tracks={tracks} />
    </div>
  );
}




const mapStatetoProps = state => {
  return {
    artist: state.artist,
    tracks: state.tracks
  }
}
const mapDispatchtoProps = dispatch => {
  return {
    fetchArtist: () => dispatch(fetchArtist()),
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);
// const componentConnector = connect(mapStatetoProps, mapDispatchtoProps)
// export default componentConnector(App);
// export default connect(
//   state=>({artist:state.artist,tracks:state.tracks}),
//   {fetchArtist}
// )(App)