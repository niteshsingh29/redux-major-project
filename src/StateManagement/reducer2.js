import { createSlice } from "@reduxjs/toolkit";
import { StudentsMarksList } from "../Studentsdata";

export const studentMarksSlice = createSlice({
  name: "StudentList",
  initialState: {
    value: StudentsMarksList,
  },
  reducers: {
    addStudentMarks: (state, action) => {
      console.log(action);
      state.value.push(action.payload);
    },
  },
});
export const { addStudentMarks } = studentMarksSlice.actions;
export default studentMarksSlice.reducer;
