import { createSlice } from "@reduxjs/toolkit";
// import { assignments } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  assignments: [] as any[],
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
    setAssignments: (state, action) => {
      state.assignments = action.payload;
    },

    addAssignment: (state, { payload }) => {
      state.assignments = [...state.assignments, { ...payload, _id: uuidv4() }];
      // state.assignments = [...state.assignments, payload];
    },

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
  setAssignments,
} = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
