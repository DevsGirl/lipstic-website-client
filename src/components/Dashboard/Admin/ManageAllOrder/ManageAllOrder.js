import React, { useEffect, useState } from "react";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`https://fast-escarpment-65157.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => setOrders(data));
     
  }, [orders]);

  //updatestatus
  const handleUpdateStatus = id => {
    const url = `https://fast-escarpment-65157.herokuapp.com/orders/${id}`;
    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(orders)
    })
    .then(res => res.json())
    .then(data=> {
      if(data.modifiedCount > 0){
        alert("Successfiully updated status")
      }
    })
  }
//delete order
  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      const url = `https://fast-escarpment-65157.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remainingOrders = orders.filter((order) => order._id !== id);
            setOrders(remainingOrders);
          }
        });
    }
  };

  return (
    <div>
      <div>
        <div className="bradcam-area bradcam-bg-4  mb-5">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="bradcam-text text-center">
                  <h3 className="banner-title mt-4 pt-4">Manage All Orders</h3>
                  <p className="description">Available Users: <span className="banner-title"> {orders.length}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="table-responsive ">
          <table className="table table-bordered border-primary">
            <thead>
              <tr>
                <th className="banner-title" scope="col">Name</th>
                <th className="banner-title" scope="col">Email</th>
                <th className="banner-title" scope="col">Product-Name</th>
                <th className="banner-title" scope="col">Order Date</th>
                <th className="banner-title" scope="col">Status</th>
                <th className="banner-title" scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="description">{order.name}</td>
                  <td className="description">{order.email}</td>
                  <td className="description">{order.productName}</td>
                  <td className="description">{order.orderDate}</td>
                  <td className="description">
                    { order.status === 'Pending' ? <button onClick={() => handleUpdateStatus(order._id)} className="btn btn-dark">{order.status}</button> : <button className="btn btn-success">{order.status}</button>}
                  </td>
                  <td className="description">
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageAllOrder;