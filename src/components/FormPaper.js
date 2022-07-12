import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./CSS/FormPaper.css"

function FormPaper() {

    const [id, setId] = useState("");

    const [random, setRandom] = useState();

    const navigate = useNavigate();



    //fetching url for displaying data by ID 

    const createAction = (id) => {

        console.log(id)

        axios.get(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=yKErLdkpTZfeWzpcApJvaTnPEUUt4iWFSaaPK3te`)
            .then((res) => {
                console.log(res)
                navigate("/Single", { state: res.data });
            })
            .catch(() => {
                alert("Enter valid id");
            })

    }


    //fetching url for random list of asteroids

    const fetchData = () => {
        axios.get("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=yKErLdkpTZfeWzpcApJvaTnPEUUt4iWFSaaPK3te")
            .then((response) => {
                setRandom(response.data.near_earth_objects)
                random.map((e) => {
                    console.log(e.id)
                })
            })
            .catch((e) => e.message)
    }

    return (
        <div>
            <h3>Form Page</h3>

            <input type="text" placeholder='Enter the ID' className='input'
                onChange={(e) => setId(e.target.value)}
            />
            <br></br>
            <button onClick={() => createAction(id)} className="button">Submit</button>
            <br></br>
            <button className='button' onClick={fetchData}>Click for random asteroids</button>
            <div>
                
            </div>


        </div>
    )
}

export default FormPaper