import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Recipient from "../../Models/Recipient";

interface listRecipState {
   listRecip: Recipient[];
}

const initialState: listRecipState = {
    listRecip: [],
};

export const listRecipSlice = createSlice({
  name: 'listRecip',
  initialState,
  reducers: {
    addRecipient: (state, action: PayloadAction<Recipient>) => {
        state.listRecip = [...state.listRecip, action.payload];
    },
    removeRecipient: (state, action: PayloadAction<string>) => {
      state.listRecip = state.listRecip.filter(recipient => recipient.id !== action.payload);
    },
    clearId: (state) => {
      state.listRecip = [];
    },
  },
});

export const { addRecipient, removeRecipient, clearId } = listRecipSlice.actions;
export default listRecipSlice.reducer;
