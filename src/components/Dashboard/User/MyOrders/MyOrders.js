import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";


const MyOrders = () => {
  const { user } = useAuth();
  const [allOrders, setAllOrders] = useState([]);
  const [myOrders, setMyOrders] = useState([]);

  // get all data
  useEffect(() => {
    fetch(`https://fast-escarpment-65157.herokuapp.com/orders`)
      .then((res) => res.json())
      .then((data) => {
        setAllOrders(data);
      });
  }, [user.email]);

  // get my order
  useEffect(() => {
    const myOwnOrders = allOrders.filter((order) => order.email === user.email);
    setMyOrders(myOwnOrders);
  }, [allOrders, user.email]);

  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      const url = `https://fast-escarpment-65157.herokuapp.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Deleted successfully");
            const remainingOrders = myOrders.filter(
              (order) => order._id !== id
            );
            setMyOrders(remainingOrders);
          }
        });
    }
  };

  return (
      <div> 
      <div className="container  py-4 my-4">
        <h2 className="banner-title py-4 my-4">My Order</h2>
        <div className="table-responsive py-4">
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
              {myOrders.map((order) => (
                <tr>
                  <td className="description">{order.name}</td>
                  <td className="description">{order.email}</td>
                  <td className="description">{order.productName}</td>
                  <td className="description">{order.orderDate}</td>
                  <td className="description">
                    {order.status === "Pending" ? (
                      <button className="btn btn-dark">
                        {order.status}
                      </button>
                    ) : (
                      <button className="btn btn-success">
                        {order.status}
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteOrder(order._id)}
                      className="btn btn-danger "
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

export default MyOrders;