import { createGlobalStyle } from 'styled-components'
import { FontColors } from '../theme/Colors'

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    // font-family: Open-Sans, Helvetica, Sans-Serif;
    font-family: 'Montserrat, Gill Sans';
    
    font-size: 18px;
    font-color: ${FontColors.Tertiary}

    .title {
      font-family: 'Great Vibes', cursive;
    }
  }
`
