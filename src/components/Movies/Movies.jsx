import React from 'react'
import { Link } from 'react-router-dom'
import userIcon from "../../assets/userIcon.png"
import { useState,useEffect } from 'react'
import "./Movies.css"
const genre=JSON.parse(localStorage.getItem("userGenere"))
const Movies = () => {
    const [gener1Data, setGener1Data] = useState([]);
  const [gener2Data, setGener2Data] = useState([]);
  const [gener3Data, setGener3Data] = useState([]);
  useEffect(() => {
    const getDataGenre1 = async () => {
      await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=d20a227b&s=${genre[0]}`
      )
        .then((response) => response.json())
        .then((response) => setGener1Data(response.Search.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    const getDataGenre2 = async () => {
      await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=d20a227b&s=${genre[1]}`
      )
        .then((response) => response.json())
        .then((response) => setGener2Data(response.Search.splice(4, 4)))
        .catch((err) => console.error(err));
    };
    const getDataGenre3 = async () => {
      await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=d20a227b&s=${genre[2]}`
      )
        .then((response) => response.json())
        .then((response) => setGener3Data(response.Search.splice(4, 4)))
        .catch((err) => console.error(err));
    };

    getDataGenre1();
    getDataGenre2();
    getDataGenre3();
  }, []);

  return (
    <div className="entertainment_container">
      <div className="user">
        <h3>Super app</h3>
        <Link to="/Browse">
          <img src={userIcon} alt="user" />
        </Link>
      </div>
      <div className="category_container">
      <h4>Entertainment according to your choice</h4>
      <div className="collection_container">
        <p>{genre[0]}</p>
        <div className="movies_container">
            {gener1Data?.map((item,id)=>{
                return(
                    <div key={id} className='images'>
                        <img src={item.Poster} alt={item.Title}/>
                        </div>
                )
            })}
            </div>
      </div>
      <div className="collection_container">
        <p>{genre[1]}</p>
        <div className="movies_container">
            {gener2Data?.map((item,id)=>{
                return(
                    <div key={id} className='images'>
                        <img src={item.Poster} alt={item.Title}/>
                        </div>
                )
            })}
            </div>
      </div>
      <div className="collection_container">
        <p>{genre[2]}</p>
        <div className="movies_container">
            {gener3Data?.map((item,id)=>{
                return(
                    <div key={id} className='images'>
                        <img src={item.Poster} alt={item.Title}/>
                        </div>
                )
            })}
            </div>
      </div>
      </div>
      </div>
  )
}

export default Movies
