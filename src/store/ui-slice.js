import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false, notification: null },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },

    showNotification(state, action) {
      const payload = action.payload;
      state.notification = {
        status: payload.status,
        title: payload.title,
        message: payload.message,
      };
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
