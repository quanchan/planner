import React from "react";
import AddIcon from '@material-ui/icons/Add';
import {IconButton, InputLabel, MenuItem} from "@material-ui/core";
import {Select, TextField} from "final-form-material-ui";
import {Field, Form} from 'react-final-form'
import {makeStyles} from '@material-ui/core/styles';
import ColorPicker from "components/ColorPicker/ColorPicker";
import IconPicker from "components/IconPicker/IconPicker";
import CustomSelect from "components/CustomSelect/CustomSelect";
import CustomRadio from "components/CustomRadio/CustomRadio";
import CustomDurationPicker from "components/CustomDurationPicker/CustomDurationPicker";
import {mdiAccountGroup} from "@mdi/js";
import {scDark as sc} from "styles/constant";

const styles = theme => ({
  label: {
    fontSize: 18,
    margin: "16px 0"
  },
  center: {
    textAlign: "center"
  },
  form: {
    margin: "0 24px"
  },
  timePicker: {
    margin: "16px auto",
    textAlign: "center"
  },
  goalPicker: {
    ...theme.flexCenterBetween
  },
  inputSplit: {
    width: "calc(50% - 16px)",
    margin: "16px 8px"
  }
})
const useStyles = makeStyles(styles)


const CreateHabit = (props) => {
  const classes = useStyles()
  const onSubmit = async (values) => {
    console.log(values)
  }

  const validate = (values) => {
    const errors = {};
    if (!values.name) errors.name = 'Habit Name must not be empty!';
    return errors;
  };

  const frequencyDay = [
    {id: "0", label: "Mon"},
    {id: "1", label: "Tue"},
    {id: "2", label: "Wed"},
    {id: "3", label: "Thu"},
    {id: "4", label: "Fri"},
    {id: "5", label: "Sat"},
    {id: "6", label: "Sun"},
    {id: "7", label: "Everyday", fullWidth: true, total: true}
  ]

  const frequencyWeek = [
    {id: "1", label: "1"},
    {id: "2", label: "2"},
    {id: "3", label: "3"},
    {id: "4", label: "4"},
    {id: "5", label: "5"},
    {id: "6", label: "6"},
    {id: "1/2weeks", label: "Once every 2 weeks", fullWidth: true}
  ]

  const frequencyMonth = [
    {id: "start", label: "Start"},
    {id: "middle", label: "Middle"},
    {id: "end", label: "End"},
    {id: "whole", label: "Whole month", fullWidth: true}
  ]

  const repeat = [
    {id: "daily", label: "Daily"},
    {id: "weekly", label: "Weekly"},
    {id: "monthly", label: "Monthly"},
  ]

  const goal = [
    {id: "yes", label: "Yes!"},
    {id: "no", label: "No..."},
  ]
  const goalTypes = [
    {id: "repetition", label: "reps"},
    {id: "duration", label: "duration"},
  ]

  const initialValues = props.values || {
    repeat: repeat[0].id,
    frequencyWeek: frequencyWeek[0].id,
    frequencyMonth: frequencyMonth[0].id,
    frequencyDay: [frequencyDay[7].id],
    goal: goal[1].id,
    goalType: goalTypes[0].id,
    icon: mdiAccountGroup,
    color: sc.color.red
  }

  return (
    <>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit, reset, submitting, pristine, values}) => (
          <form className={classes.form} onSubmit={handleSubmit}>
            <Field
              fullWidth
              name="name"
              type="text"
              placeholder="Name of the habit"
              component={TextField}
            />
            <Field
              name="color">
              {props => {
                return <ColorPicker
                  name={props.input.name} value={props.input.value} onChange={props.input.onChange}/>
              }}
            </Field>
            <Field
              name="icon">
              {props => {
                return <IconPicker color={values.color} name={props.input.name} value={props.input.value}
                                   onChange={props.input.onChange}/>
              }}
            </Field>
            <InputLabel className={classes.label}>I want to set a goal</InputLabel>
            <Field
              name="goal">
              {props => {
                return <CustomRadio color={values.color} values={goal} name={props.input.name}
                                    value={props.input.value}
                                    onChange={props.input.onChange}/>
              }}
            </Field>
            {values.goal === "yes" &&
            <div className={classes.goalPicker}>
              <div className={classes.inputSplit}>
                <Field
                  fullWidth
                  name="goalType"
                  component={Select}
                  formControlProps={{fullWidth: true}}
                  style={{margin: 0}}
                >
                  {goalTypes.map(e => <MenuItem key={e.id} value={e.id}>{e.label}</MenuItem>)}
                </Field>
              </div>
              {values.goalType === "repetition" &&
              <div className={classes.inputSplit}>
                <Field
                  fullWidth
                  name="repetition"
                  type="text"
                  placeholder="this many times"
                  component={TextField}
                />
              </div>

              }
              {values.goalType === "duration" && <Field
                name="duration">
                {props => {
                  return (
                    <div className={classes.timePicker}>
                      <CustomDurationPicker name={props.input.name}
                                            value={props.input.value}
                                            onChange={props.input.onChange}
                      />
                    </div>
                  )
                }}
              </Field>}

            </div>
            }
            <InputLabel className={classes.label}>I want to repeat this habit</InputLabel>
            <Field
              name="repeat">
              {props => {
                return <CustomRadio color={values.color} values={repeat} name={props.input.name}
                                    value={props.input.value}
                                    onChange={props.input.onChange}/>
              }}
            </Field>
            {values.repeat === "daily" &&
            <>
              <InputLabel className={classes.label}>on these days</InputLabel>
              <Field
                name="frequencyDay">
                {props => {
                  return <CustomSelect color={values.color} values={frequencyDay} name={props.input.name}
                                       value={props.input.value} onChange={props.input.onChange}/>
                }}
              </Field>
              <InputLabel className={classes.label}>at this time</InputLabel>
              <Field
                name="time">
                {props => {
                  return (
                    <div className={classes.timePicker}>
                      <CustomDurationPicker name={props.input.name}
                                            value={props.input.value}
                                            onChange={props.input.onChange}
                      />
                    </div>
                  )
                }}
              </Field>
            </>
            }
            {values.repeat === "weekly" &&
            <>
              <InputLabel className={classes.label}>this many days a week</InputLabel>
              <Field
                name="frequencyWeek">
                {props => {
                  return <CustomRadio color={values.color} values={frequencyWeek} name={props.input.name}
                                      value={props.input.value}
                                      onChange={props.input.onChange}/>
                }}
              </Field>
            </>
            }
            {values.repeat === "monthly" &&
            <>
              <InputLabel className={classes.label}>at this time of month</InputLabel>
              <Field
                name="frequencyMonth">
                {props => {
                  return <CustomRadio color={values.color} values={frequencyMonth} name={props.input.name}
                                      value={props.input.value}
                                      onChange={props.input.onChange}/>
                }}
              </Field>
            </>
            }

            <div className={classes.center}>
              <IconButton aria-label="add a new habit" disabled={submitting} type="submit">
                <AddIcon style={{color: values.color}}/>
              </IconButton>
            </div>
          </form>
        )}
      />
    </>

  )
}

export default CreateHabit
