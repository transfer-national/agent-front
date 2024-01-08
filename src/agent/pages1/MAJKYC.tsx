import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/KYC.css'
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../store/Store'
import axios from 'axios';

function MAJKYC() {
  const navigate = useNavigate();
  const [pre, setPre] = useState("");
  const [nom, setNom] = useState("");
  const [paysEm, setPaysEm] = useState("");
  const [idType, setIdType] = useState("");
  const [idNum, setIdNum] = useState("");
  const [validId, setValidId] = useState("");
  const [date, setDate] = useState("");
  const [paysNat, setPaysNat] = useState("");
  const [prof, setProf] = useState("");
  const [paysAd, setPaysAd] = useState("");
  const [adress, setAdress] = useState("");
  const [ville, setVille] = useState("");
  const [gsm, setGsm] = useState("");
  const [email, setEmail] = useState("");
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleClick = () => {
    navigate('/FindRec');
  };

  const handleBack = () => {
    navigate('/EffectuerTN');
  };

  const client = useAppSelector((state: { client: { data: any; }; }) => state.client.data);

  const user = useAppSelector((state: { login: { data: any; }; }) => state.login.data);
  console.log(user);
  const headers = {
    'Authorization': user.token,
  };

  const handlelUpdate = async () => {
    try {
      const requestData: any = {};

      if (pre !== "") requestData.firstName = pre;
      if (nom !== "") requestData.lastName = nom;
      if (paysEm !== "") requestData.emitCountry = paysEm;
      if (idType !== "") requestData.idType = idType;
      if (idNum !== "") requestData.idNumber = idNum;
      if (validId !== "") requestData.idExpiration = validId;
      if (date !== "") requestData.dob = date;
      if (prof !== "") requestData.profession = prof;
      if (paysNat !== "") requestData.nationality = paysNat;
      if (adress !== "") requestData.address = adress;
      if (ville !== "") requestData.city = ville;
      if (paysAd !== "") requestData.country = paysAd;
      if (gsm !== "") requestData.gsm = gsm;
      if (email !== "") requestData.email = email;

      const response = await axios.put(`${apiUrl}/client/${client.ref}`, requestData, { headers });
      console.log(response.status)
      if (response.status == 201) {
        console.log("bien");
        navigate('/EffectuerTN');
      } else {
        console.log("errreeeeeur")
      }
    } catch (error) {
      console.error('');
    }

  };


  return (
    <div>
      <Navbar />
      <div className='containerHome'>
        <text>les informations du KYC</text>
        <div className='containerForm'>
          <div>
            <input type="text" className='inputStyle1' placeholder="Titre" value={client.title} disabled />
            <input type="text" className='inputStyle1' placeholder="Prénom" value={client.firstName} onChange={(e) => setPre(e.target.value)} />
          </div>
          <div>
            <input type="text" className='inputStyle1' placeholder="Nom" value={client.lastName} onChange={(e) => setNom(e.target.value)} />
            <input type="text" className='inputStyle1' placeholder="Type de pièce d'identité" value={client.idType} onChange={(e) => setIdType(e.target.value)} />
          </div>
          <div>
            <input type="text" className='inputStyle1' placeholder="Pays d'émission" value={client.emitCountry} onChange={(e) => setPaysEm(e.target.value)} />
            <input type="text" className='inputStyle1' placeholder="N° pièce d'idntité" value={client.idNumber} onChange={(e) => setIdNum(e.target.value)} />
          </div>
          <div>
            <input type="text" className='inputStyle1' placeholder="Validité pièce d'identité" value={client.idExpiration} onChange={(e) => setValidId(e.target.value)} />
            <input type="text" className='inputStyle1' placeholder="Date de naissance" value={client.dob} onChange={(e) => setDate(e.target.value)} />
          </div>
          <div>
            <input type="text" className='inputStyle1' placeholder="Pays de nationalité" value={client.nationality} onChange={(e) => setPaysNat(e.target.value)} />
            <input type="text" className='inputStyle1' placeholder="Profession" value={client.profession} onChange={(e) => setProf(e.target.value)} />
          </div>
          <div>
            <input type="text" className='inputStyle1' placeholder="Pays d'adresse" value={client.country} onChange={(e) => setPaysAd(e.target.value)} />
            <input type="text" className='inputStyle1' placeholder="Adresse légale" value={client.address} onChange={(e) => setAdress(e.target.value)} />
          </div>
          <div>
            <input type="text" className='inputStyle1' placeholder="Ville" value={client.city} onChange={(e) => setVille(e.target.value)} />
            <input type="text" className='inputStyle1' placeholder="GSM" value={client.gsm} onChange={(e) => setGsm(e.target.value)} />
          </div>
          <div>
            <input type="text" className='inputStyle1' placeholder="Email" value={client.email} onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className='containerButton'>
          <div className='button retour' onClick={handleBack}>
            <label>Retour</label>
          </div>
          <div className='button' onClick={handlelUpdate}>
            <label>Suivant</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MAJKYC