import {createSlice} from '@reduxjs/toolkit';
import {ICounter} from '../types';

const initialState: ICounter = {
  count: 0,
};

export const counterSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementByAmount(state, action) {
      state.count += action.payload;
    },
    decrementByAmount(state, action) {
      state.count -= action.payload;
    },
  },
});

export const {increment, decrement, incrementByAmount, decrementByAmount} =
  counterSlice.actions;
export default counterSlice.reducer;
