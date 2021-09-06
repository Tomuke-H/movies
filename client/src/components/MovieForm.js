import React, { useState} from 'react';

const MovieForm = ({createMovie, updateMovie, movie, setEditForm}) => {
    const [title, setTitle] = useState(movie ? movie.title : '')
    const [genre, setGenre] = useState(movie ? movie.genre : '')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if(movie) {
                updateMovie({id: movie.id, title, genre})
                setEditForm(false)
            } else {
                createMovie({title, genre})
                setTitle('')
                setGenre('')
            }
        } catch (errors) {
            alert(errors)
            console.log(errors.response)
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>Title</p>
                <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                <p>Genre</p>
                <input value={genre} onChange={(e) => setGenre(e.target.value)}/>
                <button>{movie ? "Update" : "Add"}</button>
            </form>
        </div>
    )
}

export default MovieForm;