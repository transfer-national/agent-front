import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/Store'

function ShowInfo() {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/AccessPay');
    };

    const handleBack = () => {
      navigate('/TransfAccess');
    };

    const transfert = useAppSelector((state: { transfert: { data: any; }; })=> state.transfert.data);



 
  return (
    <div>
      <Navbar /> 
      <div className='containerHome'>
        <div className='header1'>
            <div className='cercleStyle'>1</div>
            <div className='ligneStyle' />
            <div className='cercleStyle select'>2</div>
            <div className='ligneStyle' />
            <div className='cercleStyle '>3</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>4</div>
        </div>
        <text className='title'>Affichage des informations</text>
        <div>
      </div>
      <div>
      <div className='sousTitle'><text >Les informations du donneur d’ordre</text></div>
      <div className='contShow'>
        ID Agent / Wallet du client 
        <span>{transfert.statuses[0].byUserId}</span>
      </div>
      <div className='contShow'>
      nom complète du DO
        <span>{transfert.sender.firstName} {transfert.sender.lastName}</span>
      </div>
      <div className='contShow'>
      Date d’émission
        <span>{transfert.statuses[0].updatedAt}</span>
      </div>
      <div className='sousTitle'><text >Les informations de l’opération du transfert</text></div>
      <div className='contShow'>
      montant du transfert
        <span>{transfert.amount}</span>
      </div>
      <div className='contShow'>
      nom complète du Bénificiaire
        <span>{transfert.recipient.firstName} {transfert.recipient.lastName}</span>
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
