import React from "react";
import { SearchBar, SearchInput } from "../styles/styles";

const BarraBusqueda = () => {
  return (
    <SearchBar>
      <span>
        <img
          src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1650900625/bookmark/proyecto-final-2/Vector_ncfp97.svg"
          alt="search"
        />
      </span>
      <SearchInput type="text" placeholder="Sabor de guajolota, bebida..." />
    </SearchBar>
  );
};

export default BarraBusqueda;
