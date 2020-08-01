import React from "react";
import Search from "./Search";
import Artist from "./Artist";
import Tracks from "./Tracks";
const App = (props) => {
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
