import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import "./Review.css"

const Review = ({review, deleteReview, updateReview}) => {
    const [editForm, setEditForm] = useState(false)
    return(
        <div className="review">
            {!editForm && <div className="review-wrapper">
                <h4 className="text">{review.text}</h4>
                <div className="review__bottom">
                    <h4 className="author">{review.author}</h4>
                    <div className="review__button-wrapper">
                        <div className="review__buttons" onClick={() => deleteReview(review.id)}>Delete Review</div>
                        <div className="review__buttons" onClick={() => setEditForm(!editForm)}>{editForm ? "Hide" : "Edit Review"}</div>
                    </div>
                </div> 
            </div>}
            {editForm && <ReviewForm review={review} updateReview={updateReview} setEditForm={setEditForm}/>}
        </div>
    )
}

export default Review;