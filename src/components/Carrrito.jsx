import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Offcanvas } from "react-bootstrap";
import ButtonPagarCarrito from "./ButtonPagarCarrito";
import ListarCarrito from "./ListarCarrito";
import TotalCarrito from "./TotalCarrito";

const Carrrito = ({ show, setShow }) => {
    const [total, setTotal]= useState(0)
  const handleClose = () => setShow(false);
  const calcularTotal = (carrito) =>{
    setTotal(carrito.reduce((a,b)=> a.total + b.total)) 
  }
  return (
    <>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <Offcanvas.Header closeButton>
          <FontAwesomeIcon icon={faAngleLeft} onClick={handleClose} />
          <Offcanvas.Title>Carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListarCarrito calcularTotal={calcularTotal} />
          <TotalCarrito total={total}/>
          <ButtonPagarCarrito/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Carrrito;
