import React from "react";
import CardGuajolocombo from "./CardGuajolocombo";

const ListCardGuajolocombo = ({data}) => {

    

  return (
    <div>
      {data.map((item) => (
        <CardGuajolocombo key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListCardGuajolocombo;
