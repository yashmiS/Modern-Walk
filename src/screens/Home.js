import React, { useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import "../App.css";
import Button from "@mui/material/Button";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";

const Products = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </Box>
  );

  useEffect(() => {
    setLoading(true);
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/category/men's clothing?limit=4",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="page-container">
      <h2>Flash sale</h2>
      <div className="flash-products-wrapper">
        {data.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
      <div>
        <h3>Categories</h3>
        <div className="button">
          <Button size="Large">
            <Link to="/men">Men's Clothes</Link>
          </Button>
        </div>
        <div className="btn">
          <Button size="Large">
            <Link to="/women">Women's Clothes</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Products;
