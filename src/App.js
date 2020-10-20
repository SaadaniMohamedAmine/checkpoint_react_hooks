import React,{useState} from 'react';
import './App.css';
import MoviesList from './MoviesList'
import AddMovie from './AddMovie'
import  Search from './Search' 
import Rating  from './Rating' 



function App () {
  
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
  const [movies,setMovies]=useState(moviesList) ;
  const addMovie=(newMovie)=>{
    setMovies([...movies,newMovie])
  }
  const [search,setSearch]=useState("");
  const [rating,setRating]=useState(1);
  const searchFunc=(value)=>{
    setSearch(value);
    //setMovies(movies);

  }
  const ratingFunc=(rate)=>{
    setRating(rate);
  }
  return (
    <div className="App">
      {/* <h2 className="title"> Welcome in our films store !!</h2>*/}
       <div className="something">
           <div className="search">
           <h4 className="tit">You searsh a movie ?</h4>
       <Search search={searchFunc}/>
           </div>
        <div className="rate">
          <h4 className="tit">Your rating is important :</h4>
        <Rating ratingFunc={ratingFunc} rating={rating}/>
        </div>
        <div className="add">
          <h4 className="tit">You want to add a new movie ?</h4>
        <AddMovie addMovie={addMovie}/>
        </div>
       </div>
        <div className="list">
       
           <MoviesList movies={movies.filter(movie=>
          movie.name
          .toLocaleLowerCase()
          .includes(search.trim().toLocaleLowerCase()) && movie.rating>=rating
          ) }/>
        </div>
        
    </div>
  )
}
export default App ;