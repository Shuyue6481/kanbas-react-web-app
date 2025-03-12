
import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "./Database";
import { v4 as uuidv4 } from "uuid";



const initialState= {
  enrollments: enrollments,
};

const enrollmentSlice = createSlice({
    name: "enrollment",
    initialState,
    reducers: {
      enrollCourse: (state, { payload: enrollment }) => {
        const exists = state.enrollments.find(
          (e: any) =>
            e.user === enrollment.user && e.course === enrollment.course
        );
        if (!exists) {
          const newEnrollment: any = {
            _id: uuidv4(),
            user: enrollment.user,
            course: enrollment.course,
          };
          state.enrollments = [...state.enrollments, newEnrollment];
        }
      },


      unenrollCourse: (state, { payload: enrollmentId }) => {
        state.enrollments = state.enrollments.filter(
          (e: any) => e._id !== enrollmentId);
      },
      updateEnrollment: (state, { payload: enrollment }) => {
        state.enrollments = state.enrollments.map((e: any) =>
          e._id === enrollment._id ? enrollment : e
        );
      },
    },
  });
  
  export const { enrollCourse, unenrollCourse, updateEnrollment } =
    enrollmentSlice.actions;
  export default enrollmentSlice.reducer;