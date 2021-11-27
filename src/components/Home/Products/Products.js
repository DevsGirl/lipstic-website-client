import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css'

const Products = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://fast-escarpment-65157.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
       <div>
             <h1 className=" banner-title mb-70 ">Choose Your Favourite Products </h1>
            <div className="Categories-container container">
         
         {
             categories.slice(0,6).map(category => <div className="category-container">
             <div>
              <img  className="single-image"  width="100%" src={category.img} alt="" />
             </div>
             <div>
                <h4 className=" banner-title name py-2">{category.product_name}</h4> 
                 <p className=" description px-4">{category.description}</p>
                 <hr />
                 <h6 className="py-2 description ">Brand: <span> {category.brand}</span></h6>
                 <h5 className=" banner-title name-hover  metal-font py-2">${category.price}</h5>
                 <Link  to={`/placeorder/${category._id}`}>
                 <button  className=" login-btn font px-4 fw-bold">Buy Now</button>
                 </Link>
                 
             </div>
     </div>)
         }
           
       </div>
       </div>
    );
};

export default Products;