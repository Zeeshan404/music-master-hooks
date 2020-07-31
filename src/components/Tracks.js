import React, { useState, useEffect } from "react";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import { connect } from "react-redux";
import {fetchTracks} from '../redux/actions/TrackAction';
const Tracks = ( props ) => {
  const { tracks, fetchTracks } = props;
  console.log("TRACKS PROPS",props)
  const [playing, setPlaying] = useState(false);
  const [audio, setAudio] = useState(null);
  const [playingPreviewUrl, setPlayingPreviewUrl] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [sizePerPage, setSizePerPage] = useState(5);
  const [tracksQuery, setTracksQuery] = useState("");
  const [fliterArray, setFliterArray] = useState([]);


  useEffect(() => {
      fetchTracks()
      // setTracksQuery("");
      // setFliterArray([]);
  },[])

  function updateTrackQuery(e) {
    setCurrentPage(1);
    setTracksQuery(e)
    if (tracksQuery === "") {
      setFliterArray([])
    } else searchTracks();
  };

  function searchTracks() {
    fliterArray = tracks.filter(
      track =>
        track.name.toLowerCase().indexOf(tracksQuery.toLowerCase()) !== -1
    );
  };

  function changeCurrentPage(numPage) {
    setCurrentPage(numPage)
  };

  function playAudio(previewUrl) {
     
    // const audio = new Audio(previewUrl);
    // if (!playing) {
    //   audio.play();
    //   setPlaying(true)
    //   setAudio(audio)
    //   setPlayingPreviewUrl(previewUrl)
    // } else {
    //   audio.pause();
    //   if (playingPreviewUrl === previewUrl) {
    //     setPlaying(false)
    //   } else {
    //     audio.play();
    //     setAudio(audio)
    //     setPlayingPreviewUrl(previewUrl)
    //   }
    // }
  };

  function trackIcon(track) {
    if (!track.preview_url) {
      return <span> N / A </span>;
    }
    if (playing && playingPreviewUrl === track.preview_url) {
      return <span> | | </span>;
    }
    return <span> &#9654;</span>;
  };

  let paginateTracks = [];
  const endIndex = sizePerPage * currentPage;
  // if (fliterArray.length) {
  //   tracks = fliterArray;
  // }
  // else if (tracksQuery != '' && fliterArray.length == 0) {
  //   tracks = [];
  // }
  paginateTracks = tracks.slice(endIndex - sizePerPage, endIndex);
  return (
    <div>
      <hr />
      {/* <input
        id="TracksSearch"
        onChange={updateTrackQuery}
        placeholder="Search for a track"
        value={tracksQuery} /> */}
      <br />
      {paginateTracks.length ? (
        <div>
          {paginateTracks.map(track => {
            const { id, name, album, preview_url } = track;
            return (
              <div
                key={id}
                onClick={playAudio(preview_url)}
                // onClick={()=>{alert('Play Audio')}}
                className="track">
                <img
                  src={album.images[0].url}
                  alt="track-image"
                  className="track-image" />
                <p className="track-text"> {name} </p>
                <p className="track-icon"> {trackIcon(track)} </p>
              </div>
            );
          })}
          <Pagination
            totalSize={tracks.length}
            currentPage={currentPage}
            changeCurrentPage={changeCurrentPage}
            sizePerPage={sizePerPage}
          />
          <h2> current Page : {currentPage} </h2>
        </div>
      ) : (
          <div>
            <h3> No Tracks Found! </h3>
          </div>
        )}
    </div>
  );
}


const mapStatetoProps = state => {
  const {tracks} = state.TrackReducer
  return {
    tracks
  }
}
const mapDispatchtoProps = dispatch => {
  return { 
    fetchTracks: () => dispatch(fetchTracks()),
  }
}

export default connect(mapStatetoProps,mapDispatchtoProps)(Tracks);
