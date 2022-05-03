import React, { memo, useEffect, useState } from "react";
import {
  ImgCardGuajolocombo,
  InputCardGuajolocombo,
  PriceCardGuajolocombo,
  TitleCardGuajolocombo,
} from "../styles/styles";

const CardGuajolocombo = ({ item }) => {
  const [data, setData] = useState({});
  const [mount,setMount] = useState(false)
  
  useEffect(() => {
    if(!mount){
      if (item) {
        setData(item);
      }
    }
    return () => {
      setMount(!mount)
    }
  }, [mount, item])
  
  
  return (
    <>
      <CardGuajolocombo>
        <ImgCardGuajolocombo src={data.image} alt={data.name} />
      </CardGuajolocombo>
    </>
  );
};

export default memo(CardGuajolocombo);
