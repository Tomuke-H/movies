import React, { useState} from 'react';

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
        <div>
            <form onSubmit={handleSubmit}>
                <p>Text</p>
                <textarea value={text} onChange={(e) => setText(e.target.value)}/>
                <p>Author</p>
                <input value={author} onChange={(e) => setAuthor(e.target.value)}/>
                <button>{review ? "Update" : "Add"}</button>
            </form>
        </div>
    )
}

export default ReviewForm;