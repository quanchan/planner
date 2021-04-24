import {Switch} from "@material-ui/core";
import React from "react";
import {connect} from "react-redux";
import {changeTheme} from "../../actions/stylesAction";

const DarkModeSwitch = (props) => {

  const handleChange = () => {
    if (props.theme === "light") {
      props.changeTheme("dark")
    } else if (props.theme === "dark") {
      props.changeTheme("light")
    }
  }


  return (
    <Switch
      // checked={props.theme === "dark"}
      onChange={handleChange}
      name="darkmode"
      color="primary"
    />
  )
}

export default connect(({styles}) => ({
    theme: styles.theme,
  }),
  {
    changeTheme
  })(
  DarkModeSwitch
)