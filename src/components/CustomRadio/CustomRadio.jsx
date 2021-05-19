import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import Icon from "@mdi/react";
import React, {useEffect, useState} from "react";
import { scDark as sc} from "styles/constant";
import PropTypes from 'prop-types';




const CustomRadio = (props) => {
  //Props
  const {values, value, onChange, color} = props

  //States & Logic
  const notFullWidth = values.filter((value) => !value.fullWidth).length
  const initialSelectedId = value
  const [selectedId, setSelectedId] = useState(initialSelectedId)
  const initialSelected = values.filter(value => value.id === selectedId)[0] || {id: "N/A"}
  const [selected, setSelected] = useState(initialSelected)

  //UseEffect
  useEffect(() => {
    onChange(selectedId)
  }, [])
  useEffect(() => {
    setSelectedId(selected.id)
  }, [selected])
  useEffect(() => {
    onChange(selectedId)
  }, [selectedId])

  //Styles
  const styles = theme => ({
    customSelect: {},
    customSelectEle: {
      cursor: "pointer",
      height: 40,
      borderRadius: sc.borderRadius.sm,
      ...sc.flexCenterCenter,
      margin: 8,
      background: theme.focusFilter,
      width: `calc(100%/${notFullWidth} - 16px)`

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

  //Helper Functions
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