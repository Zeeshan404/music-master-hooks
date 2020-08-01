import React, { useState, useEffect } from 'react';
import {connect} from 'react-redux';
import {searchArtist} from '../redux/actions/ArtistAction';

const Search = (props) => {
  const [ artistQuery, setArtistQuery ] = useState("");
  // useEffect(()=>{
  //   console.log("Props", props)
  // })
  const { searchArtist } = props;
  const  updateArtistQuery = e => {
    setArtistQuery(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      searchArtistLocal()
    }
  };

const searchArtistLocal =()=>{
  if(artistQuery!="")
  searchArtist(artistQuery)
}


  return (
    <div>
      <input
        onChange={updateArtistQuery}
        onKeyPress={handleKeyPress}
        value={artistQuery}
        placeholder='Search for an Artist'
      />
      <button onClick={searchArtistLocal}>Search</button>
    </div>
  )
}


const mapStatetoProps = state => {
  const { artistQuery } = state.ArtistReducer;
  return {
    artistQuery,
  }
}
const mapDispatchtoProps = dispatch => {
  return {
    searchArtist: (artistQuery) => searchArtist(artistQuery,dispatch),
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Search);


