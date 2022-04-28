import React from "react";
import Card from "./Card";
import { CardListContainer } from "../styles/styles";
const CardList = ({ data }) => {
  return (
    <CardListContainer>
      {data.map((item) => (
        <Card
          key={item.id}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </CardListContainer>
  );
};

export default CardList;
