import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store/Store';
import Recipient from '../Models/Recipient'
import { addListTransfert,clearListTransfert } from '../store/features/ListTransfert';
import axios from 'axios';

function AddAmount() {
  const navigate = useNavigate();
  const listRecip = useAppSelector((state) => state.listRecip.listRecip);
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;
  const [feeType, setFeeType] = useState<String>("")
  const [notif, setNotif] = useState(false)
  const [amount, setAmount] = useState("")
  const [reason, setReason] = useState("")
  const [id, setId] = useState("");
  const listTransfert  = useAppSelector((state) => state.listTransfert.listTransfert);
  const client = useAppSelector((state: { client: { data: any; }; })=> state.client.data); 
  const typeTransf = useAppSelector((state) => state.typeTransf.typeTransf);
  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
    console.log(user);
    const headers = {
      'Authorization': user.token, 
    };
  
  const handleClick = () => {
      navigate('/Notif');
    };

    const handleBack = () => {
      navigate('/AddAmount');
    };

    const handleFeeType = (option : String) => {
      setFeeType(option);
      console.log(option , notif);
    };

    const handleNotif = () => {
      setNotif(!notif);
    };

    const handleToList = () => {
       const data= {
        recipientId : id,
        amount : parseFloat(amount),
        feeType : feeType,
        notificationEnabled : notif,
        reason: reason,
       }

      dispatch(addListTransfert(data));
      console.log(listTransfert );
    }
    
    useEffect(() => {
          dispatch(clearListTransfert());
    }, []);

    const handleAddTransfert = async () => {
      try {
        const requestData = {
           senderRef : client.ref,
           transferType : typeTransf,
           unitTransfers : listTransfert
        };


        const response = await axios.post(`${apiUrl}/transfer` , requestData , {headers});
        console.log("bien");
        console.log(response.data)
        navigate('/ValideTransfert')
      } catch (error) {
        console.error('');
      }
      
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
        {Array.isArray(listRecip) && listRecip.map((rec: Recipient) => (
          <div>
        <div className="addStyle">
        <text className='title'>Pour {rec.firstName} {rec.lastName} </text>
        <text className='title'>La saisie du montant du transfert</text>
      <input type='text' className='inputStyle' placeholder="montant" value={amount} onChange={(e) => {setAmount(e.target.value); setId(rec.id) }} />
      <input type='text' className='inputStyle' placeholder="motif de transfert" value={reason} onChange={(e) => setReason(e.target.value)}  />
      <text className='title'>Notification & Frais de transfert</text>
        <div>
      </div>
      <div>
      <div >
      < input type="checkbox" onClick={handleNotif}/>
      <text className='cont'>Notification du transfert</text>
      </div>
      <div className='sousTitle'><text >Frais de transfert</text></div>
      <div>
      < input type="radio" id="1" name="frais"  onClick={() => handleFeeType("SENDER")}/>
      <text className='cont'>Frais à la charge du client donneur d’ordre</text>
      </div>
      <div>
      < input type="radio" id="2" name="frais" onClick={() => handleFeeType("RECIPIENT")}/>
      <text className='cont'>Frais à la charge du client bénéficiaire</text>
      </div>
      <div>
      < input type="radio" id="3" name="frais" onClick={() => handleFeeType("FIFTY_FIFTY")}/>
      <text className='cont'>Frais partagés entre les clients</text>
      </div>
      </div>
      </div>
      <div className='button' onClick={handleToList }>
      <label >valider</label >
    </div>
     </div>
      ))}

      <div className='containerButton'>
        <div className='button retour' onClick={handleBack}>
            <label>Retour</label>
        </div>
        <div className='button' onClick={handleAddTransfert}>
            <label>Suivant</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AddAmount
