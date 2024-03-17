import React, { createContext, useState } from 'react'

export const addExerciseContextAPI= createContext()
export const editExerciseContextAPI= createContext()

function ContextShare({children}) {
    const [addExerciseRes,setAddExerciseRes]=useState("")
    const [editExerciseRes,setEditExerciseRes]=useState("")
    
  return (
    <div>
        <addExerciseContextAPI.Provider value={{addExerciseRes,setAddExerciseRes}}>
          <editExerciseContextAPI.Provider value={{editExerciseRes,setEditExerciseRes}}>
          {children}
          </editExerciseContextAPI.Provider>
        </addExerciseContextAPI.Provider>     
    </div>
  )
}

export default ContextShare