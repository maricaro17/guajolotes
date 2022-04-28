import React, { useEffect, useState } from "react";
import CardList from "../components/CardList";
import { loadProducts } from "../helpers/loadProducts";
const categoryName = "guajolotes"
const Guajolotas = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    loadProducts(categoryName, setProducts);
  }, [products]);

  return (
    <div>
      <CardList data={products} />
    </div>
  );
};

export default Guajolotas;
