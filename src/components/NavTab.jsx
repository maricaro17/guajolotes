import React from "react";
import { useLocation } from "react-router-dom";
import { LinkTo, ProductNav, TabItem, TabList } from "../styles/styles";

const NavTab = () => {
  const location = useLocation();
  let pathName = location.pathname.split("/").pop();
  return (
    <ProductNav>
      <TabList>
        <TabItem lineColor={pathName === "guajolotas" ? "#FA4A0C" : "transparent"}>
          <LinkTo
            to="/guajolotas"
            color={pathName === "guajolotas" ? "#FA4A0C" : "#9a9a9d"}
          >
            Guajolotas
          </LinkTo>
        </TabItem>
        <TabItem lineColor={pathName === "bebidas" ? "#FA4A0C" : "transparent"}>
          <LinkTo
            to="/bebidas"
            color={pathName === "bebidas" ? "#FA4A0C" : "#9a9a9d"}
          >
            Bebidas
          </LinkTo>
        </TabItem>
        <TabItem lineColor={pathName === "tamales" ? "#FA4A0C" : "transparent"}>
          <LinkTo
            to="/tamales"
            color={pathName === "tamales" ? "#FA4A0C" : "#9a9a9d"}
          >
            Tamales
          </LinkTo>
        </TabItem>
      </TabList>
    </ProductNav>
  );
};

export default NavTab;
