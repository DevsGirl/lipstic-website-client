import React, { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";



const ManageProducts = () => {
  const { user } = useAuth();
  const [allProducts, setAllProducts] = useState([]);
  const [myOrders, setMyOrders] = useState([]);

  // get all data
  useEffect(() => {
    fetch(`https://fast-escarpment-65157.herokuapp.com/products`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  }, [allProducts]);


  const handleDeleteOrder = (id) => {
    const proceed = window.confirm("Are you sure want to delete");
    if (proceed) {
      const url = `https://fast-escarpment-65157.herokuapp.com/products/${id}`;
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
      <div className="container py-4 my-4">
        <h2 className="banner-title py-4 my-4">Manage All Products</h2>
        <div className="table-responsive py-4">
          <table className="table table-bordered border-primary">
            <thead>
              <tr>
                <th className="banner-title" scope="col">Product-Name</th>
                <th className="banner-title" scope="col">Description</th>
                <th className="banner-title" scope="col">Price</th>
                <th className="banner-title" scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {allProducts.map((order) => (
                <tr>
                  <td className="description">{order.product_name}</td>
                  <td className="description">{order.description}</td>
                  <td className="description">{order.price}</td>
                  
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

export default ManageProducts;