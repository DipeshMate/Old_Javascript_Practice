import React, { useEffect, useState } from 'react';
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi"
import { AiOutlinePlus } from "react-icons/ai"

const apiKey = "aefba3a7ac1180603c122cc3660eaad9";
const url = "https://api.themoviedb.org/3";
const imgUrl = "https://image.tmdb.org/t/p/original";

const trending = "trending";
const time_window = "day";
const popular = "popular";
const upcoming = "upcoming";

const Card = ({ img }) => (<img src={img} alt="cover" className='card' />)

const Row = ({ title, arr = []}) => 
(
    <div className="row">
            <h2>{title}</h2>
            
        <div>{arr.map((item, index) => (
            <Card key={index} img={`${imgUrl}/${item.poster_path}`} />
            ))}
            </div>
    </div>
        )
const Home = () => {

    const [trendingMovie, setTrendingMovie] = useState([]);
    const [popularMovie, setPopularMovie] = useState([]);
    const [popularTv, setPopularTv] = useState([]);
    const [upcomingMovie, setUpcomingMovie] = useState([]);
    const [genre, setGenre] = useState([]);

    useEffect(() => {
        const fetchTrending = async () => {
            const { data: { results} } = await axios.get(`${url}/${trending}/movie/${time_window}?api_key=${apiKey}`)
            setTrendingMovie(results);
        };
        const fetchPopular = async () => {
            const { data: { results }, } = await axios.get(`${url}/movie/${popular}?api_key=${apiKey}`)
            setPopularMovie(results);
        };
        const fetchPopularTv = async () => {
            const { data: { results }, } = await axios.get(`${url}/tv/${popular}?api_key=${apiKey}`)
            setPopularTv(results);
        };
        const fetchUpcoming = async () => {
            const { data: { results }, } = await axios.get(`${url}/movie/${upcoming}?api_key=${apiKey}`)
            setUpcomingMovie(results);
        };
        const genreAll = async () => {
            const { data: { genres}, } = await axios.get(`${url}/genre/movie/list?api_key=${apiKey}`)
            setGenre(genres);
            console.log(genres);
        };

        genreAll();
    
        fetchTrending();
        fetchPopular();        
        fetchPopularTv();        
        fetchUpcoming();
    },[])

  return (
      <section className="home">
          <div className="banner" style={{
              backgroundImage:  popularMovie[0] ? `url(${`${imgUrl}/${popularMovie[0].poster_path}`})` : "rgb(26,26,26)"
          }}>
                   {popularMovie[0] && <h1>{popularMovie[0].original_title}</h1>}
                {popularMovie[0] && <p>{popularMovie[0].overview}</p>}

                <div>
                    <button> <BiPlay /> Play  </button>
                    <button> My List <AiOutlinePlus /> </button>
                </div>
              
          </div>
          <Row title={"Trending Movies"} arr={ trendingMovie} />
          <Row title={"Popular Movies"} arr={ popularMovie} />
          <Row title={"Popular Tv Series"} arr={ popularTv} />
          <Row title={"Upcoming Movies"} arr={upcomingMovie} />
          
          <div className="genreBox">
          {genre.map((item) => (
        <Link key={item.id} to={`/genre/${item.id}`}> {item.name}</Link>
          ))
        }
            </div>
    </section>
  )
}

export default Home
