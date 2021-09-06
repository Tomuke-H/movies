import React from 'react';

const Review = ({review}) => {
    return(
        <div>
            <h4>{review.text}</h4>
            <h4>{review.author}</h4>
        </div>
    )
}

export default Review;