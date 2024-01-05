import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../conf/AuthContext';
import { useAppDispatch, useAppSelector } from '../store/Store'
import { setClient } from '../store/features/ClientSlice';

function CreateWallet() {
    const [showTr , setShowTr] = useState(false);
    const [showId , setShowId] = useState(false);
    const [showTransfert , setShowTransfert] = useState("Type de transfert");
    const [showIdentite , setShowIdentite] = useState("Type d'identité");
    const [idNumber , SetIdNumber] = useState("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const apiUrl = process.env.REACT_APP_API_URL;


    const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
    const headers = {
    'Authorization': user.token, 
    };

    const handleBack = () => {
      navigate('/');
    };

  
    const handlSelect = (select : string) => {
      setShowTr(false);
      setShowId(false);
  
      if (select === "transfert") {
        setShowTr(!showTr);
      } else if (select === "identité") {
        setShowId(!showId);
      } 
    };
  
    const handleOptionSelect = (option : string , category : string) => {
      if (category === "transfert") {
        setShowTransfert(option);
      } else if (category === "identité") {
        setShowIdentite(option);
      } 
  
      setShowTr(false);
      setShowId(false);
    };
 

    const handleSearch = async () => {

      try {
        const response = await axios.get(`${apiUrl}/client/cin/${idNumber}`);
        console.log(response.data);
        if (response.status === 200) {
          if (response.data.expired) {
            dispatch(setClient(response.data));
            navigate('/ShowKYC');
          } else {
            navigate('/MAJKYC');
          }
        } else if (response.status === 204) {
          
          navigate('/AddKYC');
        } 
      } catch (error) {
        console.error('');
      }

    }; 

  return (
    <div>
      <Navbar /> 
      <div className='containerHome'>
        <div className='header1'>
            <div className='cercleStyle select'>1</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>2</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>3</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>4</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>5</div>
        </div>
        <text className='title'>Accès à la transfer nationale</text>
      <input type='text' className='inputStyle' placeholder="Entrer numéro d'identité" value={idNumber} onChange={(e) => SetIdNumber(e.target.value)}/>
      <input type='text' className='inputStyle' placeholder="Entrer numéro d'identité" value={idNumber} onChange={(e) => SetIdNumber(e.target.value)}/>
      <input type='text' className='inputStyle' placeholder="Entrer numéro d'identité" value={idNumber} onChange={(e) => SetIdNumber(e.target.value)}/>
      <div className='containerButton'>
        <div className='button retour' onClick={handleBack}>
            <label>Retour</label>
        </div>
        <div className='button'onClick={handleSearch}>
            <label>Recherche</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CreateWallet
