import React from 'react'; 
import payImg from '../../../../images/pay/pay.png'

const Pay = () => {
    return (
        <div>
            <div>
            <h1 className=" banner-title mt-4  py-4 ">The Payment System Is....</h1>
            <img className=" py-4 " src={payImg} alt="" />
        </div>
        </div>
    );
};

export default Pay;