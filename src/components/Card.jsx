import React from "react";
import { CardContainer, CardDetails, CardItemName, CardItemPrice } from "../styles/styles";

const Card = ({ name, price, image, categoryId }) => {
  return (
    <CardContainer>
      <div>
        <img src={image} alt={name} />
      </div>
      <CardDetails>
        <CardItemName>{name}</CardItemName>
        <CardItemPrice>${price} MXN</CardItemPrice>
      </CardDetails>
    </CardContainer>
  );
};

export default Card;
