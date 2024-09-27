
import { useState } from 'react'
import {FaStar} from 'react-icons/fa'
import './styles.css'


export default function StartRating({noOfStarts}) {


    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)

    function handleClick(getCurrentIndex) {
        setRating(getCurrentIndex)
    }
    
    function handleMouseEnter(getCurrentIndex){
        setHover(getCurrentIndex)

    }
    function handleMouseLeave(getCurrentIndex) {
        setHover(getCurrentIndex)

    }
    return (
        <>
        <div className="star-rating">
            {
                [...Array(noOfStarts)].map((_,index) => {
                    index += 1
                    return <FaStar
                    key={index}
                    className={index<= (hover || rating) ? 'active':'inactive'}
                    onClick={()=>{handleClick(index)}}
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handleMouseLeave(index)}
                    size={40}
                    />
                })
            }

        </div>
        </>
    )
}