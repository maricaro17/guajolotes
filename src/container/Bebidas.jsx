import React, { useEffect, useState } from 'react'
import CardList from '../components/CardList';
import { loadProducts } from '../helpers/loadProducts';
const categoryName = "bebidas"
const Bebidas = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    loadProducts(categoryName, setProducts);
  }, [products]);
  return (
    <div>
      <CardList data={products} />
    </div>
  )
}

export default Bebidas