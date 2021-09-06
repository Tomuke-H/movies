import React, {useEffect, useState} from 'react';
import axios from 'axios'
import Movie from './Movie';
import MovieForm from './MovieForm';

const Movies = () => {
    const [movies, setMovies] = useState([])
    const [newMovieForm, setNewMovieForm] = useState(true)

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
            return <Movie deleteMovie={deleteMovie} movie={m} key={m.id}/>
        })
    }

    return (
        <div>
            <h1>MOVIES!</h1>
            <button onClick={() => setNewMovieForm(!newMovieForm)}>Add new Movie</button>
            {newMovieForm && <MovieForm createMovie={createMovie}/>}
            {renderMovies()}
        </div>
    );
};

export default Movies;