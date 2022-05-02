import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Offcanvas } from "react-bootstrap";

const Carrrito = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header>
        <FontAwesomeIcon icon={faAngleLeft} onClick={handleClose} />
          <Offcanvas.Title style={{textAlign:"center"}}>Carrito</Offcanvas.Title>
          
        </Offcanvas.Header>
        <Offcanvas.Body>
          Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Carrrito;
