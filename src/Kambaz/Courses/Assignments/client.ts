import axios from "axios";

export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
const axiosWithCredentials = axios.create({ withCredentials: true });

// export const createAssignment = async (assignment: any) => {
//   const response = await axios.post(`${ASSIGNMENTS_API}/assignments`, assignment);
//   return response.data;
// };
import { format, parseISO } from "date-fns";

function normalizeDateField(value: string | Date) {
  if (!value) return "";
  const date = typeof value === "string" ? parseISO(value) : value;
  return format(date, "yyyy-MM-dd'T'HH:mm");
}

export const updateAssignment = async (assignment: any) => {
  const payload = {
    ...assignment,
    dueDate: normalizeDateField(assignment.dueDate),
    availableFromDate: normalizeDateField(assignment.availableFromDate),
    availableUntilDate: normalizeDateField(assignment.availableUntilDate),
  };
  const response = await axiosWithCredentials.put(
    `${ASSIGNMENTS_API}/${payload._id}`,
    payload
  );
  //   const response = await axiosWithCredentials.put(
  //     `${ASSIGNMENTS_API}/${assignment._id}`,
  //     assignment
  //   );
  return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
  const response = await axiosWithCredentials.delete(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  return response.data;
};

export const getAssignmentById = async (assignmentId: string) => {
  const response = await axiosWithCredentials.get(
    `${ASSIGNMENTS_API}/${assignmentId}`
  );
  return response.data;
};
