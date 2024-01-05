import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import { useNavigate } from 'react-router-dom';
import { useAppSelector , useAppDispatch} from '../store/Store'

function ValidateRecip() {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const typeTransf = useAppSelector((state) => state.typeTransf.typeTransf);

  const handleClick = () => {
      navigate('/AccessPay');
    };

    const handleBack = () => {
      navigate('/AddAmount');
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
            <div className='cercleStyle '>3</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>4</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>5</div>
        </div>
        <text className='title'>Validation</text>
        <div>
      </div>
      <div>
      <div className='contShow'>
        nom complete du bénéficiaire
        <span> hhhhhhhhhhhhhh </span>
      </div>
      <div className='contShow'>
      mode de servir
        <span> hhhhhhhhhhhhh </span>
      </div>
      <div className='contShow'>
      montant de transfert
        <span> hhhhhhhhhhhhhhhhhhh </span>
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

export default ValidateRecip
