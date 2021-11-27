import React from 'react';
import Rating from 'react-rating';
import './Review.css'

const Review = ({review}) => {
    // const {service} = props;
    const { name, rating, image}= review;
    return (
       <div className="my-4  py-4">
            <div className="service ">
            <img className="review-image my-4" height="200" width="100%" src={image} alt="" />
           <h4 className="name banner-title">{name}</h4> 
           <p className=" description px-4 py-4">
           <Rating
            className="text-warning mt-1"
            initialRating={rating}
            readonly
            emptySymbol="fa fa-star-o fa-2x"
            fullSymbol="fa fa-star fa-2x"
         />
           </p>
         
        </div>
       </div>
    );
};

export default Review;