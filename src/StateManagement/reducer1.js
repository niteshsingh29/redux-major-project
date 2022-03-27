import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../Studentsdata";

export const studentSlice = createSlice({
  name: "students",
  initialState: {
    value: UserData,
  },
  reducers: {
    addStudent: (state, action) => {
      console.log(action)
      state.value.push(action.payload)
    },
  },
},

);
export const { addStudent } = studentSlice.actions;
export default studentSlice.reducer;
