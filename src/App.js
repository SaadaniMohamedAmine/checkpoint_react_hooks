import React from 'react';
import './App.css';
import MoviesList from './MoviesList';

function App() {
  
  const moviesList=[
    {
      name:"Ip Man",
      image:"https://pic.egybest.net/i/WmFwZndlY21ZcHBwRW1wZWNtRXZ3UG1qUHdUWWc.jpg" ,
      rating:5,
      year:2019
    },
    {
      name:'Iron Man ',
      image:'https://pic.egybest.net/i/WmFwZndlY212bW1tcGJtRUVjbXZtRW1USXhtam1wSQ.jpg',
      rating:3,
      year:2019
    },
    {
      name:"Sighless",
      image:'https://pic.egybest.net/i/WmFwZndlY21ZTE5tbW1tam1hY21ieGNOam1UYm1vdw.jpg',
      rating:4,
      year:2020,
    }
  ];
  return (
    <div className="App">
      <header className="App-header">
      <MoviesList movies={movies.filter(movie=>
          movie.name
          .toLocaleLowerCase()
          .includes(search.trim().toLocaleLowerCase()) && movie.rating>=rating
          ) }/>
      </header>
    </div>
  );
}

export default App;
