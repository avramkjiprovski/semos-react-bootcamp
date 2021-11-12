import React from 'react';
import PropTypes from 'prop-types';


export const Movies = (props) => {

    console.log(props);
    return (
        <div className="movies">
            <h2>Movies</h2>
            {
                props.movies.map((movie, index) => {
                    return (
                        <div key={index}>
                            <h3>{movie.name}</h3>
                            <p>{movie.releaseDate}</p>
                            <p>{movie.genre}</p>
                            <p>{movie.plot}</p>
                            <a href={movie.imdbLink}>Link here</a>
                            <img src={movie.imgUrl} alt={movie.name} />
                        </div>
                    )
                })
            }
        </div>
    )
}


Movies.propTypes = {
    movies: PropTypes.arrayOf(PropTypes.object)
}