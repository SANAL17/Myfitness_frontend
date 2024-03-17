import React from 'react'
import {Box} from '@mui/material'
import Partsexercises from './Partsexercises'
function Bodyparts({data,bodyPart,setBodyPart}) {
  return (
    <div>
        {
            data.map((item)=>(
                <Box 
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
                >
                <Partsexercises item={item} bodypart={bodyPart} setBodyPart={setBodyPart}/>
                </Box>
            ))
        }
    </div>
  )
}

export default Bodyparts