import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/KYC.css'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/Store'

function KYCTransf() {
    const navigate = useNavigate();
    const client = useAppSelector((state: { client: { data: any; }; })=> state.client.data);
    const typeTransf = useAppSelector((state) => state.typeTransf.typeTransf);
    
    const handleClick = () => {
       console.log(client.ref);
       if(typeTransf=== "Wallet"){
        if(client.hasWallet){
          navigate('/validateRecip');
        }else {
        navigate('/CreateWallet');
        }
       } else if(typeTransf=== "En espèce"){
        navigate('/validateRecip');
       }
      };
  
      const handleBack = () => {
        navigate('/ShowInfo');
      };
    

  return (
    <div>
    <Navbar /> 
      <div className='containerHome'>
      <text>les informations du KYC</text>
      <div className='containerForm'>
        <div>
            <input type="text" className='inputStyle1' placeholder="Titre" value={client.title} disabled/>
            <input type="text" className='inputStyle1' placeholder="Prénom" value={client.firstName} disabled />
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Nom" value={client.lastName} disabled/>
            <input type="text" className='inputStyle1' placeholder="Type de pièce d'identité" value={client.idType} disabled/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Pays d'émission" value={client.emitCountry} disabled/>
            <input type="text" className='inputStyle1' placeholder="N° pièce d'idntité" value={client.idNumber} disabled/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Validité pièce d'identité" value={client.idExpiration} disabled/>
            <input type="text" className='inputStyle1' placeholder="Date de naissance" value={client.dob} disabled/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Pays de nationalité" value={client.nationality} disabled/>
            <input type="text" className='inputStyle1' placeholder="Profession" value={client.profession} disabled/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Pays d'adresse" value={client.country} disabled/>
            <input type="text" className='inputStyle1' placeholder="Adresse légale" value={client.address} disabled/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Ville" value={client.city} disabled/>
            <input type="text" className='inputStyle1' placeholder="GSM" value={client.gsm} disabled/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Email" value={client.email} disabled/>
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

export default KYCTransf
