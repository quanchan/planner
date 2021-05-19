import {scDark as sc} from "styles/constant";
import {mdiBookOpenPageVariantOutline} from "@mdi/js";
import {makeStyles} from "@material-ui/styles";
import Icon from "@mdi/react";
import React, {useState} from "react";
import {Card, Dialog, DialogTitle, IconButton} from "@material-ui/core";
import CreateHabit from "./CreateHabit";
import EditIcon from '@material-ui/icons/Edit';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const ViewSpecificHabit = (props) => {
  const mockData = {
    id: "123",
    name: "Read",
    color: sc.color.primaryBlue,
    icon: mdiBookOpenPageVariantOutline,
    goal: "yes",
    goalType: "duration",
    duration: {hour: 2, minute: 0},
    time: {hour: 20, minute: 30},
    repeat: "monthly",
    frequencyDay: [
      2,3,4,5,6
    ],
    frequencyWeek: "3",
    frequencyMonth: "whole"
  }
  const {
    id,
    name,
    color,
    icon,
    goal,
    goalType,
    duration,
    repetition,
    repeat,
    frequencyDay,
    frequencyWeek,
    frequencyMonth,
    time
  } = props.data || mockData
  const [openDialog, setOpenDialog] = useState(false)
  const styles = theme => ({
    title: {
      fontSize: 36,
      margin: " 0 8px -10px 16px"
    },
    subTitle: {
      fontSize: 16,
      color: theme.color.grey
    },
    dialogTitle: {
      textAlign: "center",
    },
    titleWrapper: {
      display: "flex",
      alignItems: "center"
    },
    card: {
      textAlign: "center",
      width: 350
    }
  })
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  let frequency
  switch (repeat.id) {
    case "daily":
      let weekDays = ""
      frequencyDay.forEach((e) => {
        weekDays += ` ${e.label},`
      })
      console.log(weekDays)
      frequency = "Repeat on" + weekDays
      frequency = frequency.substring(0, frequency.length - 1);
      break
    case "weekly":
      if (frequencyWeek.id === "1/2weeks") {
        frequency = "Once every 2 weeks"
      } else {
        frequency = `${frequencyWeek.id} time${frequencyWeek.id === "1" ? "" : "s"} a week`
      }
      break
    case "monthly":
      switch (frequencyMonth.id) {
        case "start":
          frequency = "At the beginning of the month"
          break
        case "middle":
          frequency = "In the middle of the month"
          break
        case "end":
          frequency = "At the end of the month"
          break
        case "whole":
          frequency = "1 time a month"
          break
      }
      break
  }

  return (
    <div>
      <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
        <DialogTitle className={classes.dialogTitle} id="form-dialog-title" >
            Edit Habit
        </DialogTitle>
        <CreateHabit values={mockData}/>
      </Dialog>
      <div className={classes.titleWrapper} >
        <Icon path={icon}
              size={2}
              color={color}
        />
        <div className={classes.title}>{name}</div>
        <IconButton aria-label="edit this habit" size="small" onClick={() => setOpenDialog(true)}>
          <EditIcon style={{color: color}}/>
        </IconButton>
      </div>
      <div className={classes.subTitle}>
        {frequency}
      </div>
      <Card elevation={2} className={classes.card} >
      <Calendar/>
      </Card>
    </div>
  )
}

export default ViewSpecificHabit