import React, { useState } from 'react'
import axios from 'axios'
import Review from './Review'


const Movie = ({movie, deleteMovie}) => {
    const [reviews, setReviews] = useState([])

    const getReviews = async () => {
        try {
        let res = await axios.get(`/api/movies/${movie.id}/reviews`)
        console.log(res)
        setReviews(res.data)
        } catch (errors) {
            console.log(errors.errors)
        }
    }

    const renderReviews = () => {
        return reviews.map((r) => {
            return (
                <Review review={r} key={r.id}/>
            )
        }
        )
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <h4>{movie.genre}</h4>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
            <button onClick={() => getReviews()}>Show Reviews</button>
            {renderReviews()}
        </div>
    )
}

export default Movie;