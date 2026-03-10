import React from 'react'
import '../index.css'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className='card'>
            <div className='top'>
                    <img src = {props.logo} alt='#'></img>
                   
                    <button> Save <Bookmark/> </button>

            </div>

        <div className='center'>
           <h3>{props.company} <span>{props.posted}</span></h3> 
           <h2>{props.role}</h2>
            <div className='tag'>
                <h4>{props.timming}</h4>
                <h4>{props.level}</h4>
            </div>
        </div>

        <div className="bottom">
            <div>
               
                    <h3>{props.salary}</h3>
                    <p>{props.location}</p>

            </div>
        
                <button>Apply now</button>
          
        <div>

            </div>
        </div>


    </div>


  )
}

export default Card
