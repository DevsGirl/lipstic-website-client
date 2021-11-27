import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/notfound/not-found.png'
import './Notfound.css'

const Notfound = () => {
    return (
        <div  className="error" >
            <img  src={notfound} alt="" />
            <div>
            <Link to ="/"><button className="not-btn">Go Back</button></Link>
            </div>
        </div>
    );
};

export default Notfound;