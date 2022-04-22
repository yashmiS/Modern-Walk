import "../App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import ProductCard from "../components/ProductCard";

function Page({ title, category }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: `https://fakestoreapi.com/products/category/${category}`,
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <div className="page-wrapper">
      <Header />
      <h3>{title}</h3>
      <div className="products-container">
        {data.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}

export default Page;
