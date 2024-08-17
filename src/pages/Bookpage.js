import Navbar from "../components/Home/Navbar";
import "../styles/bookpage.css"
import {useState} from "react";
import {useAddNewClientMutation} from "../slices/clientsApiSlice"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import { useNavigate } from 'react-router-dom'


import { toast } from "react-toastify";



function Bookpage() {
    const formData =[
        ["fullName" , ["text","Please enter full name"]],
        ["height" , ["number","Please enter height"]],
        ["weight",["number","Please enter weight"]],
        ["age" , ["number","Please enter age"]],
        ["level" ,["text","Please enter experience with training"]],
        ["goal",["text","Please enter goal"]],
        ["active" ,["text","Please enter activity level"]],
        ["numofMeals",["number", "Please enter preferred number of meals per day"]],
        ["medicalCondition",["text","Please specify any underlying medical conditions or allergies"]],
        ["foodtoAvoid",["text", "Please specify unpreferred foods" ]],
        ["supplement",["text","Specify if willing to use supplements"]],
        ["comment",["text","Feel free to add anything"]],
        ["phoneNumber",["text","Please enter phone number"]],
  
  
    ]
    const [createForm, setCreateForm] = useState(
      {
        fullName : "",
        phoneNumber: "",
        height : "",
        weight:"" ,
        age :"" ,
        level :"",
        goal:"",
        active :"",
        numofMeals:"",
        medicalCondition:"",
        foodtoAvoid:"",
        supplement:"",
        comment:"",
  
    }
    )
    const [signup, { isLoading }] = useAddNewClientMutation();

    const navigate = useNavigate()
  
  
    const updateCreateFormField = (e) => {
      const {name , value} = e.target;
      setCreateForm({
        ...createForm,
        [name] : value
  
      })
      console.log( {name , value});
  
    }

  
  
    const createEntry = async (e) =>{
        e.preventDefault();
      try {
        const res = await signup(createForm).unwrap();
        setCreateForm( {
                fullName : "",
                phoneNumber:"",
                height : "",
                weight:"" ,
                age :"" ,
                level :"",
                goal:"",
                active :"",
                numofMeals:"",
                medicalCondition:"",
                foodtoAvoid:"",
                supplement:"",
                comment:""
            })
        toast.success('Sign up successful, please log in', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
        setTimeout(()=>{
                navigate('/login')


        },5000)

        
      } catch (err) {
        toast.error(err?.data?.message || err.error)


        
      }
  
//       const res = await axios.post("http://localhost:3000/api/clients/",createForm);
      
    }
  
  
  
  
  
  
  
  

    return (
        <>
        <Navbar bookpage={true}/>
        <ToastContainer/>
        <div className="wrapper">
    <h1>SIGN UP</h1>
    <form id="crudForm" onSubmit={createEntry}>
        <input onChange={updateCreateFormField} type="hidden" id="itemId"/>
        <div className="form-element">
        <label htmlFor="name">Full name:</label>
        <input onChange={updateCreateFormField} type="text" id="fullName" name="fullName" value={createForm.fullName} required/>
        <br/>
        </div>
        <div className="form-element"><label htmlFor="phoneNumber">Phone number:</label>
        <input onChange={updateCreateFormField} type="text" id="phoneNumber" name="phoneNumber" value={createForm.phoneNumber} required/>
        <br/>
        </div>
        <div className="form-element"><label htmlFor="height">Height:</label>
        <input onChange={updateCreateFormField} type="number" id="height" name="height" value={createForm.height} required/>
        <br/>
        </div>
        <div className="form-element"><label htmlFor="weight">Weight:</label>
        <input onChange={updateCreateFormField} type="number" id="weight" name="weight"value={createForm.weight}  required/>
        <br/>
        </div>

        <div className="form-element">
        <label htmlFor="age">Age:</label>
        <input onChange={updateCreateFormField} type="number" id="age" name="age"value={createForm.age}  required/>
        <br/>
</div>        <div className="form-element"><label htmlFor="level">Experience level:</label>
        <input onChange={updateCreateFormField} type="text" id="level" name="level"value={createForm.level}  required/>
        <br/>
</div>

        <div className="form-element"><label htmlFor="goal">Goal:</label>
        <input onChange={updateCreateFormField} type="text" id="goal" name="goal"value={createForm.goal}  required/>
        <br/>
</div>
        <div className="form-element"><label htmlFor="active">Activity level:</label>
        <input onChange={updateCreateFormField} type="text" id="active" name="active"value={createForm.active}  required/>
        <br/>
</div>
        <div className="form-element"><label htmlFor="numofMeals">Number of meals per day:</label>
        <input onChange={updateCreateFormField} type="number" id="numofMeals" name="numofMeals"value={createForm.numofMeals}  required/>
        <br/>
</div>
        <div className="form-element">  <label htmlFor="medicalCondition">Underlying medical conditions:</label>
        <input onChange={updateCreateFormField} type="text" id="medicalCondition" name="medicalCondition"value={createForm.medicalCondition}   required/>
        <br/>
</div>
        <div className="form-element"><label htmlFor="foodtoAvoid">Food to avoid in diet:</label>
        <input onChange={updateCreateFormField} type="text" id="foodtoAvoid" name="foodtoAvoid"value={createForm.foodtoAvoid}  required/>
        <br/>
</div>
        
        <div className="form-element"><label htmlFor="supplement">Are you willing to use supplements?:</label>
        <input onChange={updateCreateFormField} type="text" id="supplement" name="supplement"value={createForm.supplement} required/>
        <br/>
</div>
        <div className="form-element" id='feel-free'> <label htmlFor="comment">Feel free to add anything:</label>
        <input onChange={updateCreateFormField} type="text" id="comment" name="comment" value={createForm.comment} required/>
        <br/>
</div>
        
       
       
        <button type="submit">Submit</button>
    </form>
    </div>
        
        </>
    )

}



export default Bookpage;
