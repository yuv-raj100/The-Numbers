import main from '../Images/main.png'
import { useState,useEffect } from 'react';
import MovieData from './MovieData';
import search from '../Images/search2.png'


export default function Header(){

    var url="http://www.omdbapi.com/?apikey=5afdc79d&t=";
    const [name,setName]=useState("")
    const [moveiData,setMovieData]=useState([])
  
    
    
    useEffect(()=>{
        if(name)
            getData();
        async function getData(){
          
            const res = await fetch(url+name);
            const data=await res.json();
            if(data.Response==="True"){
                setMovieData(prevData=>[...prevData,data]);
            }
            else{
                prompt("We have no info regarding this movie")
            }
                
        }
    },[name])

  

    function handleSubmit(e){
        e.preventDefault();
        
        setName(e.target.movieName.value)
      
    }

    const renderData=moveiData.map((s)=>{
        return <MovieData 
                        title={s.Title}
                        release={s.Released}
                        genre={s.Genre}
                        cast={s.Actors}
                        box={s.BoxOffice}
                        poster={s.Poster}
                        duration={s.Runtime}
                        country={s.Country}
                        plot={s.Plot}
                        ratings={s.Ratings}
                        award={s.Awards}
                        key={s.Title}
                />
    })

    return(
        <div className='main'>
            <img src={main} className='main-img'></img>
            <div className='main-form'>
                <form className='form' onSubmit={handleSubmit}>
                    <input type="text" name="movieName" id="movieName" placeholder="Enter your movie name"/>
                    <input type="image" src={search} onSubmit={handleSubmit} className='search-icon'/>
                    
                    {/* <button type="submit" id="btn">ok</button> */}
                </form>
            </div>
            {renderData}
        </div>
    )
}