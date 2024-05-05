import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
  name: "data",
  initialState: [],
  reducers: {
    setData: (state, action) => {
      console.log(action.payload);
      return action.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;
