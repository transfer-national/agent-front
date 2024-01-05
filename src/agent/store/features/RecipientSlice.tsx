import { createSlice  , PayloadAction} from "@reduxjs/toolkit";
import Recipient from "../../Models/Recipient";


interface RecipientState {
    data: Recipient | null;
  }
  
  const initialState: RecipientState = {
    data: null,
  };

export const recipientSlice = createSlice({
  name: 'recipient',
  initialState,
  reducers: {
    setRecipient: (state, action: PayloadAction<Recipient>) => {
      state.data= action.payload;
    },
    clearRecipient: (state) => {
        state.data = null;
      },
  },
});

export const { setRecipient, clearRecipient } = recipientSlice.actions;
export default recipientSlice.reducer;