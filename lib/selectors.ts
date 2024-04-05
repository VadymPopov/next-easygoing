import { RootState } from "./store";
export const getOptions = (state: RootState) => state.options;
export const getRandomIdx = (state: RootState) => state.random.randomIdx;
export const getRandomNumber = (state: RootState) => state.random.randomNumber;
