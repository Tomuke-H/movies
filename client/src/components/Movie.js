import React, { useState } from 'react'
import axios from 'axios'
import Review from './Review'
import MovieForm from './MovieForm'
import ReviewForm from './ReviewForm'


const Movie = ({movie, deleteMovie, updateMovie}) => {
    const [editForm, setEditForm] = useState(false)
    const [newReviewForm, setNewReviewForm] = useState(false)
    const [reviews, setReviews] = useState([])
    const [reviewDisplay, setReviewDisplay] = useState(false)

    const getReviews = async () => {
        try {
        let res = await axios.get(`/api/movies/${movie.id}/reviews`)
        setReviews(res.data)
        } catch (errors) {
            console.log(errors.errors)
        }
    }

    
    const createReview = async (review) => {
        try {
            let res = await axios.post(`api/movies/${movie.id}/reviews`, review)
            setReviews([res.data, ...reviews])
        } catch (errors) {
            console.log(errors.response)
        }
    }

    const updateReview = async (review) => {
        try {
            let res = await axios.put(`/api/movies/${movie.id}/reviews/${review.id}`, review)
            let newReviews = reviews.map(r => r.id === res.data.id ? res.data : r)
            setReviews(newReviews)
        } catch (errors) {
            console.log(errors.response)
        }
    }

    const deleteReview = async (id) => {
        try {
            let res = await axios.delete(`/api/movies/${movie.id}/reviews/${id}`)
            let newReviews = reviews.filter(r => r.id !== res.data.id)
            setReviews(newReviews)
        } catch (errors) {
            alert(errors.response)
        }
    }
    
    const handleReviewClick = () =>{
        if(!reviewDisplay){
            getReviews()
        }
        setReviewDisplay(!reviewDisplay)
    }

    const renderReviews = () => {
        return reviews.map((r) => {
            return (
                <Review deleteReview={deleteReview} updateReview={updateReview} review={r} key={r.id}/>
            )
        }
        )
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <h4>{movie.genre}</h4>
            <button onClick={() => setEditForm(!editForm)}>{editForm ? "Hide Edit Form" : "Edit Movie"}</button>
            <button onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
            <button onClick={() => handleReviewClick()}>{reviewDisplay ? "Hide Reviews" : "Show Reviews"}</button>
            {editForm && <MovieForm movie={movie} updateMovie={updateMovie} setEditForm={setEditForm}/>}

            {reviewDisplay && <button onClick={
                () => setNewReviewForm(!newReviewForm)}>
                    {newReviewForm ? "Hide" : "Add Review"}
                </button>
            }

            {newReviewForm && <ReviewForm createReview={createReview}/>}
            {reviewDisplay && renderReviews()}
        </div>
    )
}

export default Movie;