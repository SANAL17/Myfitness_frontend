import React, { useEffect } from 'react'
import { allExerciseAPI } from '../services/allAPIs'
import axios from 'axios';
import { baseUrl } from '../services/baseUrl';

function Bodypart() {

    // const fetchAll = async()=>{
    //     const result = await axios.get(`${baseUrl}/exercise/all-exercise`)
    //     console.log(result);

    // }

    // useEffect(()=>{
    //     fetchAll()
    // },[])
  return (
    <div>Bodypart</div>
  )
}

export default Bodypart