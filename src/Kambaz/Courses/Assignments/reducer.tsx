// import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
// import { v4 as uuidv4 } from "uuid";
// const initialState = {
//     assignments: assignments,
// };
// const assignmentsSlice = createSlice({
//   name: "assignments",
//   initialState,
//   reducers: {
//     addAssignment: (state, { payload: assignment }) => {
//       const newAssignment: any = {
//         _id: uuidv4(),
//         title: assignment.title,
//         course: assignment.course,
//       };
//       state.assignments = [...state.assignments, newAssignment] as any;
//     },
//     deleteAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.filter(
//         (a: any) => a._id !== assignmentId);
//     },
//     updateAssignment: (state, { payload: assignment }) => {
//       state.assignments = state.assignments.map((a: any) =>
//         a._id === assignment._id ? assignment : a
//       ) as any;
//     },
//     editAssignment: (state, { payload: assignmentId }) => {
//       state.assignments = state.assignments.map((a: any) =>
//         a._id === assignmentId ? { ...a, editing: true } : a
//       ) as any;
//     },
//   },
// });
// export const { addAssignment, deleteAssignment, updateAssignment, editAssignment } =
// assignmentsSlice.actions;
// export default assignmentsSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: assignments,
  assignment: {
    title: "New Assignment",
    description: "New Assignment Description",
    points: 100,
    dueDate: "",
    availableFromDate: "",
    availableUntilDate: "",
  },
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // addAssignment: (state, action) => {
    //   state.assignments = [
    //     ...state.assignments,
    //     { ...action.payload, _id: uuidv4() },
    //   ];
    // },
    // addAssignment: (state, { payload: assignment }) => {
    //   const newAssignment: any = {
    //     _id: uuidv4(),
    //     title: assignment.title,
    //     description: assignment.description,
    //     points: assignment.point,
    //     dueDate: assignment.dueDate,
    //     availableFromDate: assignment.availableFromDate,
    //     availableUntilDate: assignment.availableUntilDate,
    //   };
    //   state.assignments = [...state.assignments, newAssignment];
    // },
    addAssignment: (state, { payload }) => {
        state.assignments = [
          ...state.assignments,
          { ...payload, _id: uuidv4() },
        ];
      },


    // deleteAssignment: (state, action) => {
    //   state.assignments = state.assignments.filter(
    //     (assignment) => assignment._id !== action.payload
    //   );
    // },
    // updateAssignment: (state, action) => {
    //   state.assignments = state.assignments.map((assignment) => {
    //     if (assignment._id === action.payload._id) {
    //       return action.payload;
    //     } else {
    //       return assignment;
    //     }
    //   });
    // },
    // editAssignment: (state, action) => {
    //   state.assignment = action.payload;
    // },


    deleteAssignment: (state, { payload: assignmentId }) => {
        state.assignments = state.assignments.filter(
          (assignment) => assignment._id !== assignmentId
        );
      },
      updateAssignment: (state, { payload: assignment }) => {
        state.assignments = state.assignments.map((item) =>
          item._id === assignment._id ? assignment : item
        );
      },
      editAssignment: (state, { payload: assignment }) => {
        state.assignment = assignment;
      },
  },
});

export const {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  editAssignment,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
