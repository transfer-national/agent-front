import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

function AddAmount() {
  const navigate = useNavigate();
    
  const handleClick = () => {
      navigate('/Notif');
    };

    const handleBack = () => {
      navigate('/AddAmount');
    };

    
 
  return (
    <div>
      <Navbar /> 
      <div className='containerHome'>
        <div className='header1'>
            <div className='cercleStyle'>1</div>
            <div className='ligneStyle' />
            <div className='cercleStyle select'>2</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>3</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>4</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>5</div>
        </div>
        <text className='title'>La saisie du montant du transfert</text>
        <div>
      </div>
      <input type='text' className='inputStyle' placeholder="montant" />
      <input type='text' className='inputStyle' placeholder="motif de transfert" />
      <div className='containerButton'>
        <div className='button retour' onClick={handleBack}>
            <label>Retour</label>
        </div>
        <div className='button' onClick={handleClick}>
            <label>Suivant</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AddAmount
