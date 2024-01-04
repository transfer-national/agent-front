import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/KYC.css'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../conf/AuthContext';


function ShowKYC() {
    const navigate = useNavigate();
    const { clientData} = useAuth();
    
    const handleClick = () => {
       console.log(clientData.ref);
        navigate('/FindRec');
      };
  
      const handleBack = () => {
        navigate('/ShowKYC');
      };

  return (
    <div>
    <Navbar /> 
      <div className='containerHome'>
      <text>les informations du KYC</text>
      <div className='containerForm'>
        <div>
            <input type="text" className='inputStyle1' placeholder="Titre" value={clientData.title} disabled/>
            <input type="text" className='inputStyle1' placeholder="Prénom" value={clientData.firstName} disabled />
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Nom" value={clientData.lastName} disabled/>
            <input type="text" className='inputStyle1' placeholder="Type de pièce d'identité" value={clientData.idType} disabled/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Pays d'émission" value={clientData.emitCountry} disabled/>
            <input type="text" className='inputStyle1' placeholder="N° pièce d'idntité" value={clientData.idNumber} disabled/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Validité pièce d'identité" value={clientData.idExpiration} disabled/>
            <input type="text" className='inputStyle1' placeholder="Date de naissance" value={clientData.dob} disabled/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Pays de nationalité" value={clientData.nationality} disabled/>
            <input type="text" className='inputStyle1' placeholder="Profession" value={clientData.profession} disabled/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Pays d'adresse" value={clientData.country} disabled/>
            <input type="text" className='inputStyle1' placeholder="Adresse légale" value={clientData.address} disabled/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Ville" value={clientData.city} disabled/>
            <input type="text" className='inputStyle1' placeholder="GSM" value={clientData.gsm} disabled/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Email" value={clientData.email} disabled/>
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

export default ShowKYC
