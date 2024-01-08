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
  const [feeType, setFeeType] = useState<String>("")
  const [notif, setNotif] = useState(false)
  const [amount, setAmount] = useState("")
  const [feeAmount, setFeeAmount] = useState("")
  const [notifAmount, setNotifAmount] = useState("")
  const [reason, setReason] = useState("")
  const [name, setName] = useState("")
  const [pre, setPre] = useState("")
  const [id, setId] = useState("");
  const listTransfert  = useAppSelector((state) => state.listTransfert.listTransfert);


  const handleClick = () => {
      navigate('/ValideTransfert');
    };

    const handleBack = () => {
      navigate('/FindRec');
    };

    const handleFeeType = (option : String) => {
      setFeeType(option);
      if (option === "SENDER"){
         setFeeAmount("20");
      }else if (option === "RECIPIENT"){
        setFeeAmount("0");
      } else if (option === "FIFTY_FIFTY"){
        setFeeAmount("10");
      }
      console.log(option , notif);
    };

    const handleNotif = () => {
      setNotif(!notif);
      if(notif){
        setNotifAmount("1");
      }else {
        setNotifAmount("0");
      }
    };
     

    const handleToList = () => {

       const totalAmount =  parseFloat(feeAmount) + parseFloat(notifAmount) + parseFloat(amount)
       const data= {
        nomRecipient : name,
        preRecipient: pre,
        recipientId : id,
        amount : parseFloat(amount),
        feeType : feeType,
        notificationEnabled : notif,
        reason: reason,
        feeAmount: parseFloat(feeAmount),
        notifAmount: parseFloat(notifAmount),
        total: totalAmount,
       }

      dispatch(addListTransfert(data));
      console.log(listTransfert );
    }
    
    useEffect(() => {
          dispatch(clearListTransfert());
    }, []);

 
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
        </div>
        {Array.isArray(listRecip) && listRecip.map((rec: Recipient) => (
          <div>
        <div className="addStyle">
        <text className='title'>Pour {rec.firstName} {rec.lastName} </text>
        <text className='title'>La saisie du montant du transfert</text>
      <input type='text' className='inputStyle' placeholder="montant" value={amount} onChange={(e) => {setAmount(e.target.value); setId(rec.id) ; setName( rec.lastName) ; setPre(rec.firstName)}} />
      <div><select className='inputStyle' value={reason}  onChange={(e)=>setReason(e.target.value)}>
              <option value=""  disabled selected>Motif de transfert</option>
              <option value="Soutien familial">Soutien familial</option>
              <option value="Epargne/investissement">Epargne/investissement</option>
              <option value="Cadeau">Cadeau</option>
              <option value="Paiement de biens et de services">Paiement de biens et de services</option>
              <option value="Frais de dépassement ">Frais de dépassement </option>
              <option value="Frais d'éducation">Frais d'éducation</option>
              <option value="Location/Hypothèque ">Location/Hypothèque </option>
              <option value="Aide de secours/Médicale">Aide de secours/Médicale</option>
              <option value="Revenu d'un site internet">Revenu d'un site internet</option>
              <option value="Frais de loterie ou récompense/taxes">Frais de loterie ou récompense/taxes</option>
              <option value="Prêt">Prêt</option>
              <option value="Commerce sur internet">Commerce sur internet</option>
              <option value="Donation">Donation</option>
              <option value="Autres">Autres (à préciser)</option>
              </select></div>
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
        <div className='button' onClick={handleClick} >
            <label>Suivant</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default AddAmount
