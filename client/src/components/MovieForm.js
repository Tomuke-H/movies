import React, { useState} from 'react';
import './MovieForm.css'

const MovieForm = ({createMovie, updateMovie, movie, setEditForm}) => {
    const [title, setTitle] = useState(movie ? movie.title : 'Movie Title')
    const [genre, setGenre] = useState(movie ? movie.genre : 'Movie Genre')

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if(movie) {
                updateMovie({id: movie.id, title, genre})
            } else {
                createMovie({title, genre})
                setTitle('Movie Title')
                setGenre('Movie Genre')
            }
            setEditForm(false)
        } catch (errors) {
            alert(errors)
            console.log(errors.response)
        }

    }

    return (
        <div className="fill-the-space">
            <form className="movie-form" onSubmit={handleSubmit}>
                <div className="movie-form__inputs">
                    <input 
                        className="title-input" 
                        onFocus={()=> movie ? title : setTitle('')} 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <input 
                        className="genre-input" 
                        onFocus={()=> movie ? genre : setGenre('')} 
                        value={genre} 
                        onChange={(e) => setGenre(e.target.value)}
                    />
                </div>
                <div className="movie-form__button-wrapper">
                    <div className="movie-form__buttons"
                        onClick={() => setEditForm(false)}>
                        Cancel
                    </div>
                    <button className="movie-form__buttons">
                        {movie ? "Update" : "Add"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default MovieForm;