import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../conf/AuthContext';

function TransfAccess() {
    const [showId , setShowId] = useState(false);
    const [idTransf , SetIdTransf] = useState("");
    const {setInfoTransf} = useAuth();
   const [showIdentite , setShowIdentite] = useState("type d’operation");
    const navigate = useNavigate();



    const handleBack = () => {
      navigate('/');
    };

    const handleChange = () =>{
      console.log(showId);
      setShowId(!showId);
    }

    const handleOptionSelect = (option : string) => {
      setShowIdentite(option);
      setShowId(false);
    };

    const handleSearch = async () => {

      try {
        const response = await axios.get(`http://100.94.242.12:8080/transfer/${idTransf}`);
        console.log(response.data);
        setInfoTransf(response.data);
        if (response.status === 200) {
            navigate('/AccessPay');
        } else {
          console.log("erreur")
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
        <text className='title'>export default TransfAccess</text>
        <input type='text' className='inputStyle' placeholder="référence du transfert" value={idTransf} onChange={(e) => SetIdTransf(e.target.value)}/>
      <div>
      <div className='styleSelect' onClick={handleChange}>
        <span>{showIdentite}</span>
        <TiArrowSortedDown />
      </div>
      {showId && (
        <div className='st'>
          <span  onClick={() => handleOptionSelect('SERVIR')}>SERVIR</span>
          <span  onClick={() => handleOptionSelect('EXTOURNE')}>EXTOURNE</span>
          <span  onClick={() => handleOptionSelect('RESTITUTION')}>RESTITUTION</span>
          </div>
      )}
      </div>
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

export default TransfAccess
