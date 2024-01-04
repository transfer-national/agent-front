import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';

function Notif() {
  const navigate = useNavigate();
    
  const handleClick = () => {
      navigate('/FindRec');
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
            <div className='cercleStyle'>2</div>
            <div className='ligneStyle' />
            <div className='cercleStyle select'>3</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>4</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>5</div>
        </div>
        <text className='title'>Notification & Frais de transfert</text>
        <div>
      </div>
      <div>
      <div >
      < input type="checkbox" />
      <text className='cont'>Notification du transfert</text>
      </div>
      <div className='sousTitle'><text >Frais de transfert</text></div>
      <div>
      < input type="radio" id="1" name="frais" />
      <text className='cont'>Frais à la charge du client donneur d’ordre</text>
      </div>
      <div>
      < input type="radio" id="2" name="frais" />
      <text className='cont'>Frais à la charge du client donneur d’ordre</text>
      </div>
      <div>
      < input type="radio" id="3" name="frais" />
      <text className='cont'>Frais partagés entre les clients</text>
      </div>
      </div>
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

export default Notif
