import React, { useState } from "react";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import { connect } from "react-redux";
import {fetchTracks} from '../redux/actions/TrackAction';
// const useStateMerger = (state,change)=>{
//   const[state,setState] = useState({...state ,change})
//   return state;
// }
// const [state,setState] = useState((state)=>{return {...state , ...updatedValues}})

const Tracks = ( props ) => {
  const [state, setState] = useState({
    playing: false,
    audio: null,
    playingPreviewUrl: null,
    currentPage: 1,
    sizePerPage: 4,
    fliterArray: []
  })
  const [tracksQuery, setTrackQuery] = useState("")
  const { tracks } = props;
  const { playing, audio, playingPreviewUrl, currentPage, sizePerPage, fliterArray } = state;
  

  // useEffect(() => {
  //     // fetchTracks()
  //     // setTracksQuery("");
  //     // setFliterArray([]);
  // },[])

  function updateTrackQuery(e) {
    // console.log("event",e.target.value)
    setTrackQuery(e.target.value)
    // tracksQuery = e.target.value;
    // this.state.tracksQuery = e.target.value;
    setState({...state , currentPage : 1})
    if (tracksQuery === "") {
      setState({...state,fliterArray:[]})
    } 
    
    // else { 
    //   searchTracks();
    // }
  };
console.log("STATE", state)

  function searchTracks() {
    fliterArray = tracks.filter(
      track =>
        track.name.toLowerCase().indexOf(tracksQuery.toLowerCase()) !== -1
    );
  };

  function changeCurrentPage(numPage) {
    setState({...state ,currentPage:numPage})
  };

  function playAudio(previewUrl) {
    const localAudio = new Audio(previewUrl);
    if (!playing) {
      localAudio.play()
      setState({...state , playing:true ,audio:localAudio, playingPreviewUrl:previewUrl})
    }
     else {
      audio.pause();
      if (playingPreviewUrl === previewUrl) {
        setState({...state , playing:false })
      } else {
        localAudio.play();
        setState({...state ,audio:localAudio, playingPreviewUrl:previewUrl})
      }
    }
  };
console.log("TRACKS QUERY", tracksQuery)
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
      <input
        id="TracksSearch"
        onChange={updateTrackQuery}
        placeholder="Search for a track"
        value={tracksQuery} />
      <br />
      {paginateTracks.length ? (
        <div>
          {paginateTracks.map(track => {
            const { id, name, album, preview_url } = track;
            return (
              <div
                key={id}
                onClick={()=>{playAudio(preview_url)}}
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


// const PLAY = "PLAY"
// const PLAY_IF_NOT_PLAYING ="PLAY_IF_NOT_PLAYING"
// const PLAY_IF_ALREADY_PLAYING ="PLAY_IF_ALREADY_PLAYING"
// const initialState = {
//   playing: false,
//   audio: null,
//   playingPreviewUrl:null,
//   currentPage:1,
//   sizePerPage:4,
//   tracksQuery:"",
//   fliterArray:[]
// };
// const reducer = (state, {type,payload}) => {
//   switch (type) {
//     case PLAY:
//       return { ...state, playing: payload.playing };
//     case PLAY_IF_NOT_PLAYING:
//       return { ...state, playing: payload.playing,audio: payload.audio , playingPreviewUrl : payload.playingPreviewUrl  };
//     case PLAY_IF_ALREADY_PLAYING:
//       return { ...state, audio: payload.audio, playingPreviewUrl: payload.playingPreviewUrl };
//     default:
//       return state;
//   }
// };
// const [state, dispatch] = useReducer(reducer, initialState);
// const { playing, audio, playingPreviewUrl, currentPage, sizePerPage, tracksQuery, fliterArray } = state;


// if(!playing) {
//   await audio.play();
//   dispatch({ type: PLAY_IF_NOT_PLAYING, payload: { playing: true , audio: audio, playingPreviewUrl: previewUrl} })
// }
// else {
//   if (playingPreviewUrl === previewUrl) {
//     await audio.pause();
//     dispatch({ type: PLAY, payload: { playing: false  } })

//   }
//   else {
//     await audio.play();
//     dispatch({ type: PLAY, payload: { audio: audio, playingPreviewUrl: previewUrl  } })
//   }
// }
