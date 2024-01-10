import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import { useNavigate } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from '../store/Store'

import jsPDF from 'jspdf'

function ValidateRecip() {
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  const dispatch = useAppDispatch();
  const typeTransf = useAppSelector((state) => state.typeTransf.typeTransf);
  const client = useAppSelector((state: { client: { data: any; }; }) => state.client.data);
  const transfert = useAppSelector((state: { transfert: { data: any; }; }) => state.transfert.data);

  const handleClick = () => {
    const pdf = new jsPDF();
    const drawCell = (text: string, x: number, y: number, width: number, height: number) => {
      pdf.text(text, x + 2, y + height / 2, { align: 'left', baseline: 'middle' });
    };


    const topMargin = 10;
    const titleX = 70;  
    const titleY = topMargin + 5;   
    const titleText = 'Reçu de réception';
    pdf.setFontSize(16); 
    pdf.text(titleText, titleX, titleY);

    let tableX = 10;
    let tableY = titleY + 15;

    // Largeur et hauteur des cellules
    const cellWidth = 120;
    const cellHeight = 8;

    const cellWidth1 = 80;

    // Espacement entre les cellules réduit
    const cellSpacing = 5;

    // Attributs à afficher dans le tableau
    const attributes = ['Nom complet du bénéficiaire:', 'Type de transfert:', 'Montant du transfert:'];
    const values = [`${client.firstName} ${client.lastName}`, `${typeTransf}`, `${transfert.amount}  DH`]

    for (let j = 0; j < attributes.length; j++) {
      drawCell(attributes[j], tableX, tableY, cellWidth, cellHeight);
      drawCell(values[j], tableX + cellWidth + cellSpacing, tableY, cellWidth, cellHeight);
      tableY += cellHeight + cellSpacing;
    }



    // Position pour les cadres de signature
    const signatureX = 10;
    const signatureY = tableY + 2 * (cellHeight + cellSpacing) + 20;

    // Dessiner les cadres de signature
    pdf.text('Signature du Client', signatureX + cellWidth1 / 2, signatureY + cellHeight / 2, {
      align: 'center',
      baseline: 'middle',
    });

    pdf.text('Signature de l\'Agent', signatureX + 1.5 * cellWidth1 + cellSpacing, signatureY + cellHeight / 2, {
      align: 'center',
      baseline: 'middle',
    });

    // Sauvegarder ou ouvrir le PDF
    pdf.save('transaction_summary.pdf');

    navigate('/home');
  };

  const handleBack = () => {
    navigate('/KYCTransf');
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
          <div className='cercleStyle '>3</div>
          <div className='ligneStyle' />
          <div className='cercleStyle select'>4</div>
        </div>
        <text className='title'>Validation</text>
        <div>
        </div>
        <div>
          <div className='contShow'>
            nom complete du bénéficiaire
            <span> {client.firstName} {client.LastName} </span>
          </div>
          <div className='contShow'>
            mode de servir
            <span> {typeTransf} </span>
          </div>
          <div className='contShow'>
            montant de transfert
            <span> {transfert.amount} </span>
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
