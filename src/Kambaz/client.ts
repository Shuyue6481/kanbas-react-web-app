import axios from "axios";

export const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api`;

export const fetchEnrollments = async () => {
  const response = await axios.get(`${ENROLLMENTS_API}/enrollments`);
  return response.data;
};

export const enrollCourseAPI = async (enrollment: any) => {
  const response = await axios.post(`${ENROLLMENTS_API}/enroll`, enrollment);
  return response.data;
};

export const unenrollCourseAPI = async (enrollmentId: string) => {
  const response = await axios.delete(`${ENROLLMENTS_API}/unenroll/${enrollmentId}`);
  return response.data;
};
