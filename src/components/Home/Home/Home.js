import React from 'react';
import Categories from '../../Categories/Categories';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';
import Occasions from '../Occasions/Occasions';
import Products from '../Products/Products';
import Reviews from '../Reviews/Reviews';


const Home = () => {
    return (
        <div id="home">
            <Header></Header>
            <Banner></Banner>
            <Occasions></Occasions>
            <Products></Products>
            <Gallery></Gallery>
            <Reviews></Reviews>
            <Contact></Contact>
            <Footer></Footer>
           
            
        </div>
    );
};

export default Home;