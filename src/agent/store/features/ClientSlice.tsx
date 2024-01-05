import { createSlice  , PayloadAction} from "@reduxjs/toolkit";
import Client from '../../Models/Client'


interface ClientState {
    data: Client | null;
  }
  
  const initialState: ClientState = {
    data: null,
  };

export const clientSlice = createSlice({
  name: 'client',
  initialState,
  reducers: {
    setClient: (state, action: PayloadAction<Client>) => {
      state.data= action.payload;
    },
    clearClient: (state) => {
        state.data = null;
      },
  },
});

export const { setClient, clearClient } = clientSlice.actions;
export default clientSlice.reducer;