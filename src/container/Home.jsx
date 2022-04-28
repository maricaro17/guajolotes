import React from "react";
import NavBar from "../components/NavBar";
import BarraBusqueda from "../components/BarraBusqueda";
import { HomeContainer, TitleGuappjolotas } from "../styles/styles";
import NavTab from "../components/NavTab";

const Home = () => {
  return (
    <HomeContainer>
      <NavBar />
      <TitleGuappjolotas>
        Nada como una Guajolota para empezar el día
      </TitleGuappjolotas>
      <BarraBusqueda />
      <NavTab />
    </HomeContainer>
  );
};

export default Home;
