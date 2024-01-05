import React from 'react'
import Navbar from '../components/Navbar'
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { FiSearch } from "react-icons/fi";
import '../styles/HomeAgent.css'
import { Link } from 'react-router-dom';
import { useAppSelector } from '../store/Store'

function HomeAgent() {
    const apiUrl = process.env.REACT_APP_API_URL;
    const user = useAppSelector((state: { login: { data: any; }; })=> state.login.data);
    console.log(user)

    return (
        <div>
            <Navbar/>
            <div className='containerHome'>
                <div className='header'>
                    <p><span>Solde :</span> {user.agent.balance} DH</p>
                    <p>Limite de transfert : {user.agent.threshold} Dh</p>
                </div>
                <div className='containerBoite'>
                <Link to="/EffectuerTN" className='li'>
                    <div className='boite1'>
                        <FaMoneyBillTransfer size={70} />
                        <text>Effectuer un transfert</text>
                    </div>
                    </Link>
                    <Link to="/TransfAccess" className='li'>
                    <div className='boite1 boite2'>
                        <FiSearch size={70} />
                        <text>consultation un TN</text>
                    </div>
                    </Link>
                    <Link to="/EffectuerTN" className='li'>
                    <div className='boite1 boite3'>
                        <CiUser size={70} />
                        <text>gestions des clients</text>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomeAgent
