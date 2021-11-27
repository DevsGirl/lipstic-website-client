import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://fast-escarpment-65157.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    },[])
    return (
       <div id="services my-4 py-4">
           <h2 className="banner-title my-4 py-4">User's Review</h2>
            <div className="service-container container">
         
         {
             reviews.map(review => <Review
             key={review.id}
             review={review}
             ></Review>)
         }
           
       </div>
       </div>
    );
};

export default Reviews;