import { Link } from "react-router-dom";
import styled from "styled-components";

const AppContainer = styled.div`
  /*   display: flex;
  width: 375px;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll; */
`;
const ContainerOverFlow = styled.div`
  position: absolute;
  border-radius: 20px;
  align-items: center;
  margin-bottom: 8px;
  width: 100%;
  left: 0;
  height: 118px;
  margin-top: 8px;
  background-color: transparent;
  cursor: pointer;
`;
const Container = styled.div`
  padding: 24px;
`;
const HomeContainer = styled.div`
  width: 100%;
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const CarButton = styled.button`
  background-color: transparent;
  border: none;
`;
const TitleGuappjolotas = styled.h1`
  font-size: 34px;
  line-height: 41.15px;
  font-weight: 700;
  width: 312px;
  height: 123px;
  margin-top: 32px;
  margin-right: 24px;
  margin-left: 24px;
`;

const SearchBar = styled.div`
  background-color: var(--gray-light);
  height: 60px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 24px;
  margin-left: 24px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;
const SearchInput = styled.input`
  width: 256.89px;
  border: none;
  background-color: transparent;
  margin-left: 8px;
  font-size: 17px;
  font-weight: 400;
  line-height: 20.57px;
  color: #9a9a9d;
`;

const ProductNav = styled.nav`
  /*   position: relative;
  width: 640px;
  margin: 0 auto;
  border-bottom: 1px solid #d5d1d1; */
`;
const TabList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;
const TabItem = styled.li`
  padding: 15px;
  border-bottom: ${(props) => "2px solid" + props.lineColor};
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.color};
  &:active {
    color: var(--primary);
  }
  &:focus {
    color: var(--primary);
  }
`;
const CardListContainer = styled.div`
  position: absolute;
  /* width: 312px; */
  left: 0px;
  right: 0px;
  margin-left: 24px;
  margin-right: 24px;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 105px;
`;
const CardContainer = styled.div`
  border-radius: 20px;
  display: flex;
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "white"};
  align-items: center;
  margin-bottom: 8px;
  padding: 16px;
  width: 100%;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "unset"};
  width: ${(props) => (props.width ? props.width : "unset")};
  margin-left: 16px;
`;

const CardItemName = styled.h1`
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  margin: 0;
`;

const CardItemPrice = styled.p`
  margin: 0;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  color: var(--primary);
`;

const ContainerDetailsProducts = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: aqua;
`;
const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  padding-left: ${(props) =>
    props.items[0].id === props.option ? "76px" : "unset"};
  padding-right: ${(props) =>
    props.items[props.items.length - 1].id === props.option ? "76px" : "unset"};
  margin-left: -40px;
`;
const CarouselItem = styled.div`
  margin-left: ${(props) =>
    props.item.id === props.option
      ? "51.15px"
      : props.item.id === props.option - 1 || props.item.id === props.option + 1
      ? "unset"
      : "unset"};
  margin-right: ${(props) =>
    props.item.id === props.option
      ? "51.15px"
      : props.item.id === props.option - 1 || props.item.id === props.option + 1
      ? "unset"
      : "unset"};
  display: ${(props) =>
    props.item.id === props.option
      ? "block"
      : props.item.id === props.option - 1 || props.item.id === props.option + 1
      ? "block"
      : "none"};
`;
const CarouselItemImage = styled.img`
  width: ${(props) =>
    props.item.id === props.option ? "165.83px" : "78.82px"};
  height: ${(props) =>
    props.item.id === props.option ? "165.83px" : "78.82px"};
`;
const CarouselItemName = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  text-align: center;
  display: ${(props) => (props.item.id === props.option ? "block" : "none")};
  width: 200px;
  margin: auto;
  line-height: 33.89px;
`;
const CarouselItemPrice = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  color: #fa4a0c;
  margin-top: 8px;
`;
const ImgBtn = styled.img`
  margin-bottom: 48px;
  width: 64px;
  height: 69px;
  opacity: ${(props) => (props.item.id === props.option.id ? "unset" : "20%")};
`;
const SaborContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SaborBtn = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${(props) => (props.width ? props.width : "unset")};
`;
const SaborTitle = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
`;
const ContadorContainer = styled.div`
  background-color: white;
  border-radius: 20px;
  width: 190px;
  height: 72px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  justify-content: space-around;
  margin-bottom: 40px;
  margin-top: 32px;
`;

const ContadorBtn = styled.button`
  border-radius: 50px;
  border: ${(props) =>
    props.count === 1 ? "3.33px solid #9A9A9D" : "3.33px solid black"};
  background-color: white;
  width: 40px;
  height: 40px;
  font-size: x-large;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
`;

const ContadorNumber = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  margin: unset;
`;
const ContainerButtonAddToCard = styled.button`
  width: 312px;
  height: 69px;
  background-color: var(--primary);
  color: white;
  border-radius: 40px;
  font-size: 17px;
  border: none;
  font-weight: 600;
  line-height: 21px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const AddToCardSpan = styled.span`
  font-weight: 400;
`;
const ContainerTotal = styled.div`
  width: 312px;
  height: 53px;
  border-radius: 20px;
  background-color: white;
  color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
  margin: 0 auto;
`;
const TotalTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  margin: unset;
`;
const Total = styled.p`
  color: var(--primary);
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  margin: unset;
`;
const BtnPagar = styled.div`
  width: 312px;
  height: 69px;
  color: white;
  background-color: var(--primary);
  margin: 0 auto;
  border-radius: 40px;
  position: absolute;
  bottom: 0;
  margin-bottom: 16px;
`;
const PagarTitle = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 21px;
  text-align: center;
  padding: 24px;
`;
const ContainerGuajolocombo = styled.div`
  width: 312px;
  height: 382px;
  margin-left: 24px;
  margin-right: 24px;
`;
const CardGuajolocombo = styled.div`
  width: 152px;
  height: 138px;
  border-radius: 20px;
  background-color: white;
  border: none;
`;
const TitleGuajolocombo = styled.h1`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  width: 140px;
  height: 24px;
`;
const SubTitleGuajolocombo = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 138.84%;
  color: black;
`;
const InputCardGuajolocombo = styled.input.attrs({
  type: "checkbox",
})`
  width: 24px;
  height: 24px;
`;
const ImgCardGuajolocombo = styled.img`
  width: 64px;
  height: 64px;
`;

const TitleCardGuajolocombo = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  width: 120px;
  height: 15px;
  color: black;
`;
const PriceCardGuajolocombo = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 15px;
  width: 120px;
  height: 15px;
  color: var(--primary);
`;
export {
  Container,
  SaborBtn,
  SaborTitle,
  SaborContainer,
  ContainerOverFlow,
  AppContainer,
  HeaderContainer,
  HomeContainer,
  ContainerDetailsProducts,
  CarouselContainer,
  CarouselItem,
  CarouselItemName,
  CarouselItemImage,
  ImgBtn,
  CarouselItemPrice,
  CardListContainer,
  CardContainer,
  CardDetails,
  CardItemName,
  CardItemPrice,
  CarButton,
  TitleGuappjolotas,
  SearchBar,
  SearchInput,
  ProductNav,
  TabList,
  TabItem,
  LinkTo,
  ContadorContainer,
  ContadorBtn,
  ContadorNumber,
  ContainerButtonAddToCard,
  AddToCardSpan,
  ContainerTotal,
  TotalTitle,
  Total,
  BtnPagar,
  PagarTitle,
  ContainerGuajolocombo,
  CardGuajolocombo,
  ImgCardGuajolocombo,
  TitleCardGuajolocombo,
  PriceCardGuajolocombo,
  TitleGuajolocombo,
  SubTitleGuajolocombo,
  InputCardGuajolocombo,
};
