import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import Icon from "@mdi/react";
import React, {useEffect, useState} from "react";
import { scDark as sc} from "styles/constant";
import PropTypes from 'prop-types';




const CustomSelect = (props) => {
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

  let initialSelected
  let total = values.filter((ele) => ele.total === true)
  let totalLength = total.length
  if (totalLength === 0) {
    initialSelected = []
  } else if (totalLength === 1) {
    initialSelected = [total[0]]
  } else {
    throw "Can only have one total element"
  }
  initialSelected = value === "" ? initialSelected : value
  const [selected, setSelected] = useState(initialSelected)
  useEffect(() => {
    onChange(selected)
  }, [])
  useEffect(() => {
    onChange(selected)
  }, [selected])

  const handleSelect = (ele) => {
    if (ele.total || selected.length === 0) {
      setSelected([ele])
    }
    else if (selected.length === 1 && selected[0].total) {
      setSelected([ele])
    }
    else if(selected.length > 1 || selected.length === 1 ) {
      if (selected.findIndex(element => element === ele) === -1) {
        setSelected(prev => [...prev, ele])
      }
      else {
        setSelected(prev => prev.filter((e) => {
          return e !== ele
        }))
      }
    }
  }
  const selectedClass = (ele) => {
    if (selected.findIndex(element => element === ele) !== -1) {
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

CustomSelect.propTypes = {
  values: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.shape({
      path: PropTypes.string.isRequired,
      size: PropTypes.number,
      color: PropTypes.string
    }),
  })).isRequired,
  color: PropTypes.string,
  fullWidth: PropTypes.bool,
  total: PropTypes.bool,

}

export default CustomSelect