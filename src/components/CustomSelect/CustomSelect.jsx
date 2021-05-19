import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import Icon from "@mdi/react";
import React, {useEffect, useState} from "react";
import { scDark as sc} from "styles/constant";
import PropTypes from 'prop-types';




const CustomSelect = (props) => {
  // Props
  const {values, value, onChange, color} = props

  // States & Logic
  const notFullWidth = values.filter((value) => !value.fullWidth).length
  let initialSelectedId
  let total = values.filter((ele) => ele.total === true)
  let totalLength = total.length
  if (totalLength === 0) {
    initialSelectedId = []
  } else if (totalLength === 1) {
    initialSelectedId = [total[0].id]
  } else {
    throw "Can only have one total element"
  }
  initialSelectedId = value === "" ? initialSelectedId : value
  const [selectedId, setSelectedId] = useState(initialSelectedId)
  const initialSelected = values.filter((value) => initialSelectedId.findIndex((id) => id === value.id) > -1)
  const [selected, setSelected] = useState(initialSelected)

  //UseEffect
  useEffect(() => {
    onChange(selectedId)
  }, [])
  useEffect(() => {
    const newSelectedId = selected.map((select) => select.id)
    setSelectedId(newSelectedId)
  }, [selected])
  useEffect(() => {
    onChange(selectedId)
  }, [selectedId])

  // Styles
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

  // Helper function
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