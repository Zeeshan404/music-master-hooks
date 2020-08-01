import React, { useEffect } from "react";
import Dots from 'react-activity/lib/Dots';
import 'react-activity/lib/Dots/Dots.css';
import Search from "./Search";
import Artist from "./Artist";
import Tracks from "./Tracks";
import { connect } from "react-redux";
import { SET_LOADING } from "../redux/actions/types";
const App = (props) => {
  const {artist,loading} = props;

  // useEffect(()=>{
  //   // dispatch({type:SET_LOADING,payload:{loading:false}})
  // },[artist])
  return (
    <div>
      <h2> Music Master </h2>
      <Search />
      {
        loading ?
          <div style={{ display: 'block', margin: 20 }}>
            <Dots size={50} />
          </div> :
          <>
            <Artist />
            <Tracks /></>
      }

    </div>
  );
}


const mapStatetoProps = state => {
  const { artist , loading } = state.ArtistReducer;
  return {
    artist,
    loading,
  }
}
const mapDispatchtoProps = dispatch => {
  return {
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(App);


