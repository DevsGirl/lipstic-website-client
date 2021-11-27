import React, { useRef } from "react";

const AddProduct = () => {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const priceRef = useRef();

  const addNewProduct = (e) => {
    e.preventDefault();
    const img = imageRef.current.value;
    const name = nameRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;
    

    const newEvent = {name, price,description, img }

    fetch('https://fast-escarpment-65157.herokuapp.com/product', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(newEvent)
    })
    .then(res => res.json())
    .then(data => {
        if(data.insertedId){
            alert("Product Added Successfully")
            e.target.reset();
        }
    })

  };

  return (
    <div>
      
      <div className="container mb-5">
        <h1 className="banner-title mb-50">Add a product</h1>
        <div className="col-md-8 col-lg-8 m-auto text-start">
          <form onSubmit={addNewProduct}>
            
          <div className="form-group my-3">
              <input
                id="image"
                className="form-control description"
                type="text"
                placeholder="Enter Product Image Link"
                ref={imageRef}
                required
              />
            </div>
            <div className="form-group my-3">
              <input
                id="name"
                className="form-control description"
                type="text"
                placeholder="Enter Product Name"
                ref={nameRef}
                required
              />
            </div>
            <div className="form-group my-3">
              <input
                id="offer"
                className="form-control description"
                type="text"
                placeholder="Enter Product Price"
                ref={priceRef}
                required
              />
            </div>
            <div className="form-group my-3">
              <textarea
                className="form-control description"
                name=""
                id="desc"
                cols="30"
                rows="5"
                placeholder="Enter Product Description"
                ref={descriptionRef}
                required
              ></textarea>
            </div>  
            <button className="btn shop-btn my-2">Add</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;