import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Movie from './Movie';
import MovieForm from './MovieForm';
import './Movies.css'

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [newMovieForm, setNewMovieForm] = useState(false)

    useEffect(() => {
        getMovies();
    }, [])

    const getMovies = async () => {
        let res = await axios.get('/api/movies')
        console.log(res.data)
        setMovies(res.data)
    }
    const createMovie = async (movie) => { 
        try {
            let res = await axios.post("/api/movies", movie)
            console.log(res)
            setMovies([res.data, ...movies])
        }catch (errors) {
            alert(errors.errors)
        }
    }

    const updateMovie = async (movie) => {
        try {
            let res = await axios.put(`/api/movies/${movie.id}`, movie)
            let newMovies = movies.map(m => m.id === res.data.id ? res.data : m)
            setMovies(newMovies)
        } catch (error) {
            alert(error.errors)
        }
    }

    const deleteMovie = async (id) => {
        try {
            let res = await axios.delete(`api/movies/${id}`)
            let newMovies = movies.filter((m) => m.id !== res.data.id)
            setMovies(newMovies)
        }catch (err){
            alert(err.errors)
        }
    }

    const renderMovies = () => {
        return movies.map(m => {
            return <Movie updateMovie={updateMovie} deleteMovie={deleteMovie} movie={m} key={m.id}/>
        })
    }

    return (
        <div className="movies-wrapper">
            <button className="new-movie-button" onClick={() => setNewMovieForm(!newMovieForm)}>{newMovieForm ? "Hide" : "Add New Movie"}</button>
            {newMovieForm && <div className="movie-form__wrapper">
                <MovieForm 
                    setEditForm={setNewMovieForm} 
                    createMovie={createMovie}/>
                </div>
            }
            <div className="movie-list">
                {renderMovies()}
            </div>
        </div>
    );
};

export default Movies;