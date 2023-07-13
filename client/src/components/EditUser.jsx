import { FormControl, FormGroup,InputLabel,Input, Typography,styled,Button } from "@mui/material";

import { useState , useEffect} from "react";

import {useNavigate , useParams} from 'react-router-dom';

import { addUser , getUser} from "../service/api";

const defaultValue = {
  name: '',
  username:'',
  email:'',
  phone:''

}

const Container = styled(FormGroup)`
   width:50%;
   margin: 10% auto 0 auto;
   & > div {
     margin-top: 20px;
   }
`


const EditUser = () =>{

  const [user , setUser] = useState(defaultValue);

  let navigate = useNavigate();

  const {id} = useParams();

  useEffect(() =>{
      loadUserDetails();
  } ,[]);

  const loadUserDetails = async() =>{
    const response  = await getUser(id);
    setUser(response.data);
    
  }
  
  const onValueChange = (e) =>{
     
   
    setUser({ ...user, [e.target.name ]: e.target.value });
  }

  const addUserDetails = async() =>{
       await addUser(user);
       navigate('/all');
  }
    return(
        <Container>
          <Typography variant="h4">Edit Information</Typography>
            <FormControl>
              <InputLabel>Name</InputLabel>
              <Input onChange = {(e) => onValueChange(e)} name="name"  value = {this.user.name} />
            </FormControl>
            <FormControl>
              <InputLabel>UserName</InputLabel>
              <Input onChange = {(e) => onValueChange(e)} name="username" value = {this.user.username} />
            </FormControl>
            <FormControl>
              <InputLabel>Email</InputLabel>
              <Input onChange = {(e) => onValueChange(e)} name="email" value = {this.user.email}   />
            </FormControl>
            <FormControl>
              <InputLabel>Phone </InputLabel>
              <Input onChange = {(e) => onValueChange(e)} name = "phone" value = {this.user.phone} />
            </FormControl>
            <FormControl>
               <Button variant="contained" onClick={()=>addUserDetails()}>Edit User</Button> 
            </FormControl>
        </Container>
    )
}

export default EditUser;