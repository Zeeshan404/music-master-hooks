import React, { useState, useEffect } from "react";
import Pagination from "react-pagination-js";
import "react-pagination-js/dist/styles.css";
import { connect } from "react-redux";
import { fetchTracks } from '../redux/actions/TrackAction';
const Tracks = (props) => {
  let [state, setState] = useState({
    playing: false,
    audio: null,
    playingPreviewUrl: null,
    currentPage: 1,
    sizePerPage: 3,
    fliterArray: [],
  })
  let [tracksQuery, setTrackQuery] = useState("");
  let [paginateTracks, setPaginateTracks] = useState(props.tracks)
  let { tracks } = props;
  let { playing, audio, playingPreviewUrl, currentPage, sizePerPage, fliterArray } = state;

  useEffect(() => {
    searchTracks()
    setPaginatedData()
  }, [tracksQuery])

  const updateTrackQuery = (e) => {
    setTrackQuery(e.target.value)
  };
  const searchTracks = () => {
    if (tracksQuery == "") {
      setState((state) => ({ ...state, fliterArray: [] }))
    }
    else {
      if (currentPage != 1) {
        changeCurrentPage(1)
      }
      setFilterTracks()
    }
  };
  const setFilterTracks = async() => {
    let arr = await tracks.filter(track => track.name.toLowerCase().indexOf(tracksQuery.toLowerCase()) != -1)
    console.log("STATE",arr)

    setState((state) => ({ ...state, fliterArray:arr  }))
    // setPaginatedData()
  }
  const setPaginatedData = async () => {
    const endIndex = sizePerPage * currentPage;
    let arr = await paginateTracks.slice(endIndex - sizePerPage, endIndex);
    // console.log("STATE",{...state,tracksQuery})
    if (fliterArray.length > 0) {
      arr = await fliterArray.slice(endIndex - sizePerPage, endIndex);
    }
    else if (tracksQuery != '' && fliterArray.length == 0) {
      arr = await[];
    }
    setPaginateTracks(arr)
  }
  const changeCurrentPage = (numPage) => {
    setState((state) => ({ ...state, currentPage: numPage }))
  };
  const playAudio = (previewUrl) => {
    const localAudio = new Audio(previewUrl);
    if (!playing) {
      localAudio.play()
      setState({ ...state, playing: true, audio: localAudio, playingPreviewUrl: previewUrl })
    }
    else {
      audio.pause();
      if (playingPreviewUrl === previewUrl) {
        setState({ ...state, playing: false })
      } else {
        localAudio.play();
        setState({ ...state, audio: localAudio, playingPreviewUrl: previewUrl })
      }
    }
  };
  const trackIcon = (track) => {
    if (!track.preview_url) {
      return <span> N / A </span>;
    }
    if (playing && playingPreviewUrl === track.preview_url) {
      return <span> | | </span>;
    }
    return <span> &#9654;</span>;
  };
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      searchTracks()
    }
  };

 return (
    <div>
      <hr />
      <input
        id="TracksSearch"
        onChange={updateTrackQuery}
        onKeyPress={handleKeyPress}
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
                onClick={() => { playAudio(preview_url) }}
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
  const { tracks } = state.TrackReducer
  return {
    tracks
  }
}
const mapDispatchtoProps = dispatch => {
  return {
    fetchTracks: () => dispatch(fetchTracks()),
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Tracks);


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
// const useStateMerger = (state,change)=>{
//   const[state,setState] = useState({...state ,change})
//   return state;
// }
// const [state,setState] = useState((state)=>{return {...state , ...updatedValues}})
