import React, { useEffect, useState } from 'react';
import Category from '../Category/Category';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Categories.css'

const Categories = () => {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        fetch('https://fast-escarpment-65157.herokuapp.com/products')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div>
            <Header></Header>
       <div className="my-4">
             <h1 className=" banner-title mb-70 ">Choose Your Favourite Products </h1>
            <div className="Categories-container container">
         
         {
             categories.map(category => <Category
             key={category._id}
             category={category}
             ></Category>)
         }
         </div>
       </div>
       <Footer></Footer>
       </div>
    );
};

export default Categories;