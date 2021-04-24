import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import Icon from "@mdi/react";
import React, {useEffect, useState} from "react";
import { scDark as sc} from "styles/constant";
import PropTypes from 'prop-types';




const CustomRadio = (props) => {
  const {values, value, onChange, color} = props

  const styles = theme => ({
    customSelect: {},
    customSelectEle: {
      cursor: "pointer",
      width: 100,
      height: 40,
      borderRadius: sc.borderRadius.sm,
      ...sc.flexCenterCenter,
      margin: 8,
      background: theme.focusFilter


    },
    selected: {
      background: color || theme.color.primaryBlue,
      color: "white",
      fontWeight: 900

    },
    fullWidth: {
      width: "100%"
    }
  })

  const useStyles = makeStyles(styles)

  const classes = useStyles()

  let initialSelected = value === "" ? {} : value

  const [selected, setSelected] = useState(initialSelected)
  useEffect(() => {
    onChange(selected)
  }, [])
  useEffect(() => {
    onChange(selected)
  }, [selected])
  const handleSelect = (ele) => {
    setSelected(ele)
  }
  const selectedClass = (ele) => {
    if (selected === ele) {
      return classes.selected
    }
    return ""
  }

  return (
    <Grid container className={classes.customSelect}>
      {values.map((e, i) => {
        return (
          <Grid item xs={e.fullWidth && 12} className={classes.customSelectEle + " " + selectedClass(e)} onClick={() => handleSelect(e)}
                key={e.id}>
            {e.icon &&
            <Icon path={e.icon.path}
                  size={e.icon.size || 1}
                  color={e.icon.color || sc.color.lightBlue}
            />}
            {e.label}
          </Grid>
        )
      })}
    </Grid>
  )
}

CustomRadio.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.any.isRequired,
    icon: PropTypes.shape({
      path: PropTypes.string.isRequired,
      size: PropTypes.number,
      color: PropTypes.string
    }),
  })).isRequired,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,


}

export default CustomRadio