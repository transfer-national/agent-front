import React, { useState , useEffect} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import '../styles/FindRec.css'
import { FaUserPlus } from "react-icons/fa6"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../styles/KYC.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../conf/AuthContext';
import Recipient  from '../Models/Recipient'

function FindRec() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [gsm , setGsm] = useState("");
  const [pre , setPre] = useState("");
  const [nom, setNom] = useState("");
  const navigate = useNavigate();
  const { clientData , token, listRecip, setListRecip} = useAuth();
  const [recep, setRecep] = useState([{id : "" , firstName : "" , lastName: "" , phoneNumber :""}]);
  const [searchTerm, setSearchTerm] = useState("");

    
  const handleClick = () => {
      navigate('/AddAmount');
      console.log(listRecip)
    };

    const handleBack = () => {
      navigate('/Notif');
    };



    useEffect(() => {
      const fetchBeneficiaires = async () => {
        try {
          const response = await axios.get(`http://100.94.242.12:8080/client/${clientData.ref}/recipient`);
          const filteredBeneficiaires = response.data.filter(
            (rec : Recipient) =>
              rec.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              rec.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
              rec.phoneNumber.includes(searchTerm)
          );
          setRecep(filteredBeneficiaires);
        } catch (error) {
          console.error(error);
        }
      };
      fetchBeneficiaires();
    }, [searchTerm, clientData.ref]);




  const handleAdd = async () => {
    try {
      const requestData = {
        firstName: pre,
        lastName:   nom,
        phoneNumber : gsm,
      }
      const headers = {
        'Authorization': `${token}`, 
      };

      const response = await axios.post(`http://100.94.242.12:8080/client/${clientData.ref}/recipient` , requestData , {headers});
      console.log("bien");
      console.log(token)
    } catch (error) {
      console.error('');
    }
    
  };


  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
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
          <div className='cercleStyle'>3</div>
          <div className='ligneStyle' />
          <div className='cercleStyle select'>4</div>
          <div className='ligneStyle' />
          <div className='cercleStyle'>5</div>
        </div>
        <text className='title'>les informations du bénéficiaire</text>
        <div>
          <div className='styleSelect' >
            <input type='text' className='search' placeholder="Recherche ...."  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}/>
            <div onClick={handleOpen} ><FaUserPlus /></div>
          </div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography id="modal-modal-title" variant="h6" component="h2">
              Ajouter une bénéficaire
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <div className='containerModal' >
                <input type="text" className='inputStyle1' placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
                <input type="text" className='inputStyle1' placeholder="Prénom" value={pre} onChange={(e) => setPre(e.target.value)} />
                <input type="text" className='inputStyle1' placeholder="GSM" value={gsm} onChange={(e) => setGsm(e.target.value)} />
                </div>
                <div className='containerButton'>
                  <div className='button retour' onClick={handleClose}>
                    <label >Retour</label>
                  </div>
                  <div className='button' onClick={handleAdd}>
                    <label >Ajouter</label >
                  </div>
                </div>
              </Typography>
            </Box>
          </Modal>
        </div>
        <div className='style'>
          {recep.map((rec, index) => (
            <div className='elemStyle'>
              <div>
                <input type="radio"  onClick={() => {  setListRecip((prevId: string[]) => [...prevId, `${rec.id}`]);
                }} />
                {rec.firstName} {rec.lastName}
              </div>
              <div>
                {rec.phoneNumber}
              </div>
            </div>

          ))}
        </div>
        <div className='containerButton'>
          <div className='button retour' onClick={handleBack}>
            <label >Retour</label >
          </div>
          <div className='button' onClick={handleClick}>
            <label >Suivant</label >

          </div>
        </div>
      </div>
    </div>
  )
}

export default FindRec
