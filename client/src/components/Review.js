import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import "./Review.css"

const Review = ({review, deleteReview, updateReview}) => {
    const [editForm, setEditForm] = useState(false)
    return(
        <div className="review">
            <h4>{review.text}</h4>
            <h4>{review.author}</h4>
            <button onClick={() => deleteReview(review.id)}>Delete Review</button>
            <button onClick={() => setEditForm(!editForm)}>{editForm ? "Hide" : "Edit Review"}</button>
            {editForm && <ReviewForm review={review} updateReview={updateReview} setEditForm={setEditForm}/>}
        </div>
    )
}

export default Review;