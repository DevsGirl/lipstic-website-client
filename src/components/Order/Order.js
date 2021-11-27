import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import './Order.css'

const Order = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const { user } = useAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const productNameRef = useRef();
  const phoneRef = useRef();
  const dateRef = useRef();
  const addressRef = useRef();

  useEffect(() => {
    const url = `https://fast-escarpment-65157.herokuapp.com/placeorder/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleBook = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const  productName =  productNameRef.current.value;
    const phone = phoneRef.current.value;
    const orderDate = dateRef.current.value;
    const address = addressRef.current.value;

    const userBookingInfo = {
      name,
      email,
      productName,
      phone,
      orderDate,
      address,
      status: "Pending",
    };

    fetch("https://fast-escarpment-65157.herokuapp.com/placeorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userBookingInfo),
    })
    .then(res => res.json())
    .then(data=> {
      if(data.insertedId){
        alert("Product Ordered succesfully");
        e.target.reset();
      }
    })
  };

  return (
    <div>
      <Header/>
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="p-3" style={{boxShadow: "30px 30px 30px #F7F7F7", marginTop: "10px"}}>
              <img
                className=""
                style={{ borderRadius: "5px" , height: '200px'}}
                src={product?.img}
                alt=""
              />
              <h4 className="my-3 banner-title" style={{ textTransform: "uppercase" }}>{product?.name}</h4>
              <p className="mb-3 description" style={{ textAlign: "justify", padding: "0 30px" }}>
                {product?.description}
              </p>
              <p className="banner-title">Price: ${product?.price}</p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-3">
              <h3 className="text-start text-danger text-info mb-3">
                Please, Provide Your Info
              </h3>
              <form onSubmit={handleBook}>
                <input
                  className="form-control mb-3"
                  type="text"
                  value={user?.displayName}
                  ref={nameRef}
                  required
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  value={user?.email}
                  ref={emailRef}
                  required
                  disabled
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  value={product?.product_name}
                  ref={productNameRef}
                  required
                  disabled
                />
                <input
                  className="form-control mb-3"
                  type="number"
                  placeholder="Mobile Number"
                  ref={phoneRef}
                  required
                />
                <div class="form-text text-start ms-2 mb-2">
                  Give your order date
                </div>
                <input
                  className="form-control mb-3"
                  type="date"
                  placeholder="Order Date"
                  ref={dateRef}
                  required
                />
                <input
                  className="form-control mb-3"
                  type="text"
                  placeholder="Address"
                  ref={addressRef}
                  required
                />
                <button className=" shop-btn font shop-btn fw-bold">
                  Placeorder For ${product?.price}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Order;