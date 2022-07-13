import React, { useState, useEffect } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";
import "./CSS/Id.css"

function Id() {


    const navigate = useNavigate()

    const [pick, setPick] = useState();

    useEffect(() => {
        axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=yKErLdkpTZfeWzpcApJvaTnPEUUt4iWFSaaPK3te")
        .then(res => {
            //console.log(res.data.near_earth_objects);
            setPick(res.data.near_earth_objects)
        })
        .catch(err => console.log(err))
    }, [pick]);

    const arr = pick.map((e, index) => {
        return (
            <div className='inner'>
                <p>{e.id}</p>
                <p>{e.name}</p>
                <p>{e.designation}</p>
            </div>
            
        )
    })
    


  return (
    <div className='outer'>
        <h1 style={{color:"white"}}>ASTEROIDS</h1>
        <ul className='border'>{arr}</ul>

    </div>
  )
}

export default Id