import React, { useEffect, useRef } from "react";
import useAuth from "../../../../hooks/useAuth";


const UserReview = () => {
  const { user } = useAuth();
  const nameRef = useRef();
  const imageRef = useRef();
  const reviewRef = useRef();


  const handleBook = (e) => {
    e.preventDefault();
    const image = imageRef.current.value;
    const name = nameRef.current.value;
    const rating= reviewRef.current.value;


    const userBookingInfo = {
      image,
      name,
      rating
   
    };

    fetch("https://fast-escarpment-65157.herokuapp.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userBookingInfo),
    })
    .then(res => res.json())
    .then(data=> {
      if(data.insertedId){
        alert("Review Added succesfully");
        e.target.reset();
      }
    })
  };

  return (
    <div>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="p-3">
              <h3 className="text-start banner-title  mb-3">
                Submit A Review
              </h3>
              <form onSubmit={handleBook}>
                <input
                  className="form-control description mb-3"
                  type="text"
                  value={user?.displayName}
                  ref={nameRef}
                  required
                />
                <input
                  className="form-control description mb-3"
                  type="text"
                  placeholder="Enter Your Profile Picture Link"
                  ref={imageRef}
                  required
                />
                    <input
                  className="form-control description mb-3"
                  type="number"
                  placeholder="Enter Rating[0-5]"
                  ref={reviewRef}
                  required
                />
                <button className=" shop-btn font shop-btn fw-bold">
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;