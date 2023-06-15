import React, { useState } from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div className="movie" key={imdbID}>
      <div>
        <p>{Year}</p>
      </div>

      <div>
        <img src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
      </div>

      <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
        {/* Display bookmark icon based on bookmarked state */}
        <span
          className={`bookmark-icon ${bookmarked ? 'bookmarked' : ''}`}
          onClick={handleBookmark}
        >
          {bookmarked ? (
            <i className="fas fa-bookmark"></i>
          ) : (
            <i className="far fa-bookmark"></i>
          )}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;