import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/KYC.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAppSelector } from '../store/Store'

function AddKYC() {
    const [title , setTitle] = useState("");
    const [pre , setPre] = useState("");
    const [nom, setNom] = useState("");
    const [paysEm, setPaysEm] = useState("");
    const [idType , setIdType] = useState("");
    const [idNum , setIdNum] = useState("");
    const [validId , setValidId] = useState("");
    const [ date, setDate] = useState("");
    const [paysNat, setPaysNat] = useState("");
    const [prof , setProf] = useState("");
    const [paysAd, setPaysAd] = useState("");
    const [adress , setAdress] = useState("");
    const [ville , setVille] = useState("");
    const [gsm , setGsm] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const apiUrl = process.env.REACT_APP_API_URL;
   
    const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
    console.log(user);
    const headers = {
      'Authorization': user.token, 
      };

    const handleAdd = async () => {
      try {
        const requestData = {
          title :title,
          firstName: pre,
          lastName: nom,
          emitCountry : paysEm,
          idType :idType,
          idNumber : idNum,
          idExpiration : validId,
          dob : date,
          profession : prof,
          nationality: paysNat,
          address :adress,
          city :  ville,
          country : paysAd,
          gsm : gsm,
          email : email,
          byAgentId: null,
        };


        const response = await axios.post(`${apiUrl}/client` , requestData , {headers});
        console.log(response.status)
        if(response.status == 201){
        console.log("bien");
        navigate('/EffectuerTN');
        } else {
        console.log("errreeeeeur")
        }
      } catch (error) {
        console.error('');
      }
      
    };

    const handleBack = () => {
      navigate('/FindKYC');
    };
    
  return (
    <div>
    <Navbar /> 
      <div className='containerHome'>
      <text>Ajouter KYC</text>
      <div className='containerForm'>
        <div>
            <input type="text" className='inputStyle1' placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="text" className='inputStyle1' placeholder="Prénom" value={pre} onChange={(e) => setPre(e.target.value)} />
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)}/>
            <input type="text" className='inputStyle1' placeholder="Type de pièce d'identité" value={idType} onChange={(e) => setIdType(e.target.value)}/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Pays d'émission" value={paysEm} onChange={(e) => setPaysEm(e.target.value)} />
            <input type="text" className='inputStyle1' placeholder="N° pièce d'idntité" value={idNum} onChange={(e) => setIdNum(e.target.value)} />
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Validité pièce d'identité" value={validId} onChange={(e) => setValidId(e.target.value)}/>
            <input type="text" className='inputStyle1' placeholder="Date de naissance" value={date} onChange={(e) => setDate(e.target.value)}/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Pays de nationalité" value={paysNat} onChange={(e) => setPaysNat(e.target.value)}/>
            <input type="text" className='inputStyle1' placeholder="Profession" value={prof} onChange={(e) => setProf(e.target.value)}/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Pays d'adresse" value={paysAd} onChange={(e) => setPaysAd(e.target.value)}/>
            <input type="text" className='inputStyle1' placeholder="Adresse légale" value={adress} onChange={(e) => setAdress(e.target.value)} />
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Ville" value={ville} onChange={(e) => setVille(e.target.value)} />
            <input type="text" className='inputStyle1' placeholder="GSM" value={gsm} onChange={(e) => setGsm(e.target.value)}/>
        </div>
        <div>
            <input type="text" className='inputStyle1' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
      </div>
      <div className='containerButton'>
        <div className='button retour' onClick={handleBack}>
            <label>Retour</label>
        </div>
        <div className='button' onClick={handleAdd}>
            <label>Ajouter</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AddKYC
