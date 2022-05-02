import { Route, BrowserRouter, Routes } from "react-router-dom";
import Bebidas from "../container/Bebidas";
import Guajolotas from "../container/Guajolotas";
import Home from "../container/Home";
import Tamales from "../container/Tamales";

const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/guajolotas" element={<Guajolotas />} />
          <Route path="/bebidas" element={<Bebidas />} />
          <Route path="/tamales" element={<Tamales />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default AppRouter;
