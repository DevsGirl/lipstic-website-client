import React from 'react';
import './Occasion.css'

const Occasion = ({occasion}) => {
    const { title, description, img, img2}= occasion;
    return (
       <div>
            <div>
            <div className="img">
            <img className="occasion-image"  src={img} alt="" />
            <img className="secondary-img"  src={img2} alt="" />
            </div>
           <h3 className="name py-4 banner-title">{title}</h3> 
           <p className=" description px-4">{description.slice(0,120)}</p>
        </div>
       </div>
    );
};

export default Occasion;