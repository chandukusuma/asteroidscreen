import React, { useState } from 'react'
import { useLocation } from "react-router-dom";
import "./CSS/SingleAsteroid.css"

function SingleAsteroid(props) {

    const state = useLocation();

    const [display, setDisplay] = useState(0);

    console.log(state)

    return (
        <div>

            <h3>Asteroid data</h3>

            {
                display == 0 ? (
                    <div className='container'>
                        <div className='data'>
                            <label className='head'>Id</label>
                            <p>{state.state.id}</p>
                        </div>
                        <div className='data'>
                            <label className='head'>NAME</label>
                            <p>{state.state.name}</p>
                        </div>
                        <div className='data'>
                            <label className='head'>DESIGNATION</label>
                            <p>{state.state.designation}</p>
                        </div>

                    </div>
                ) : (
                    <div>
                        {
                            JSON.stringify(state)
                        }
                    </div>
                )
            }


        </div>
    )
}

export default SingleAsteroid