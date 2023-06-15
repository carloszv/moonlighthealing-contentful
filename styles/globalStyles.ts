import { createGlobalStyle } from 'styled-components'
import { FontColors } from '../theme/Colors'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat';
    
    font-size: 18px;
    font-color: ${FontColors.Dark};

    .title {
      font-family: 'Montserrat';
    }
  }
`
