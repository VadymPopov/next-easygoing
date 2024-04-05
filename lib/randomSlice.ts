import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RandomState {
  randomIdx: null | number;
  randomNumber: null | number;
}

const initialState: RandomState = {
  randomIdx: null,
  randomNumber: null,
};

const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    addNumber(state, action: PayloadAction<number>) {
      state.randomNumber = action.payload;
    },
    deleteNumber(state, action: PayloadAction) {
      state.randomNumber = null;
    },
    addIdx(state, action: PayloadAction<number>) {
      state.randomIdx = action.payload;
    },
    deleteIdx(state, action: PayloadAction) {
      state.randomIdx = null;
    },
  },
});

export const { addNumber, deleteNumber, addIdx, deleteIdx } =
  randomSlice.actions;
export const randomReducer = randomSlice.reducer;
