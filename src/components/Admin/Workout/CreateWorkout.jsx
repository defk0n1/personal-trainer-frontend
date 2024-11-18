import {useGetClientWorkoutPlanQuery} from '../../../slices/clientsApiSlice'
import { useEffect, useState } from 'react';
import {Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, TextField, Button, Alert,CircularProgress,Autocomplete } from '@mui/material';
import {useCreateWorkoutPlanMutation} from '../../../slices/adminApiSlice'
import ExercisesData from './WorkoutData';






const CreateWorkout= ({id}) => {
    const initWorkoutPlan = {
        name: "Here goes the name of the workout",
        description: "Here goes the description",
        days: [
        ]
      };

  const [createWorkout] = useCreateWorkoutPlanMutation()

  const [editData, setEditData] = useState(initWorkoutPlan);
  
  const [err, setErr] = useState("");





  


  const handleSaveClick = () => {
    console.log(editData)
    for (const day of editData.days) {
      if (!validateDay(day)) {
        setErr("Please fill out all fields in the workouts.");
        return;
      }
      for (const exercise of day.exercises) {
        if (!validateExercise(exercise)) {
          setErr("Please fill out all fields in the exercices.");
          return;
        }
      }
    }
    const payload = {...editData , userId:id}
    console.log(payload)
    const res = createWorkout(payload,id).unwrap()

    
    setErr("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleDayChange = (e, dayIndex) => {
    const { name, value } = e.target;
    const updatedDays = editData.days.map((day, index) =>
      index === dayIndex ? { ...day, [name]: value } : day
    );
    setEditData({
      ...editData,
      days: updatedDays,
    });
  };

  // const handleExerciseChange = (e, dayIndex , exerciseIndex) => {
  //   const { name, value } = e.target;
  //   const updatedDays= editData.days.map((day, mIndex) => {
  //     if (mIndex === dayIndex) {
  //       const updatedExercises = day.exercises.map((exercise, iIndex) =>
  //         iIndex === exerciseIndex ? { ...exercise, [name]: value } : exercise
  //       );
  //       return { ...day, exercises: updatedExercises };
  //     }
  //     return day;
  //   });
  //   setEditData({
  //     ...editData,
  //     days: updatedDays,
  //   });
  // };
  const handleExerciseChange = (e, dayIndex, exerciseIndex,v) => {
    console.log(e)
    const attributes = {name:'' , value:'',vidId:''} 
    if(e.type == "change"){
      attributes.name = e.target.name
      attributes.value = e.target.value
      attributes.vidId = Object.keys(ExercisesData.exerciseNames).find(key => ExercisesData.exerciseNames[key] === attributes.value)
      console.log(attributes.vidId)


  }else if(e.type =="click"){
      attributes.name = "name"
      attributes.value = v.label
      attributes.vidId = v.id
      console.log(attributes.vidId)

      
  }
    const updatedDays = editData.days.map((day, mIndex) => {
      if (mIndex === dayIndex) {
        const updatedExercises = day.exercises.map((exercise, iIndex) =>
          iIndex === exerciseIndex ? { ...exercise, [attributes.name]: attributes.value, vidId : attributes.vidId} : exercise
        );
        console.log(day.exercises)

        return { ...day, exercises: updatedExercises };
      }
      return day;
    });
    setEditData({
      ...editData,
      days: updatedDays,
    });
  };

  const handleAddDay = () => {
    const newDay = {
      day: "",
      exercises: [{ name: "",sets:"", reps: "" ,rest:"",vidId:""}],
    };
    setEditData({
      ...editData,
      days: [...editData.days, newDay],
    });
  };

  const handleAddExercise = (dayIndex) => {
    const newExercise = { name: "",sets:"", reps: "" ,rest:"",vidId:""};
    const updatedDays = editData.days.map((day, index) => {
      if (index === dayIndex) {
        return { ...day, exercises: [...day.exercises, newExercise] };
      }
      return day;
    });
    setEditData({
      ...editData,
      days: updatedDays,
    });
  };

  const handleRemoveDay= (dayIndex) => {
    const updatedDays = editData.days.filter((_, index) => index !== dayIndex);
    setEditData({
      ...editData,
      days: updatedDays,
    });
  };

  const handleRemoveExercise = (dayIndex, exerciseIndex) => {
    const updatedDays = editData.days.map((day, mIndex) => {
      if (mIndex === dayIndex) {
        const updatedExercises = day.exercises.filter((_, iIndex) => iIndex !== exerciseIndex);
        return { ...day, exercises: updatedExercises };
      }
      return day;
    });
    setEditData({
      ...editData,
      days: updatedDays,
    });
  };

  const validateDay = (day) => {
    return day.day.trim() !== "";
  };

  const validateExercise = (exercise) => {
    return exercise.name.trim() !== "" && exercise.reps.trim() !== "" && exercise.sets.trim() !== "" && exercise.rest.trim() !== "";
  };

  
  const innerContent = (<>
        <Container maxWidth="xl">
        <Container sx={{ padding: 2 }}>
          {err && <Alert severity="error">{err}</Alert>}
          {(
            <>
              <TextField
                fullWidth
                label="Workout Plan Name"
                name="name"
                value={editData.name}
                onChange={handleChange}
                sx={{ marginBottom: 2 }}
              />
              <TextField
                fullWidth
                label="Description"
                name="description"
                value={editData.description}
                onChange={handleChange}
                sx={{ marginBottom: 2 }}
              />
            </>
          )}
  
          {(
            <Button variant="contained" color="primary" onClick={handleSaveClick} sx={{ marginBottom: 2 }}>
              Save
            </Button>
          )}
          {(
            <Button variant="contained" color="secondary" onClick={handleAddDay} sx={{ marginBottom: 2 }}>
              Add day
            </Button>
          )}
        </Container>
        <Grid container spacing={3}>
          {editData.days.map((day, dayIndex) => (
            <Grid item xs={12} md={6} key={dayIndex}>
              <Card>
                <CardContent>
                  {(
                    <>
                      <TextField
                        fullWidth
                        label="Day Name"
                        name="day"
                        value={day.day}
                        onChange={(e) => handleDayChange(e, dayIndex)}
                        sx={{ marginBottom: 2 }}
                      />
                    
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleRemoveDay(dayIndex)}
                        
                      >
                        Remove day
                      </Button>
                    </>
                  )}
                  <List>
                    {day.exercises.map((exercise, exerciseIndex) => (
                      <ListItem key={exerciseIndex}>
                        {(
                          <>
                            {/* <TextField
                              fullWidth
                              label="Exercise Name"
                              name="name"
                              value={exercise.name}
                              onChange={(e) => handleExerciseChange(e, dayIndex, exerciseIndex)}
                            /> */}
                            
                            <Autocomplete
                              options={Object.keys(ExercisesData.exerciseNames).map((key)=>({id : key, label:ExercisesData.exerciseNames[key]}))}
                              renderInput={(params) => (
                                <TextField {...params} label="Select an exercice" variant="outlined" />
                              )}
                              onChange={(e,v) => {console.log(v);handleExerciseChange(e, dayIndex, exerciseIndex,v)}}
                              value={exercise.name} 
                              name="name"
                              freeSolo
                              openOnFocus 
                            />
                            <TextField
                              fullWidth
                              label="Sets"
                              name="sets"
                              value={exercise.sets}
                              onChange={(e) => handleExerciseChange(e, dayIndex, exerciseIndex)}
                            />
                             <TextField
                              fullWidth
                              label="Reps"
                              name="reps"
                              value={exercise.reps}
                              onChange={(e) => handleExerciseChange(e, dayIndex, exerciseIndex)}
                            />
                             <TextField
                              fullWidth
                              label="Rest"
                              name="rest"
                              value={exercise.rest}
                              onChange={(e) => handleExerciseChange(e, dayIndex, exerciseIndex)}
                            />
                             {/* <TextField
                              fullWidth
                              label="vidId"
                              name="vidId"
                              value={exercise.rest}
                              onChange={(e) => handleExerciseChange(e, dayIndex, exerciseIndex)}
                            /> */}
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => handleRemoveExercise(dayIndex, exerciseIndex)}
                              
                            >
                              Remove Exercise
                            </Button>
                          </>
                        )}
                      </ListItem>
                    ))}
                  </List>
                  {(
                    <Button variant="contained" color="secondary" onClick={() => handleAddExercise(dayIndex)} sx={{ marginTop: 2 }}>
                      Add Exercise
                    </Button>
                  )}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
         
        </>



    )

    return innerContent
}

export default CreateWorkout
