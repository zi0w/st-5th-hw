import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  text: JSON.parse(localStorage.getItem("texts")) ?? [],
};

export const textSlice = createSlice({
  name: "text",
  initialState,
  reducers: {
    addText: (state, action) => {
      const newText = action.payload;
      state.text.push(newText);
      localStorage.setItem("texts", JSON.stringify(state.text));
    },
  },
});

export const { addText } = textSlice.actions;

export default textSlice.reducer;
