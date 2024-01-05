import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TypeTransfState {
  typeTransf: string | null;
}

const initialState: TypeTransfState = {
    typeTransf: null,
};

export const typeTransfSlice = createSlice({
  name: 'typeTransf',
  initialState,
  reducers: {
    setTypeTransf: (state, action: PayloadAction<string>) => {
      state.typeTransf= action.payload;
    },
    clearTypeTransf: (state) => {
      state.typeTransf = null;
    },
  },
});

export const { setTypeTransf, clearTypeTransf} = typeTransfSlice.actions;
export default typeTransfSlice.reducer;
