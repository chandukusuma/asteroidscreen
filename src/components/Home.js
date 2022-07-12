import React from 'react'
import "./CSS/Home.css"
import {useNavigate} from "react-router-dom"

function Home() {

    const navigate = useNavigate();



  return (
    <div>
        {/* <center><h1>Asteroid Screen</h1></center> */}
        
        <div className='navbar'>
            <p className='opt' onClick={() => navigate("/main")}>Input page</p>
        </div>
        <div className='navbar'>
            <p className='opt' onClick={() => navigate("/id")}>Asteroids ID page</p>
        </div>
        <img className='image' src='https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/pia24472-psyche-asteroid-illustration-16_0.jpg' alt=''/>
    </div>
  )
}

export default Home