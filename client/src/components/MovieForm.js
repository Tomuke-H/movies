import React, { useState} from 'react';

const MovieForm = ({createMovie}) => {
    const [title, setTitle] = useState('')
    const [genre, setGenre] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            createMovie({title, genre})
            setTitle('')
            setGenre('')
        } catch (errors) {
            alert(errors)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Title</p>
                <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                <p>Genre</p>
                <input value={genre} onChange={(e) => setGenre(e.target.value)}/>
                <button>Add</button>
            </form>
        </div>
    )
}

export default MovieForm;