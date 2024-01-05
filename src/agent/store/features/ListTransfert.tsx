
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Recipient from "../../Models/Recipient";
import ListTransfert from "../../Models/ListTransfert";

interface listTransfertState {
    listTransfert: ListTransfert[];
}

const initialState: listTransfertState = {
    listTransfert: [],
};

export const listTransfertSlice = createSlice({
  name: 'listTransfert',
  initialState,
  reducers: {
    addListTransfert: (state, action: PayloadAction<ListTransfert>) => {
        state.listTransfert = [...state.listTransfert, action.payload];
    },
    clearListTransfert: (state) => {
      state.listTransfert = [];
    },
  },
});

export const { addListTransfert, clearListTransfert } = listTransfertSlice.actions;
export default listTransfertSlice.reducer;
