import { AppContainer } from "../styles/styles";
import { StyleGlobal } from "../styles/stylesGlobal.js";
import AppRouter from "../routers/Router";
function App() {
  return (
    <AppContainer>
      <StyleGlobal/>
      <AppRouter/>
    </AppContainer>
  );
}

export default App;
