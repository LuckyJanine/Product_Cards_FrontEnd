import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from "./components/MovieCard"

function App() {

  const movieNumber = 2;

  return (
    <>
      {movieNumber === 1 ? (
            <MovieCard movie={
              {
                title: "Tim's Film",
                release_date: "2024"
              }
            }
          />
        ) : (
            <MovieCard movie={
              {
                title: "Joes's Film",
                release_date: "2020"
              }
            }
          />
        )
      }
    </>
  )
}

function Text({display}){
  return (
    <div>
      <p>{display}</p>
    </div>
  )
}

export default App
