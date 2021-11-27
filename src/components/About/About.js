import React from 'react';
import'./About.css'
import aboutImg from '../../images/about/about.jpg'
import Header from '../Header/Header';
import Footer from '../Footer/Footer'

const About = () => {
    return (
        <div>
            <Header></Header>
        <div className="container">
            <h1 style={{textAlign:'center'}} className="banner-title py-4 mt-4">About Us</h1>
          <div className="about-area">
              <div>
                  <img height="400px" className="py-4 about-img" src={aboutImg} alt="" />
              </div>
          <div className="px-4 mx-4">
               <p className="area ">
                Welcome to our website.This web site was created for the womens beaauty .This lipstick did not come in a tube; it was applied with a brush. Carmine dye was expensive and the look of carmine colored lipstick was considered unnatural and theatrical, so lipstick was frowned upon for everyday wear. Only actors and actresses could get away with wearing lipstick. In 1880, few stage actresses wore lipstick in public.[13] The famous actress, Sarah Bernhardt, began wearing lipstick and rouge in public. Before the late 19th century, women only applied makeup at home. Bernhardt often applied carmine dye to her lips in public.[12] 

              
               <br />
               <br />
               In the early 1890s, carmine was mixed with an oil and wax base. The mixture gave a natural look and it was more acceptable among women. At that time, lipstick was not sold in screw up metal tube; it was sold in paper tubes, tinted papers, or in small pots. 
             </p>
           </div>
           </div>
          </div>
        <Footer></Footer>
        </div>
    );
};

export default About;