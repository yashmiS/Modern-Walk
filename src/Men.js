import "./App.css";
import Navbar from "./components/Navbar";

import React, { useState, useEffect } from "react";
import axios from "axios";

function Men() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/category/men's clothing",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="Men">
      <Navbar />
      <div className="products-container">
        <h3>Mens Clothing</h3>
        {data.map((product) => (
          <div key={product.id} className="card">
            <h6>{product.title}</h6>
            <div>
              <img src={product.image} alt="#" />
            </div>
            <div className="card-description">
              <h6>{`Price: ${product.price}`}</h6>
              <h6>{`Description: ${product.description}`}</h6>
              <h6>{`Category: ${product.category}`}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Men;
