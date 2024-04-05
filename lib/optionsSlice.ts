import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

interface Option {
  id: string;
  text: string;
}

interface OptionsState extends Array<Option> {}

interface AddOptionAction {
  type: string;
  payload: Option;
}

interface DeleteOptionAction {
  type: string;
  payload: string;
}

const initialState: OptionsState = [];

const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    addOption: {
      reducer(state, action: PayloadAction<Option>) {
        state.push(action.payload);
      },
      prepare(text: string) {
        return {
          payload: {
            text,
            id: nanoid(),
          },
        };
      },
    },
    deleteOption(state, action: PayloadAction<string>) {
      const index = state.findIndex((option) => option.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addOption, deleteOption } = optionsSlice.actions;
export const optionsReducer = optionsSlice.reducer;
