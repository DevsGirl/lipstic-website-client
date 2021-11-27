import React, { useState } from "react";

const MakeAdmin = () => {
  const [email, setEmail] = useState("");

  const handleOnBlur = (e) => {
    setEmail(e.target.value);
  };

  const handleMakeAdmin = (e) => {
    e.preventDefault();
    const user = { email };
    fetch("https://fast-escarpment-65157.herokuapp.com/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          alert("Make admin successfully")
          setEmail("");
        }
      });
  };

  return (
    <div>
      <h2 className=" banner-title my-3">Make Admin</h2>
      <form className="col-lg-6 col-md-8 m-auto" onSubmit={handleMakeAdmin}>
        
        <input
          className="form-control mb-3"
          type="email"
          name=""
          onBlur={handleOnBlur}
          placeholder="Enter an email"
          id=""
        />
        <button className="btn shop-btn">Make Now</button>
      </form>
    </div>
  );
};

export default MakeAdmin;