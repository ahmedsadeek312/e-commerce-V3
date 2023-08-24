import React from "react";
import Products from "./Products";
import Statics from "./Statics";
import Feature from "./Feature";
import Contact from "./Contact";
import { useState, useEffect } from "react";
const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts_API = async () => {
      const response = await fetch("https://api.escuelajs.co/api/v1/products");
      const data = await response.json();
      console.log(data);
      setProducts(data);
    };
    fetchProducts_API();
  }, []);
  return (
    <>
      <Contact />
      <Products />
      <Feature />
      <Statics />
    </>
  );
};

export default Home;
