import { Link } from "react-router-dom";
import styled from "styled-components";

const AppContainer = styled.div`
  /*   display: flex;
  width: 375px;
  height: 100vh;
  overflow: hidden;
  overflow-y: scroll; */
`;
const Container = styled.div`
  padding: 24px;
`
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
  border-bottom: ${props => "2px solid"+ props.lineColor};
`;

const LinkTo = styled(Link)`
  text-decoration: none;
  color: ${props=> props.color};
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
  background-color: white;
  align-items: center;
  margin-bottom: 8px;
  padding: 16px;
  width: 100%;
`;

const CardDetails = styled.div`
  display: flex;
  flex-direction: column;
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
export {
  Container,
  AppContainer,
  HeaderContainer,
  HomeContainer,
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
};
