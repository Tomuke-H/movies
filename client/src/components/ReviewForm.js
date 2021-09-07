import React, { useState} from 'react';
import './ReviewForm.css'

const ReviewForm = ({createReview, updateReview, review, setEditForm}) => {
    const [text, setText] = useState(review ? review.text : '')
    const [author, setAuthor] = useState(review ? review.author : '')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if(review) {
                updateReview({id: review.id, text, author})
                setEditForm(false)
            } else {
                createReview({text, author})
                setText('')
                setAuthor('')
            }
        } catch (errors) {
            alert(errors)
            console.log(errors.response)
        }

    }

    return (
        <div className="review-form__wrapper">
            <form className="review-form" onSubmit={handleSubmit}>
                <textarea className="text-input" value={text} onChange={(e) => setText(e.target.value)}/>
                <div className="review-form__bottom">
                    <input className="author-input" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                    <div className="review-form__button-wrapper">
                        <button className="review-form__buttons">{review ? "Update" : "Add"}</button>
                        <div className="review-form__buttons" onClick={() => setEditForm(false)}>Cancel</div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;