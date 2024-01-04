import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../conf/AuthContext';

function EffectuerTN() {
    const [showTr , setShowTr] = useState(false);
    const [showId , setShowId] = useState(false);
    const [showTransfert , setShowTransfert] = useState("Type de transfert");
    const [showIdentite , setShowIdentite] = useState("Type d'identité");
    const [idNumber , SetIdNumber] = useState("");
    const {setClientData } = useAuth();
    const navigate = useNavigate();


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
        const response = await axios.get(`http://100.94.242.12:8080/client/cin/${idNumber}`);
        console.log(response.data);
        if (response.status === 200) {
          if (response.data.expired) {
            setClientData(response.data);
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
        <div>
      <div className='styleSelect' onClick={() => handlSelect("transfert")}>
        <span>{showTransfert}</span>
        <TiArrowSortedDown />
      </div>
      {showTr && (
        <div className='st'>
          <span  onClick={() => handleOptionSelect('Débit', "transfert")}>Débit</span>
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

export default EffectuerTN
