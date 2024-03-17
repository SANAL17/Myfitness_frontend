'all api call'

import { useParams } from 'react-router-dom'
import {baseUrl} from './baseUrl'
import { commonAPI } from './commonAPI'

// register api call 
export const  registerAPI = async(user) =>{
    return await commonAPI("post",`${baseUrl}/register`,user,"")
}

// login api call 
export const  loginAPI = async(user) =>{
    return await commonAPI("post",`${baseUrl}/login`,user,"")
}

// add exercise
export const addExerciseAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("post",`${baseUrl}/exercise/add`,reqBody,reqHeader)

}

// get all exercise api
export const allExerciseAPI =async (searchKey,reqHeader)=>{

    return await commonAPI("get",`${baseUrl}/exercise/all-exercise?search=${searchKey}`,"",reqHeader)
}

// update  exercise
export const updateExerciseAPI= async(exerciseId,reqBody,reqHeader)=>{
    return await commonAPI("put",`${baseUrl}/exercise/update-exercise/${exerciseId}`,reqBody,reqHeader)

}

// dlt exercise

export const deleteExerciseAPI=async(exerciseId,reqHeader)=>{

    return await commonAPI("delete",`${baseUrl}/exercise/delete-exercise/${exerciseId}`,{},reqHeader)

}

// one exercise
// export const OneExerciseAPI =async (Id,reqHeader)=>{
//     const {id}=useParams()

//     return await commonAPI("get",`${baseUrl}/exercise/get-one-exercise/${Id}`,"",reqHeader)

// }