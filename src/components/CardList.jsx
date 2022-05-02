import React from "react";
import Card from "./Card";
import { CardListContainer } from "../styles/styles";
const CardList = ({ data }) => {
  return (
    <CardListContainer>
      {data.map((item) => (
        <Card
          key={item.id}
          item={item}
          items={data}
        />
      ))}
      
    </CardListContainer>
  );
};

export default CardList;
