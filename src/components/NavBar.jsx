import React from "react";
import { CarButton, Container, HeaderContainer } from "../styles/styles";
const NavBar = () => {
  return (
    <Container>
      <HeaderContainer>
        <div>
          <img
            src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651031429/bookmark/proyecto-final-2/logo_header_i4y3wb.svg"
            alt="Logo"
            width={"64px"}
          />
        </div>
        <CarButton>
          <img
            src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1650901516/bookmark/proyecto-final-2/carrito_erc4fk.svg"
            alt="carrito"
          />
        </CarButton>
      </HeaderContainer>
    </Container>
  );
};

export default NavBar;
