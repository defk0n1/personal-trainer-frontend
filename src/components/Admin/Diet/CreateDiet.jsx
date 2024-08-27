import {useGetClientDietPlanQuery} from '../../../slices/clientsApiSlice'
import { useEffect, useState } from 'react';
import {Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, TextField, Button, Alert,CircularProgress } from '@mui/material';
import {useCreateDietPlanMutation} from '../../../slices/adminApiSlice'




const CreateDiet = ({id}) => {
    const initDietPlan = {
        name: "New diet plan",
        description: "Here goes the description",
        meals: [
        ]
      };

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState(initDietPlan);

  const [createDiet] = useCreateDietPlanMutation();
  
  const [err, setErr] = useState("");

 



  



  const handleSaveClick = () => {
    for (const meal of editData.meals) {
      if (!validateMeal(meal)) {
        setErr("Please fill out all fields in the meals.");
        return;
      }
      for (const item of meal.items) {
        if (!validateItem(item)) {
          setErr("Please fill out all fields in the items.");
          return;
        }
      }
    }
    const payload = {...editData , userId:id}
    console.log(payload)
    const res = createDiet(payload).unwrap()
    setIsEditing(false);
    setErr("");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleMealChange = (e, mealIndex) => {
    const { name, value } = e.target;
    const updatedMeals = editData.meals.map((meal, index) =>
      index === mealIndex ? { ...meal, [name]: value } : meal
    );
    setEditData({
      ...editData,
      meals: updatedMeals,
    });
  };

  const handleItemChange = (e, mealIndex, itemIndex) => {
    const { name, value } = e.target;
    const updatedMeals = editData.meals.map((meal, mIndex) => {
      if (mIndex === mealIndex) {
        const updatedItems = meal.items.map((item, iIndex) =>
          iIndex === itemIndex ? { ...item, [name]: value } : item
        );
        return { ...meal, items: updatedItems };
      }
      return meal;
    });
    setEditData({
      ...editData,
      meals: updatedMeals,
    });
  };

  const handleAddMeal = () => {
    const newMeal = {
      name: "",
      time: "",
      items: [{ name: "", quantity: "" }],
    };
    setEditData({
      ...editData,
      meals: [...editData.meals, newMeal],
    });
  };

  const handleAddItem = (mealIndex) => {
    const newItem = { name: "", quantity: "" };
    const updatedMeals = editData.meals.map((meal, index) => {
      if (index === mealIndex) {
        return { ...meal, items: [...meal.items, newItem] };
      }
      return meal;
    });
    setEditData({
      ...editData,
      meals: updatedMeals,
    });
  };

  const handleRemoveMeal = (mealIndex) => {
    const updatedMeals = editData.meals.filter((_, index) => index !== mealIndex);
    setEditData({
      ...editData,
      meals: updatedMeals,
    });
  };

  const handleRemoveItem = (mealIndex, itemIndex) => {
    const updatedMeals = editData.meals.map((meal, mIndex) => {
      if (mIndex === mealIndex) {
        const updatedItems = meal.items.filter((_, iIndex) => iIndex !== itemIndex);
        return { ...meal, items: updatedItems };
      }
      return meal;
    });
    setEditData({
      ...editData,
      meals: updatedMeals,
    });
  };

  const validateMeal = (meal) => {
    return meal.name.trim() !== "" && meal.time.trim() !== "";
  };

  const validateItem = (item) => {
    return item.name.trim() !== "" && item.quantity.trim() !== "";
  };

  
  const innerContent = (<>
        { 
        <Container maxWidth="xl">
        <Container sx={{ padding: 2 }}>
          {err && <Alert severity="error">{err}</Alert>}
          
            <>
              <TextField
                fullWidth
                label="Diet Plan Name"
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
         
  
         
            <Button variant="contained" color="primary" onClick={handleSaveClick} sx={{ marginBottom: 2 }}>
              Save
            </Button>
      
         
       
            <Button variant="contained" color="secondary" onClick={handleAddMeal} sx={{ marginBottom: 2 }}>
              Add Meal
            </Button>
        
        </Container>
        <Grid container spacing={3}>
          {editData.meals.map((meal, mealIndex) => (
            <Grid item xs={12} md={6} key={mealIndex}>
              <Card>
                <CardContent>
                 
                    <>
                      <TextField
                        fullWidth
                        label="Meal Name"
                        name="name"
                        value={meal.name}
                        onChange={(e) => handleMealChange(e, mealIndex)}
                        sx={{ marginBottom: 2 }}
                      />
                      <TextField
                        fullWidth
                        label="Meal Time"
                        name="time"
                        value={meal.time}
                        onChange={(e) => handleMealChange(e, mealIndex)}
                        sx={{ marginBottom: 2 }}
                      />
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => handleRemoveMeal(mealIndex)}
                        
                      >
                        Remove Meal
                      </Button>
                    </>
                 
                  
                  <List>
                    {meal.items.map((item, itemIndex) => (
                      <ListItem key={itemIndex}>
                        
                          <>
                            <TextField
                              fullWidth
                              label="Item Name"
                              name="name"
                              value={item.name}
                              onChange={(e) => handleItemChange(e, mealIndex, itemIndex)}
                            />
                            <TextField
                              fullWidth
                              label="Quantity"
                              name="quantity"
                              value={item.quantity}
                              onChange={(e) => handleItemChange(e, mealIndex, itemIndex)}
                            />
                            <Button
                              variant="contained"
                              color="error"
                              onClick={() => handleRemoveItem(mealIndex, itemIndex)}
                              
                            >
                              Remove Item
                            </Button>
                          </>
                       
                      </ListItem>
                    ))}
                  </List>
              
                    <Button variant="contained" color="secondary" onClick={() => handleAddItem(mealIndex)} sx={{ marginTop: 2 }}>
                      Add Item
                    </Button>
               
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
        }
        </>



    )

    return innerContent
}

export default CreateDiet
