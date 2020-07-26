import React from 'react';
const Artist = ({ artist }) => {
  if (!artist) return null;
  const { images, name, followers, genres } = artist;
  return (
    <div>
      <h3>{name}</h3>
      <p>{followers.total} followers</p>
      <p>{genres.join(', ')}</p>
      <img className="artist-image"
        src={images[0] && images[0].url}
        alt='artist-profile'
      />
    </div>
  )
}

export default Artist;