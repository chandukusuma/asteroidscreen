import React, { useState } from 'react';
import axios from "axios";

function Id() {


    const [pick, setPick] = useState();

    const showId = () => {
        axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=yKErLdkpTZfeWzpcApJvaTnPEUUt4iWFSaaPK3te")
        .then((res) => {

            setPick(res.data.near_earth_objects);
            console.log(pick)

            // const listItems = pick.map((e) => {
            //     <li>{e.id}</li>
            // })

        })
    }

  return (
    <div>
        <h2>Asteroids ID's</h2>
        <button onClick={showId} style={{width: "15%", backgroundColor:"pink"}}>click</button>
        
        <div>
           {
            pick.map((e) => {
                return(
                    <li>
                        {e.id}
                    </li>
                )
            })
           }
        </div>

    </div>
  )
}

export default Id