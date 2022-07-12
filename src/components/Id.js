import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Id() {


    const navigate = useNavigate()

    const [pick, setPick] = useState();

    const showId = () => {
        axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=yKErLdkpTZfeWzpcApJvaTnPEUUt4iWFSaaPK3te")
        .then((res) => {

            setPick(res.data.near_earth_objects);
            console.log(res.data.near_earth_objects)


        })
    }

    // const listItems = pick.map((e) => {
    //     <li>{e.id}</li>
    // })


  return (
    <div>
        <h2>Asteroids ID's</h2>
        <div style={{width: "100%", backgroundColor:"whitesmoke", padding:"5px", display:"flex"}}>
            <h5>Navbar</h5>
            <p onClick={() => navigate("/main")} style={{
                width:"150px", 
                backgroundColor:"grey", 
                margin:"auto",
                padding:"5px", 
                fontWeight:"700", 
                borderRadius: "10px",
                color: "white"
            }}>
                From Page
            </p>
        </div>
        <button onClick={showId} style={{width: "15%", backgroundColor:"green", borderRadius:"10px"}}>click</button>
        {/* <div>
           <ul>{listItems}</ul>
        </div> */}

    </div>
  )
}

export default Id