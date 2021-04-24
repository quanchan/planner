import React from "react";
import {BrowserRouter} from 'react-router-dom';
import {MuiThemeProvider} from "@material-ui/core/styles";

import {CssBaseline} from "@material-ui/core";
import Routes from 'app-routers';
import {darkTheme, lightTheme} from "styles/theme";
import {connect} from "react-redux";


const App = (props) => {
  let theme
  switch (props.theme) {
    case "dark":
      theme = darkTheme;
      break;
    case "light":
      theme = lightTheme;
      break;
    default:
      theme = darkTheme;
      break;
  }
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline/>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default connect(
  ({styles}) => ({
    theme: styles.theme,
  }),
  {}
)(App);

