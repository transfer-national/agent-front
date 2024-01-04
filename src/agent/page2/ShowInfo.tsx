import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import { TiArrowSortedDown } from "react-icons/ti";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../conf/AuthContext';

function ShowInfo() {
  const navigate = useNavigate();
  const {infoTransf , agent} = useAuth();
    
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
        <text className='title'>Affichage des informations</text>
        <div>
      </div>
      <div>
      <div className='sousTitle'><text >Les informations du donneur d’ordre</text></div>
      <div className='contShow'>
        ID Agent / Wallet du client 
        <span>{agent.name}</span>
      </div>
      <div className='contShow'>
      nom complète du DO
        <span>w-123456789</span>
      </div>
      <div className='contShow'>
      Date d’émission
        <span>w-123456789</span>
      </div>
      <div className='sousTitle'><text >Les informations de l’opération du transfert</text></div>
      <div className='contShow'>
      montant du transfert
        <span>w-123456789</span>
      </div>
      <div className='contShow'>
      nom complète du B
        <span>w-123456789</span>
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

export default ShowInfo
