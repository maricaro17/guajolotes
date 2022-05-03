import React, { useEffect, useState } from "react";
import { loadProducts } from "../helpers/loadProducts";
import {
  ContainerGuajolocombo,
  SubTitleGuajolocombo,
  TitleGuajolocombo,
} from "../styles/styles";
import ListCardGuajolocombo from "./ListCardGuajolocombo";

const Guajolocombo = ({ categoryName, product = "example" }) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    if (!products.length > 0) {
        loadProducts(categoryName, setProducts);
    }
  }, [categoryName, products]);
  return (
    <ContainerGuajolocombo>
      <TitleGuajolocombo>Guajolocombo</TitleGuajolocombo>
      <SubTitleGuajolocombo>
        Selecciona la {product} que más te guste y disfruta de tu desayuno.
      </SubTitleGuajolocombo>
      <ListCardGuajolocombo data={products}/>
    </ContainerGuajolocombo>
  );
};

export default Guajolocombo;
