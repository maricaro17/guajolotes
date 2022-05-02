import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import { loadProducts } from "../helpers/loadProducts";
const categoryName = "tamales";

const Tamales = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!products.length > 0) {
      loadProducts(categoryName, setProducts);
    }
  }, [products]);
  return (
    <div>
      <CardList data={products} />
    </div>
  );
};

export default Tamales;
