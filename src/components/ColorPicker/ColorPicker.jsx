import React, {useEffect, useState} from 'react'
import {makeStyles} from "@material-ui/styles";
import {Grid} from "@material-ui/core";
import {scDark as sc} from "styles/constant"


const ColorPicker = (props) => {
  const styles = theme => ({
    colorSelect: {
      height: 24,
      width: 24,
      margin: 8,
      borderRadius: "50%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

    },
    colorSelected: {
      height: 40,
      width: 40,
      background: theme.focusFilter,
      borderRadius: theme.borderRadius.sm,

    },
    colorPicker: {
      display: "flex",
      marginTop: 16
    }
  })
  const useStyles = makeStyles(styles)
  const classes = useStyles()

  const defaultColors = [
    sc.color.red,
    sc.color.pink,
    sc.color.pinkOrange,
    sc.color.orange,
    sc.color.yellow,
    sc.color.lightGreen,
    sc.color.cyan,
    sc.color.lightBlue,
    sc.color.primaryBlue,
    sc.color.purple
  ]
  const colors = props.colors || defaultColors
  const initialColor = props.value || colors[0]
  const [selectedColor, setSelectedColor] = useState(initialColor)
  useEffect(() => {
    props.onChange(selectedColor)
  }, [])
  const handleClick = (color) => {
    setSelectedColor(color)
    props.onChange(color)
  }
  return (
    <Grid container className={classes.colorPicker}>
      {colors.map((color, index) => {
        return (
          <Grid item key={index} className={selectedColor === color && classes.colorSelected} style={{ cursor: "pointer",}} onClick={() => handleClick(color)}>
            <Grid item style={{background: color}} className={classes.colorSelect} >
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
}

export default ColorPicker