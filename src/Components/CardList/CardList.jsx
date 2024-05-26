import axios from "axios";
import { Card } from "../Card/Card";
import './CardList.css'
import { useEffect, useState } from "react";

export const CardList = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const resp = await axios(`https://fakestoreapi.com/products/category/${category}`);
        setProducts(resp.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getProducts();
  }, [category]);

  return (
    <div className="card-list">
      {products.map((el) => (
        <Card img={el.image} brand={el.title} desc={el.title} price={el.price} totalPrice={el.price}/>
      ))}
    </div>
  );
};
