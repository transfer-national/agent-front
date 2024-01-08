import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import '../styles/valideTransfert.css'
import { useAppDispatch, useAppSelector } from '../store/Store';
import Recipient from '../Models/Recipient'
import ListTransfert from '../Models/ListTransfert';
import axios from 'axios'
import jsPDF from 'jspdf'
import { useNavigate } from 'react-router-dom'

function ValideTransfert() {
  const listRecip = useAppSelector((state) => state.listRecip.listRecip);
  const apiUrl = process.env.REACT_APP_API_URL;
  const client = useAppSelector((state: { client: { data: any; }; })=> state.client.data);
  const listTransfert  = useAppSelector((state) => state.listTransfert.listTransfert); 
  const typeTransf = useAppSelector((state) => state.typeTransf.typeTransf);
  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
    console.log(user);
    const headers = {
      'Authorization': user.token, 
    };
  const [msg,setMsg] = useState("")
  const [showMsg , setShowMsg] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    setMsg("bien")
    setShowMsg(true)
  };
    

  const handleAddTransfert = async () => {
    try {
      const requestData = {
         senderRef : client.ref,
         transferType : typeTransf,
         unitTransfers : listTransfert
      };


      const response = await axios.post(`${apiUrl}/transfer` , requestData , {headers});
      console.log("bien");
      console.log(response.data);
      setMsg("bien")
    setShowMsg(true)
    } catch (error) {
      console.error('');
    }

    
    const pdf = new jsPDF();
    const drawCell = (text: string, x: number, y: number, width: number, height: number) => {
      pdf.text(text, x + 2, y + height / 2, { align: 'left', baseline: 'middle' });
    };
    
    const topMargin = 10;
    const titleX = 70;  
    const titleY = topMargin + 5;   
    const titleText = 'Reçu de transfert';
    pdf.setFontSize(16); 
    pdf.text(titleText, titleX, titleY);

    let tableX = 10;
    let tableY = titleY + 15;
    
  
    
    // Largeur et hauteur des cellules
    const cellWidth = 120;
    const cellHeight = 8;

    const cellWidth1 = 80;
    const cellHeight1 = 8;

    // Espacement entre les cellules réduit
     const cellSpacing = 5;
    
    // Attributs à afficher dans le tableau
    const attributes = ['Nom complet du bénéficiaire:', 'Type de transfert:', 'Montant du transfert:' , 'Frais du Transfert:' ,'Frais du transfert:' , 'Montant total du transfert:'];
    
    // Dessiner l'en-tête du tableau
   
    
    // Dessiner le contenu du tableau pour chaque transfert
    for (let i = 0; i < listTransfert.length; i++) {
      tableY += cellSpacing; // Ajouter un espacement entre les lignes

    
      // Attributs associés à chaque transfert
      const values = [`${listTransfert[i].nomRecipient} ${listTransfert[i].preRecipient}`,`${typeTransf}`, `${listTransfert[i].amount} DH`,`${listTransfert[i].notifAmount} DH` ,`${listTransfert[i].feeAmount} DH` , `${listTransfert[i].total} DH`];
      
      for (let j = 0; j < attributes.length; j++) {
        drawCell(attributes[j], tableX, tableY, cellWidth, cellHeight);
        drawCell(values[j], tableX + cellWidth + cellSpacing, tableY, cellWidth, cellHeight);
        tableY += cellHeight + cellSpacing;
      }
    }
    
    
    // Position pour les cadres de signature
    const signatureX = 10;
    const signatureY = tableY + 2 * (cellHeight + cellSpacing) + 20;
    
    // Dessiner les cadres de signature
    pdf.text('Signature du Client', signatureX + cellWidth1 / 2, signatureY + cellHeight / 2, {
      align: 'center',
      baseline: 'middle',
    });
    
    pdf.text('Signature de l\'Agent', signatureX + 1.5 * cellWidth1+ cellSpacing, signatureY + cellHeight / 2, {
      align: 'center',
      baseline: 'middle',
    });
    
    // Sauvegarder ou ouvrir le PDF
    pdf.save('transaction_summary.pdf');

    navigate('/home');
    
  };


  return (
    <div>
      <Navbar /> 
      <div className='containerHome'>
        <div className='header1'>
            <div className='cercleStyle '>1</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>2</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>3</div>
            <div className='ligneStyle' />
            <div className='cercleStyle'>4</div>
            <div className='ligneStyle' />
            <div className='cercleStyle select'>5</div>
        </div>
        <text className='title'>la finalisation </text>
        {Array.isArray(listTransfert) && listTransfert.map((rec: ListTransfert) => (
          <div>
        <div className='elem'>
            <div className='sousElem'>
                <text>Nom complète du bébéficiaire</text>
                <text>{rec.nomRecipient} {rec.preRecipient}</text>
            </div>
            <div className='sousElem'>
                <text>Nom complète du DO</text>
                <text>{client.firstName} {client.LastName}</text>
            </div>
            <div className='sousElem'>
                <text>type de transfert</text>
                <text>{typeTransf}</text>
            </div>
            <div className='sousElem'>
                <text>Montant de transfert</text>
                <text>{rec.amount}</text>
            </div>
            <div className='sousElem'>
                <text>Motif de transfert</text>
                <text>{rec.reason}</text>
            </div>
            <div className='sousElem'>
                <text>Frais de transfert</text>
                <text>{rec.feeAmount}</text>
            </div>
            <div className='sousElem'>
                <text>Frais de notification</text>
                <text>{rec.notifAmount}</text>
            </div>
            <div className='sousElem'>
                <text>Montant total de l'opération</text>
                <text>{rec.total}</text>
            </div>
        </div>
        </div>
        ))}
      <div className='containerButton'>
        <div className='button retour'>
            <label>Retour</label>
        </div>
        <div className='button' onClick={handleAddTransfert}>
            <label>Valider</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ValideTransfert
