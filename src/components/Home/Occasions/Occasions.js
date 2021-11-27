import React, { useEffect, useState } from 'react';
import Occasion from '../Occasion/Occasion'; 
import './Occasions.css'

const Occasions = () => {
    const [occasions, setOccasions] = useState([])
    useEffect(() => {
        fetch('/occasion.json')
        .then(res => res.json())
        .then(data => setOccasions(data))
    },[])
    return (
       <div className="mb-50" >
           <h4 className="short-title mt-50">Different shades of hues</h4>
           <h1 className="banner-title mb-50">For Any Occasion</h1>
            <div className="occasion-container container">
         
         {
             occasions.map(occasion => <Occasion
             key={occasion.id}
             occasion={occasion}
             ></Occasion>)
         }
           
       </div>
       </div>
    );
};

export default Occasions;