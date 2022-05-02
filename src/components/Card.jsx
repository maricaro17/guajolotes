import React, { useEffect, useState } from "react";
import { Offcanvas } from "react-bootstrap";
import {
  CarButton,
  CardContainer,
  CardDetails,
  CardItemName,
  CardItemPrice,
  CarouselItemName,
  CarouselItemPrice,
  ContainerOverFlow,
  ImgBtn,
  SaborBtn,
  SaborContainer,
  SaborTitle,
} from "../styles/styles";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Carousel from "./Carousel";
import getCategory from "../helpers/getCategory";
import Contador from "./Contador";
import ButtonAddToCard from "../container/ButtonAddToCard";
import { addToCar } from "../helpers/addToCar";
const Card = ({ item, items }) => {
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState(item);
  const [category, setCategory] = useState(null);
  const [count, setCount] = useState(1);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCountUp = () => setCount(count + 1);
  const handleCountDown = () => setCount(count - 1);
  const handleAddToCar = (e, element) => {
    const carrito = localStorage.getItem("carrito") ? JSON.parse(localStorage.getItem("carrito")) : [] 
    const total = count * element.price
    const data = {...element, total, count}
    carrito.push(data)
    addToCar(carrito)
  };
  let rowOneButtons = items.slice(0, 3);
  let rowTwoButtons = items.slice(3, 6);

  useEffect(() => {
    if (!category) {
      let data = items.find((obj) => obj.id === item.id);

      getCategory(data.categoryId).then((result) => {
        setCategory(result);
      });
    }
  }, [category, item.id, items, selected]);
  let title;
  if (category?.name === "guajolotes") {
    title = "Guajolota de Tamal";
  }

  return (
    <CardContainer>
      <div>
        <img src={item.image} alt={item.name} />
      </div>
      <CardDetails>
        <CardItemName>{item.name}</CardItemName>
        <CardItemPrice>${item.price} MXN</CardItemPrice>
      </CardDetails>
      <ContainerOverFlow id={item.id} onClick={handleShow} />

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ backgroundColor: "#F2F2F2" }}
      >
        <Offcanvas.Header closeVariant="white">
          <FontAwesomeIcon icon={faAngleLeft} onClick={handleClose} />
          <CarButton>
            <img
              src="https://res.cloudinary.com/dxvzsg7fa/image/upload/v1651209405/bookmark/proyecto-final-2/carrito_dxqcxm.svg"
              alt="carrito"
            />
          </CarButton>
        </Offcanvas.Header>
        <Offcanvas.Body
          style={{ paddingTop: 0, overflow: "hidden", overflowY: "scroll" }}
        >
          <Carousel list={items} data={selected} />
          <div>
            <CarouselItemName item={item} option={item.id}>
              {title ? `${title} ${item.name}` : item.name}
            </CarouselItemName>
            <CarouselItemPrice>${item.price} MXN</CarouselItemPrice>
          </div>
          <Contador
            count={count}
            countUp={handleCountUp}
            countDown={handleCountDown}
          />
          <SaborContainer>
            <SaborTitle>Sabor</SaborTitle>
            <SaborBtn>
              {rowOneButtons.map((element) => (
                <ImgBtn
                  key={element.id}
                  src={element.saborImage}
                  alt={element.name}
                  item={element}
                  option={selected}
                  onClick={() => setSelected(element)}
                />
              ))}
            </SaborBtn>
            <SaborBtn width="200px">
              {rowTwoButtons.map((element) => (
                <ImgBtn
                  key={element.id}
                  src={element.saborImage}
                  alt={element.name}
                  item={element}
                  option={selected}
                  onClick={() => setSelected(element)}
                />
              ))}
            </SaborBtn>
          </SaborContainer>
          <ButtonAddToCard
            count={count}
            price={item.price}
            item={item}
            addToCar={handleAddToCar}
          />
        </Offcanvas.Body>
      </Offcanvas>
    </CardContainer>
  );
};

export default Card;
