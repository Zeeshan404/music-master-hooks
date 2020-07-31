import React, { useEffect } from "react";
import Search from "./Search";
import Artist from "./Artist";
import Tracks from "./Tracks";
const App = (props) => {
  // function searchArtist(artistQuery) {
  //   fetchArtist()
  // };
  return (
    <div>
      <h2> Music Master </h2>
      <Search />
      <Artist />
      <Tracks />
    </div>
  );
}
export default App;




// const mapStatetoProps = state => {
//   return {
//   }
// }
// const mapDispatchtoProps = dispatch => {
//   return {
//     // fetchArtist: () => dispatch(fetchArtist()),
//   }
// }

// export default connect(mapStatetoProps, mapDispatchtoProps)(App);













// const componentConnector = connect(mapStatetoProps, mapDispatchtoProps)
// export default componentConnector(App);
// export default connect(
//   state=>({artist:state.artist,tracks:state.tracks}),
//   {fetchArtist}
// )(App)