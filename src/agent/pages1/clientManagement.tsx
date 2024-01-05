import React , {useState , useEffect} from 'react'
import Navbar from '../components/Navbar'
import '../styles/EffectuerTN.css'
import '../styles/clientManagement.css'
import axios from 'axios';
import Client from '../Models/Client';

function ClientManagement() {
    const [searchTerm, setSearchTerm] = useState("");
    const [clients , setClients] = useState<Client[]>([]) ;
    const apiUrl = process.env.REACT_APP_API_URL;

    useEffect(() => {
        const fetchBeneficiaires = async () => {
          try {
            const response = await axios.get(`${apiUrl}/client`);
            const filteredClient = response.data.filter(
              (rec :Client) =>
                rec.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                rec.lastName.toLowerCase().includes(searchTerm.toLowerCase()) 
            );
            setClients(filteredClient);
          } catch (error) {
            console.error(error);
          }
        };
        fetchBeneficiaires();
      }, [searchTerm]);
  return (
    <div>
      <Navbar/> 
      <div className='containerHome'>
      <text>Liste des clients</text>
      <div className='containerForm'>
      <input type='text' className='inputStyleSearch' placeholder="Recherche ...."  value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      </div>
      <div>
      <table className='agents-table'>
            <thead>
          <tr>
            
            <th>Nom </th>
            <th>Prénom </th>
            <th>Email</th>
            <th>GSM</th>
            <th>Type de pièce d'identité</th>            
            <th>N° pièce d'identité</th>
            <th>Date de naissance</th>
            <th>Pays de nationalité</th>
            <th>Adresse légale</th>
            <th>Profession</th>
            <th>titre</th>
            
          </tr>
        </thead>
              <tbody>
              {clients.map((a , index)=>(
                  <tr key={index}>
                    <td>{a.lastName}</td>
                    <td>{a.firstName}</td>
                    <td>{a.email}</td>
                    <td>{a.gsm}</td>
                    <td>{a.idType}</td>
                    <td>{a.idNumber}</td>
                    <td>{a.dob}</td>
                    <td>{a.nationality}</td>
                    <td>{a.address}</td>
                    <td>{a.profession}</td>
                    <td>{a.title}</td>
                  </tr>
                ))
                  
                }
              </tbody>
            </table>
     
      </div>
      </div>
    </div>
  )
}

export default ClientManagement
