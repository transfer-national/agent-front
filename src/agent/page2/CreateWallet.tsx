import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../store/Store'

function EffectuerTN() {
    const [showId , setShowId] = useState(false);
    const [showIdentite , setShowIdentite] = useState("Type d'identité");
    const [idNumber , SetIdNumber] = useState("");
    const [balance, SetBalance] = useState("");
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;


    const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
    const headers = {
    'Authorization': user.token, 
    };

    const handleBack = () => {
      navigate('/KYCTransf');
    };

  
    const handlSelect = (select : string) => {

      setShowId(false);
  
      if (select === "identité") {
        setShowId(!showId);
      } 
    };
  
    const handleOptionSelect = (option : string , category : string) => {
      if (category === "identité") {
        setShowIdentite(option);
      } 

      setShowId(false);
    };
 

    const handleSearch = async () => {

      try {
        const requestData = {
            cin : idNumber,
            balance : balance,
          }; 
          const response = await axios.post(`${apiUrl}/wallet` , requestData , {headers});
          console.log(response.data);
          navigate('/validateRecip');
       } catch (error) {
        console.error('');
      }

    }; 

  return (
    <div>
      <Navbar /> 
      <div className='containerHome'>
        <text className='title'>Ajouter une wallet</text>
        <div>
      <div className='styleSelect' onClick={() => handlSelect("identité")}>
        <span>{showIdentite}</span>
        <TiArrowSortedDown />
      </div>
      {showId && (
        <div className='st'>
          <span  onClick={() => handleOptionSelect('CIN', "identité")}>CIN</span>
          <span  onClick={() => handleOptionSelect('Passport', "identité")}>Passport</span>
          </div>
      )}
      </div>
      <input type='text' className='inputStyle' placeholder="Entrer numéro d'identité" value={idNumber} onChange={(e) => SetIdNumber(e.target.value)}/>
      <input type='text' className='inputStyle' placeholder="montant" value={balance} onChange={(e) => SetBalance(e.target.value)}/>
      <div className='containerButton'>
        <div className='button retour' onClick={handleBack}>
            <label>Retour</label>
        </div>
        <div className='button'onClick={handleSearch}>
            <label>Ajouter</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default EffectuerTN
