import React from "react";
import AddIcon from '@material-ui/icons/Add';
import {IconButton, InputLabel} from "@material-ui/core";
import {TextField} from "final-form-material-ui";
import {Field, Form} from 'react-final-form'
import {makeStyles} from '@material-ui/core/styles';
import ColorPicker from "components/ColorPicker/ColorPicker";
import IconPicker from "components/IconPicker/IconPicker";
import CustomSelect from "../../../components/CustomSelect/CustomSelect";
import CustomRadio from "../../../components/CustomRadio/CustomRadio";

const styles = theme => ({
  // label: {
  //   color: sc.color.primaryBlueDark
  // },
  center: {
    textAlign: "center"
  }
})
const useStyles = makeStyles(styles)


const Create = (props) => {
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
    {id: "0", label: "1"},
    {id: "1", label: "2"},
    {id: "2", label: "3"},
    {id: "3", label: "4"},
    {id: "4", label: "5"},
    {id: "5", label: "6"},
    {id: "7", label: "Once every 2 weeks", fullWidth: true}
  ]

  const frequencyMonth = [
    {id: "start", label: "Start"},
    {id: "middle", label: "Middle"},
    {id: "end", label: "End"},
    {id: "whole", label: "Whole month", fullWidth: true}
  ]

  let repeat = [
    {id: "daily", label: "Daily"},
    {id: "weekly", label: "Weekly"},
    {id: "monthly", label: "Monthly"},
  ]

  let goal = [
    {id: "yes", label: "Yes!"},
    {id: "no", label: "No..."},

  ]

  const initialValues = {
    repeat: repeat[0],
    frequencyWeek: frequencyWeek[0],
    frequencyMonth: frequencyWeek[0],
    frequencyDay: [frequencyDay[7]],
    goal: goal[1]
  }

  return (
    <>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        validate={validate}
        render={({handleSubmit, reset, submitting, pristine, values}) => (
          <form onSubmit={handleSubmit}>
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
                return <ColorPicker name={props.input.name} value={props.input.value} onChange={props.input.onChange}/>
              }}
            </Field>
            <Field
              name="icon">
              {props => {
                return <IconPicker color={values.color} name={props.input.name} value={props.input.value}
                                   onChange={props.input.onChange}/>
              }}
            </Field>
            <InputLabel>I want to set a goal</InputLabel>
            <Field
              name="goal">
              {props => {
                return <CustomRadio color={values.color} values={goal} name={props.input.name}
                                    value={props.input.value}
                                    onChange={props.input.onChange}/>
              }}
            </Field>
            {/*{values.goal.id === "yes" &&*/}
            {/*<>*/}
            {/*  <Field*/}
            {/*    name="goalType">*/}

            {/*  </Field>*/}
            {/*</>*/}
            {/*}*/}
            <InputLabel>I want to repeat this habit</InputLabel>
            <Field
              name="repeat">
              {props => {
                return <CustomRadio color={values.color} values={repeat} name={props.input.name}
                                    value={props.input.value}
                                    onChange={props.input.onChange}/>
              }}
            </Field>
            {values.repeat.id === "daily" &&
            <>
              <InputLabel>on these days</InputLabel>
              <Field
              name="frequencyDay">
              {props => {
                return <CustomSelect color={values.color} values={frequencyDay} name={props.input.name}
                                     value={props.input.value} onChange={props.input.onChange}/>
              }}
            </Field>
            </>
            }
            {values.repeat.id === "weekly" &&
            <>
            <InputLabel>this many days a week</InputLabel>
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
            {values.repeat.id === "monthly" &&
            <>
            <InputLabel>at this time of month</InputLabel>
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
              <IconButton color="primary" aria-label="add a new habit" disabled={submitting} type="submit">
                <AddIcon/>
              </IconButton>
            </div>
          </form>
        )}
      />
    </>

  )
}

export default Create
