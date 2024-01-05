import React from 'react';

import  HomeAgent  from './agent/pages1/HomeAgent'
import EffectuerTN from './agent/pages1/EffectuerTN';
import ShowKYC from './agent/pages1/ShowKYC';
import AddAmount from './agent/pages1/AddAmount';
import Notif from './agent/pages1/Notif_frais';
import FindRec from './agent/pages1/FindRec';
import ValideTransfert from './agent/pages1/valideTransfert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TransfAccess from './agent/page2/Transfert_Access';
import ShowInfo from './agent/page2/ShowInfo';
import AccessPay from './agent/page2/AccessPayment';
import AddKYC from './agent/pages1/AddKYC';
import MAJKYC from './agent/pages1/MAJKYC';
import Login from './agent/pages1/Login';
import ClientManagement from './agent/pages1/clientManagement';
import KYCTransf from './agent/page2/KYCTransf';
import { Provider } from 'react-redux';
import { store , persistor} from './agent/store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import CreateWallet from './agent/page2/CreateWallet';
import ValidateRecip from './agent/page2/validateRecip';

function App() {
  return (
    <Provider  store={store}> 
       <PersistGate loading={null} persistor={persistor}>
      <Router>
        <div>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/home" element={<HomeAgent  />} />
        <Route path="/EffectuerTN" element={<EffectuerTN />} />
        <Route path="/ShowKYC" element={<ShowKYC />} />
        <Route path="/AddKYC" element={<AddKYC />} />
        <Route path="/MAJKYC" element={<MAJKYC />} />
        <Route path="/AddAmount" element={<AddAmount />} />
        <Route path="/Notif" element={<Notif />} />
        <Route path="/FindRec" element={<FindRec />} />
        <Route path="/ValideTransfert" element={<ValideTransfert />} />
        <Route path="/TransfAccess" element={<TransfAccess />} />
        <Route path="/ShowInfo" element={<ShowInfo/>} />
        <Route path="/AccessPay" element={<AccessPay/>} />
        <Route path="/clientManagement" element={<ClientManagement/>} />
        <Route path="/KYCTransf" element={<KYCTransf/>} />
        <Route path="/CreateWallet" element={<CreateWallet />} />
        <Route path="/validateRecip" element={<ValidateRecip />} />
      </Routes>
      </div>
    </Router>
    </PersistGate>
    </Provider>   
  );
}

export default App;
