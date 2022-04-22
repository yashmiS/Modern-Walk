import React, { useState, useEffect } from "react";
import "../App.css";
import axios from "axios";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import Button from "@mui/material/Button";

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
      url: "https://fakestoreapi.com/products",
    })
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="products-container">
      {data.map((product) => (
        <div key={product.id} className="card">
          <h6>{product.title}</h6>
          <div>
            <img src={product.image} alt="#" />
          </div>
          <div className="card-description">
            <h6>{`Price: ${product.price}`}</h6>
            <h6>{`Description: ${product.description}`}</h6>
          </div>
        </div>
      ))}
      <h3>Categories</h3>
      <Card sx={{ minWidth: 275, heigth: 600 }}>
        <CardActions>
          <Button size="Large">Men's Clothes</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Products;
