import React, { ChangeEvent, FormEvent, HtmlHTMLAttributes, useState } from 'react'
import { Navigate , Link} from 'react-router-dom'
import '../styles/login.css'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'
import { useAppDispatch } from '../store/Store'
import { setLoginData } from '../store/features/LoginSlice'
import LoginModel from '../Models/Login';




const Login = () => {
  const apiUrl = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();
  const dispatch = useAppDispatch()
  console.log('API URL:', apiUrl);
  const [token , setToken] = useState();
  const [name , setName] = useState();
  const [balance , setBalance] = useState();
  const [threshold , setThreshold] = useState();

  const [formData , setFormData] = useState({
    userId:'',
    password: ''
  })

  

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }
  
  const handleLogin=async(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    try{
      const response = await axios.post(`${apiUrl}/auth/login` , formData) ;
      dispatch(setLoginData(response.data)) ;
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role);
      localStorage.setItem('agentName', response.data.agent.name);
      localStorage.setItem('agentEmail', response.data.agent.email);
      localStorage.setItem('agentPhoneNumber', response.data.agent.phoneNumber);
      localStorage.setItem('agentBalance', response.data.agent.balance.toString());
      localStorage.setItem('agentThreshold', response.data.agent.threshold.toString());
      if(response.data.role === "AGENT"){
        console.log("true") ;
        navigate("home" ,{replace:true})
      }
    }catch(e){
      console.log(e)
    }
    


  }
  return (
    <section className='login-body'> 

        <div className='login-page-content'>
         
          <form onSubmit={handleLogin}>
            <div className='divdiv'>
          <div className="input-container"><FontAwesomeIcon icon={faUser} className="icon"/><input  className= "login-field" name="userId" type="text" placeholder='Id utilisateur' defaultValue={formData.userId}  onChange={handleInputChange}  required/></div>
          <div className="input-container"><FontAwesomeIcon icon={faLock}className="icon" /><input  className= "login-field" name="password" type="password" placeholder='Mot de passe'  defaultValue={formData.password} onChange={handleInputChange}  required/></div>
          <input  type="submit"  value="Se connecter"  className='login-button'/>
          </div>
          </form>
          
            
        </div>
      
    </section>
  )
}

export default Login
