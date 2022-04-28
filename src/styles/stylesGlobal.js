import { createGlobalStyle } from "styled-components";

export const StyleGlobal = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');
:root {
    --dark: #0D0D0D;
    --primary: #FA4A0C;
    --light-green: #A3E0D8;
    --lila: #D3C3ED;
    --mostaza: #FCB235;
    --rosa: #F18F8C;
    --vino:#410F18;
    --gray-light: #E7E7E7;

    --num-tabs: 0;

}


body{
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #F2F2F2;
}


`;
