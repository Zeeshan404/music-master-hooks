import React from 'react';
import { connect } from 'react-redux';
const Artist = (props) => {
  const { artist } = props;
  if (!artist) return null;
  const { images, name, followers, genres } = artist;
  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(', ')}</p>
      <img className="artist-image" src={images[0] && images[0].url} alt='artist-profile' />
    </div>
  )
}


const mapStatetoProps = state => {
  const { artist } = state.ArtistReducer;
  return {
    artist,
  }
}
const mapDispatchtoProps = dispatch => {
  return {
  }
}

export default connect(mapStatetoProps, mapDispatchtoProps)(Artist);

