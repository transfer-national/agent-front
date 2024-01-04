import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import '../styles/valideTransfert.css'

function ValideTransfert() {
   
 
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
