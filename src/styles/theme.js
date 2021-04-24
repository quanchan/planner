import { createMuiTheme } from '@material-ui/core/styles';
import {sc, scDark, scLight} from "./constant";


export const lightTheme = createMuiTheme({
  palette: {
    type: "light"
  },
  ...scLight
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#1f67f9"
    },
    background : {
      default: "#16171b",
    }
  },
  ...scDark
});