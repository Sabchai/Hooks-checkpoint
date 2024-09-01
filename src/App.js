import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import Filter from './Components/Filter';
import './App.css';

const App = () => {
    const [movies, setMovies] = useState([
        {
            id: 1,
            title: "Project Silence",
            description: "Una emocionante película de acción y misterio.",
            posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXdPzUGfeBXozoO-t7Ys0SN8zcaPouJoyfcA&s",
            rating: 10
        },
        {
            id: 2,
            title: "The Medallion",
            description: "Una película de aventuras con mucha acción.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/0/0c/The_Medallionposter.jpg",
            rating: 10
        },
        {
            id: 3,
            title: "Catwoman",
            description: "Una película de superhéroes basada en el personaje de DC Comics.",
            posterURL: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Catwoman_poster.jpg/220px-Catwoman_poster.jpg",
            rating: 8
        },
        {
            id: 4,
            title: "Kidnap",
            description: "Un thriller sobre una madre que busca a su hijo secuestrado.",
            posterURL: "https://m.media-amazon.com/images/M/MV5BMTcyNDgyODEzOV5BMl5BanBnXkFtZTgwMTI4MTA2MjI@._V1_.jpg",
            rating: 9.5
        },
        {
            id: 5,
            title: "The Call",
            description: "Un thriller psicológico que involucra una llamada de emergencia.",
            posterURL: "https://m.media-amazon.com/images/I/71wFWUNbfDL._AC_UF894,1000_QL80_.jpg",
            rating: 8.5
        },
        {
            id: 6,
            title: "Face/Off",
            description: "Un thriller de acción con intercambios de identidad.",
            posterURL: "https://m.media-amazon.com/images/M/MV5BYzFjNzIxMmEtMzY5NS00YTgzLTkwYWEtN2FjMmY0NmNkZWY3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
            rating: 10
        },
        {
            id: 7,
            title: "The Blind Side",
            description: "Una inspiradora historia basada en hechos reales.",
            posterURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtBvn4TZ2ReUR-4YKFztFyfgNl0aW61JSWnQ&s",
            rating: 9
        }
    ]);

    const [filteredMovies, setFilteredMovies] = useState(movies);

    const addMovie = (newMovie) => {
        const updatedMovies = [...movies, newMovie];
        setMovies(updatedMovies);
        setFilteredMovies(updatedMovies);
    };

    const filterMovies = ({ title, rating }) => {
        const lowercasedTitle = title.toLowerCase();
        const filtered = movies.filter(movie =>
            (lowercasedTitle ? movie.title.toLowerCase().includes(lowercasedTitle) : true) &&
            (rating ? movie.rating >= parseFloat(rating) : true)
        );
        setFilteredMovies(filtered);
    };

    const handleAddMovie = () => {
        const newMovie = {
            title: 'New Movie',
            description: 'Description of new movie',
            posterURL: 'https://example.com/new-movie.jpg',
            rating: 7.5
        };
        addMovie(newMovie);
    };

    return (
        <div className="app">
            <h1>My Movie App</h1>
            <button onClick={handleAddMovie}>Add New Movie</button>
            <Filter onFilter={filterMovies} />
            <MovieList movies={filteredMovies} />
        </div>
    );
};

export default App;
