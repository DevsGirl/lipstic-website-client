import React from 'react';
import { Link } from 'react-router-dom';
import './Category.css'

const Category = ({category}) => {
    // const {service} = props;
    const {_id,product_name, brand, price, description, img}= category;
    console.log(category);
    return (
       <div>
            <div className="category-container">
                <div>
                 <img  className="single-image"  width="100%" src={img} alt="" />
                </div>
                <div>
                   <h4 className=" banner-title name py-2">{product_name}</h4> 
                    <p className=" description px-4">{description}</p>
                    <hr />
                    <h6 className="py-2 description ">Brand: <span> {brand}</span></h6>
                    <h5 className=" banner-title name-hover  metal-font py-2">${price}</h5>
                    <Link   to={`/placeorder/${_id}`}>
                    <button  className=" login-btn font px-4 fw-bold">Buy Now</button>
                    </Link>
                    
                </div>
        </div>
       </div>
    );
};

export default Category;