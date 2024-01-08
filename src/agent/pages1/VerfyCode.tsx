import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function VerifyCode() {
    const [code, SetCode] = useState("");
    const navigate = useNavigate();

    const handleBack = () => {
      navigate('/home');
    };


    const handleValider = async () => {
            navigate('/ShowInfo');

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
            <div className='cercleStyle select'>4</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>5</div>
        </div>
        <text className='title'>Vérification de code</text>
        <input type='text' className='inputStyle' placeholder="code" value={code} onChange={(e) => SetCode(e.target.value)}/>
      <div className='containerButton'>
        <div className='button retour' onClick={handleBack}>
            <label>Retour</label>
        </div>
        <div className='button'onClick={handleValider}>
            <label>Recherche</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default VerifyCode
