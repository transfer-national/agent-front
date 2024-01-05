import { configureStore } from "@reduxjs/toolkit";
import agentReducer from './features/AgentSlice'
import transfertReducer from './features/Transfert'
import loginReducer from "./features/LoginSlice"
import clientReducer from './features/ClientSlice'
import recipientReducer from "./features/RecipientSlice"
import typeTransfReducer from "./features/TypeSlice"
import ListRecipReducer  from "./features/ListRecip"
import ListTransfertReducer from "./features/ListTransfert"
import { TypedUseSelectorHook, useSelector , useDispatch} from "react-redux";
import { persistReducer , persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 


const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, loginReducer);
const persistedClient = persistReducer(persistConfig, clientReducer);
const persistedTransfert = persistReducer(persistConfig, transfertReducer);
const persistedRecipient = persistReducer(persistConfig, recipientReducer);
const persistedAgent = persistReducer(persistConfig, agentReducer);
const persistedTypeTransf = persistReducer(persistConfig, typeTransfReducer);
const persistedListRecip = persistReducer(persistConfig, ListRecipReducer);
const persistedListTransfert = persistReducer(persistConfig, ListTransfertReducer);

export const store= configureStore({
    reducer:{
      agent: persistedAgent,
      transfert: persistedTransfert,
      login:  persistedReducer,
      client: persistedClient,
      recipient: persistedRecipient,
      typeTransf : persistedTypeTransf,
      listRecip : persistedListRecip,
      listTransfert: persistedListTransfert
    }
  })


export const useAppDispatch :()=> typeof store.dispatch = useDispatch ;
export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> =useSelector ;


export const persistor = persistStore(store);