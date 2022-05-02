import React from "react";
import Item from "./Item";
const Carousel = ({list, data}) => {
  return (
    <div>
      <Item items={list} option={data.id} />
    </div>
  );
};

export default Carousel;
