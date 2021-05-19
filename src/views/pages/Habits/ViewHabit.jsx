import HabitCard from "./components/HabitCard";
import {Grid} from "@material-ui/core";

const ViewHabit = (props) => {
  return (
    <>
      <div>Today Habits</div>
      <div>1 habits</div>
      <Grid container>
        <HabitCard/>
        <HabitCard/>
        <HabitCard/>
      </Grid>
    </>
  )
}

export default ViewHabit