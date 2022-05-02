import React from "react";
import {
  ContadorBtn,
  ContadorContainer,
  ContadorNumber,
} from "../styles/styles";

const Contador = ({ count, countUp, countDown }) => {
  return (
    <ContadorContainer>
      <ContadorBtn onClick={countDown} disabled={count === 1 ? true : false} count={count}>
        -
      </ContadorBtn>
      <div>
        <ContadorNumber>{count}</ContadorNumber>
      </div>
      <ContadorBtn onClick={countUp}>+</ContadorBtn>
    </ContadorContainer>
  );
};

export default Contador;
