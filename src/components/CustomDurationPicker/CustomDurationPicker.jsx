import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/styles";

const CustomDurationPicker = (props) => {
  const styles = theme => ({
    input: {
      background: theme.palette.background.default,
      color: theme.palette.text.primary,
      border: "none",
      textAlign: "center",
      width: 80,
      padding: "8px 16px",
      borderRadius: theme.borderRadius.sm,
      "&:focus": {
        outline: "none",
      }

    },
    durationPicker: {
      display: "inline-flex",
      border: "1px solid #ccc",
      alignItems: "center",
      borderRadius: theme.borderRadius.sm
    }
  })
  const useStyles = makeStyles(styles)
  const classes = useStyles()

  const initialDuration = props.value || {hour: 0, minute: 0}

  const [duration, setDuration] = useState(initialDuration)
  const onChangeHour = (event) => {
    setDuration(prev => ({
    ...prev,
      hour: event.target.value,
    }));
  };
  const onChangeMinute = (event) => {
    setDuration(prev => ({
      ...prev,
      minute: event.target.value,
    }));
  };
  useEffect(() => {
    props.onChange(duration)
  }, [duration])

  return (

    <div className={classes.durationPicker}>
      <input className={classes.input} type="number" min={0} max={23} value={duration.hour} onChange={onChangeHour}/>:
      <input className={classes.input} type="number" min={0} max={59} value={duration.minute} onChange={onChangeMinute}/>
    </div>
  )
}

export default CustomDurationPicker
