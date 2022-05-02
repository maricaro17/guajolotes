import React, { useState } from "react";
import { CarButton, Container, HeaderContainer } from "../styles/styles";
import Carrrito from "./Carrrito";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
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
            src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651209405/bookmark/proyecto-final-2/carrito_dxqcxm.svg"
            alt="carrito" onClick={handleShow}
          />
        </CarButton>
      </HeaderContainer>
      <Carrrito show={show} setShow={setShow}/>
    </Container>
  );
};

export default NavBar;
