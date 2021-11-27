import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import UseAuth from "../../Hooks/UseAuth";
import './PlaceOrder.css'

const PlaceOrder = () => {
  const [product, setProduct] = useState();
  const { id } = useParams();
  const { user } = UseAuth();
  const nameRef = useRef();
  const emailRef = useRef();
  const destinationRef = useRef();
  const phoneRef = useRef();
  const dateRef = useRef();
  const addressRef = useRef();

  useEffect(() => {
    const url =`https://ghastly-flesh-56862.herokuapp.com/placeorder/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleBook = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const product = destinationRef.current.value;
    const phone = phoneRef.current.value;
    const orderDate = dateRef.current.value;
    const address = addressRef.current.value;

    const userOrderInfo = {
      name,
      email,
      product,
      phone,
      orderDate,
      address,
      status: "Pending",
    };

    fetch("https://fast-escarpment-65157.herokuapp.com/", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userOrderInfo),
    })
    .then(res => res.json())
    .then(data=> {
      if(data.insertedId){
        alert("Your order's succesfully");
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
              <img
                className="img-fluid"
                style={{ borderRadius: "5px" }}
                src={product?.image}
                alt=""
              />
              <h4 className="my-2" style={{ textTransform: "uppercase" }}>{product?.name}</h4>
              <p className="mb-3" style={{ textAlign: "justify" }}>
                {product?.description}
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="p-3">
              <h3 className="text-start  place-order mb-3">
                Please, provide your Info
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
                  value={product?.name}
                  ref={destinationRef}
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
                  Give your journey date
                </div>
                <input
                  className="form-control mb-3"
                  type="date"
                  placeholder="Journey date"
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
                <button className="btn btn-secondary">
                  Order Now For {product?.price}Tk.
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;