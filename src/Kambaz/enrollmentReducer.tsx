import { createSlice } from "@reduxjs/toolkit";
// import { enrollments } from "./Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  enrollments: [] as any[],
};

const enrollmentSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    setEnrollments: (state, { payload }) => {
      state.enrollments = payload;
    },
    enrollCourse: (state, { payload: enrollment }) => {
      console.log("Enrolling course:", enrollment); 
      const exists = state.enrollments.find(
        (e: any) => e.user === enrollment.user && e.course === enrollment.course
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
      console.log("Unenrolling course:", enrollmentId);
      state.enrollments = state.enrollments.filter(
        (e: any) => e._id !== enrollmentId
      );
    },
    updateEnrollment: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.map((e: any) =>
        e._id === enrollment._id ? enrollment : e
      );
    },
  },
});

export const { setEnrollments, enrollCourse, unenrollCourse, updateEnrollment } =
  enrollmentSlice.actions;
export default enrollmentSlice.reducer;
