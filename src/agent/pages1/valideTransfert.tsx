import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import '../styles/valideTransfert.css'
import { useAppDispatch, useAppSelector } from '../store/Store';
import Recipient from '../Models/Recipient'
import ListTransfert from '../Models/ListTransfert'
import { addListTransfert,clearListTransfert } from '../store/features/ListTransfert';

function ValideTransfert() {
  const listRecip = useAppSelector((state) => state.listRecip.listRecip);
  const dispatch = useAppDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;
  const client = useAppSelector((state: { client: { data: any; }; })=> state.client.data);
  const listTransfert  = useAppSelector((state) => state.listTransfert.listTransfert); 
  const typeTransf = useAppSelector((state) => state.typeTransf.typeTransf);
  const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
    console.log(user);
    const headers = {
      'Authorization': user.token, 
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
        {Array.isArray(listRecip) && listRecip.map((rec: Recipient) => (
          <div>
        <text className='title'>la finalisation </text>
        <div className='elem'>
            <div className='sousElem'>
                <text>Nom complète du bébéficiaire</text>
                <text>m:l;k,jhg</text>
            </div>
            <div className='sousElem'>
                <text>ID du DO</text>
                <text>:m;l,kjbh</text>
            </div>
            <div className='sousElem'>
                <text>Montant de transfert</text>
                <text>!ùmlkj</text>
            </div>
            <div className='sousElem'>
                <text>Frais de transfert</text>
                <text>mlkjbh</text>
            </div>
            <div className='sousElem'>
                <text>Frais de notification</text>
                <text>lkjhbg</text>
            </div>
            <div className='sousElem'>
                <text>Montant total de l'opération</text>
                <text>lmkjhg</text>
            </div>
        </div>
        </div>
        ))}
      <div className='containerButton'>
        <div className='button retour'>
            <label>Retour</label>
        </div>
        <div className='button'>
            <label>Valider</label>
        </div>
      </div>
      </div>
    </div>
  )
}

export default ValideTransfert
