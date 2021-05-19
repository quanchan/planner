import {Card, CardContent, Grid} from "@material-ui/core";
import React, {useState} from "react"
import {scDark as sc} from "styles/constant";
import {mdiBookOpenPageVariantOutline} from "@mdi/js";
import Icon from "@mdi/react";
import {makeStyles} from "@material-ui/styles";
import {useHistory} from "react-router-dom";

const HabitCard = (props) => {
  const mockData = {
    id: "123",
    name: "Read",
    color: sc.color.primaryBlue,
    icon: mdiBookOpenPageVariantOutline,
    goalType: "duration",
    duration: {hour: 2, minute: 0},
    time: {hour: 20, minute: 30}
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
    time
  } = props.data || mockData
  const styles = theme => ({
    habitCard: {
      margin: 8,
      cursor: "pointer",
      borderRadius: theme.borderRadius.sm
    },
    habitCardContent: {
      ...theme.flexCenterBetween,
    },
    leftSide: {
      display: "flex"
    },
    title: {
      fontSize: 16,
      marginLeft: 8
    },
    progress: {
      color: color
    }
  })
  const useStyles = makeStyles(styles)
  const classes = useStyles()
  const history = useHistory()
  const handleClick = () => {
    history.push(`/u/habits-view/${id}`)
  }

  const [progress, setProgress] = useState(0)
  const totalMinute = duration.hour * 60 + duration.minute
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card className={classes.habitCard} elevation={2} onClick={handleClick}>
        <CardContent className={classes.habitCardContent}>
          <div className={classes.leftSide}>
            <Icon path={icon}
                  size={1}
                  color={color}
            />
            <div className={classes.title}>{name}</div>
          </div>
          {goalType === "duration" && <div>
            <span className={classes.progress}><span
              style={{fontWeight: 900}}>{progress}</span>/{totalMinute}</span> mins
          </div>}
          {goalType === "repetition" && <div>
            <span className={classes.progress}><span
              style={{fontWeight: 900}}>{progress}</span>/{repetition}</span> times
          </div>}
        </CardContent>
      </Card>
    </Grid>
  )
}

export default HabitCard