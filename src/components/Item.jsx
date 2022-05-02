import React from "react";
import {
  CarouselContainer,
  CarouselItem,
  CarouselItemImage,
} from "../styles/styles";

const Item = ({ items, option }) => {
  return (
    <CarouselContainer items={items} option={option}>
      {items.map((item) => (
        <CarouselItem key={item.id} item={item} option={option}>
          <CarouselItemImage item={item} option={option} src={item.image} alt={item.name}/>
        </CarouselItem>
      ))}
    </CarouselContainer>
  );
};

export default Item;
