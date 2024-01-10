import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../store/Store'
import { setClient } from '../store/features/ClientSlice';
import { setTypeTransf} from '../store/features/TypeSlice';

function AccessPay() {
    const [showTr , setShowTr] = useState(false);
    const [showId , setShowId] = useState(false);
    const [showTransfert , setShowTransfert] = useState("type de virement");
    const [showIdentite , setShowIdentite] = useState("Type d'identité");
    const navigate = useNavigate();
    const [idNumber , SetIdNumber] = useState("");
    const dispatch = useAppDispatch();
    const apiUrl = process.env.REACT_APP_API_URL;
    
    
    const handleBack = () => {
      navigate('/ShowInfo');
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
        dispatch(setTypeTransf(option));
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
            dispatch(setClient(response.data));
            navigate('/KYCTransf');
        } else if (response.status === 204) {
          
          navigate('/AddKYCTrans');
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
            <div className='cercleStyle'>1</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>2</div>
            <div className='ligneStyle' />
            <div className='cercleStyle select'>3</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>4</div>
        </div>
        <text className='title'>Accès à la transfert nationale</text>
        <div>
      <div className='styleSelect' onClick={() => handlSelect("transfert")}>
        <span>{showTransfert}</span>
        <TiArrowSortedDown />
      </div>
      {showTr && (
        <div className='st'>
          <span  onClick={() => handleOptionSelect('Wallet', "transfert")}>Wallet</span>
          <span  onClick={() => handleOptionSelect('En espèce', "transfert")}>En espèce</span>
         </div>
      )}
      </div>
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

export default AccessPay
