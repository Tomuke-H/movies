import React, { useState } from 'react'
import axios from 'axios'
import Review from './Review'
import MovieForm from './MovieForm'
import ReviewForm from './ReviewForm'
import "./Movie.css"


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
        <div className="movie-wrapper">
            <div className="movie-card">
                {!editForm && <div className="movie__info-wrapper">
                    <h1 className="movie__title">{movie.title}</h1>
                    <h4>Genre: {movie.genre}</h4>
                </div>}
                {editForm && <MovieForm movie={movie} updateMovie={updateMovie} setEditForm={setEditForm}/>}
                <div className="movie__button-wrapper">
                    <button className="movie__buttons" onClick={() => setEditForm(!editForm)}>{editForm ? "Hide Edit Form" : "Edit Movie"}</button>
                    <button className="movie__buttons" onClick={() => deleteMovie(movie.id)}>Delete Movie</button>
                    <button className="movie__buttons" onClick={() => handleReviewClick()}>{reviewDisplay ? "Hide Reviews" : "Reviews"}</button>
                </div>
            </div>

            {reviewDisplay && <button 
                    className="new-review-button"
                    onClick={() => setNewReviewForm(!newReviewForm)}>
                    {newReviewForm ? "Hide" : "Add Review"}
                </button>
            }

            {newReviewForm && <div className="new-review-wrapper">
                <ReviewForm 
                    setEditForm={setNewReviewForm} 
                    createReview={createReview}
                /> </div>}
            {reviewDisplay && renderReviews()}
        </div>
    )
}

export default Movie;