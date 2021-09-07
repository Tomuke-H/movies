import React, { useState} from 'react';
import './ReviewForm.css'

const ReviewForm = ({createReview, updateReview, review, setEditForm}) => {
    const [text, setText] = useState(review ? review.text : 'Comment here')
    const [author, setAuthor] = useState(review ? review.author : 'Author')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if(review) {
                updateReview({id: review.id, text, author})
            } else {
                createReview({text, author})
                setText('Comment here')
                setAuthor('Author')
            }
            setEditForm(false)
        } catch (errors) {
            alert(errors)
            console.log(errors.response)
        }

    }

    return (
        <div className="review-form__wrapper">
            <form className="review-form" onSubmit={handleSubmit}>
                <textarea 
                    className="text-input" 
                    onFocus={()=> review ? text : setText('')} 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="review-form__bottom">
                    <input 
                        className="author-input" 
                        onFocus={()=> review ? author : setAuthor('')} 
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    <div className="review-form__button-wrapper">
                        <div 
                            className="review-form__buttons" 
                            onClick={() => setEditForm(false)}>
                            Cancel
                        </div>
                        <button 
                            className="review-form__buttons">
                            {review ? "Update" : "Add"}
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm;