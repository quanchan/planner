import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import { MuiThemeProvider } from "@material-ui/core/styles";

import { CssBaseline} from "@material-ui/core";
import Routes from '../../app-routers';
import appearance from "../../services/appearance";


const initialState = {
  theme: appearance.defaultTheme,
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = initialState;
  }

  setTheme = (theme, callback) => {
    if (!theme) {
      this.setState(
        {
          theme: appearance.defaultTheme,
        },
        callback
      );

      return;
    }

    this.setState(
      {
        theme: appearance.createTheme(theme),
      },
      callback
    );
  };


  render() {
    const {
      theme,
    } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }

}

export default App;
