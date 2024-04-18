import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface RandomState {
  randomIdx: null | number;
  randomNumber: null | number;
  isDisabled: boolean;
}

const initialState: RandomState = {
  randomIdx: null,
  randomNumber: null,
  isDisabled: false,
};

const randomSlice = createSlice({
  name: "random",
  initialState,
  reducers: {
    addNumber(state, action: PayloadAction<number>) {
      state.randomNumber = action.payload;
    },
    deleteNumber(state) {
      state.randomNumber = null;
    },
    addIdx(state, action: PayloadAction<number>) {
      state.randomIdx = action.payload;
    },
    deleteIdx(state) {
      state.randomIdx = null;
    },
    toggleIsDisabled(state, action: PayloadAction<boolean>) {
      state.isDisabled = action.payload;
    },
  },
});

export const { addNumber, deleteNumber, addIdx, deleteIdx, toggleIsDisabled } =
  randomSlice.actions;
export const randomReducer = randomSlice.reducer;
