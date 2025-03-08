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
		addAssignment: (state, action) => {
			state.assignments = [
				{ ...action.payload, _id:uuidv4()},
				...state.assignments,
			];
		},
        deleteAssignment: (state, action) => {
            state.assignments = state.assignments.filter(
                (assignment) => assignment._id !== action.payload
            );
        },
        updateAssignment: (state, action) => {
            state.assignments = state.assignments.map((assignment) => {
                if (assignment._id === action.payload._id) {
                    return action.payload;
                }
                else {
                    return assignment;
                }
            }) 
        },
        selectAssignment: (state, action) => {
            state.assignment = action.payload;
        }
	},
});

export const { addAssignment, deleteAssignment, updateAssignment, selectAssignment } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;