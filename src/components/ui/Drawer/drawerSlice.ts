import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'drawer',
  initialState: { open: false },
  reducers: {
    toggle: (state: { open: boolean; }) => {
    state.open = !state.open;
    },
    close: (state: { open: boolean; }) => {
      state.open = false;
    },
    open: (state: { open: boolean; }) => {
      state.open = true;
    },
  },
});

export const { toggle, close, open } = slice.actions;

export default slice.reducer;
