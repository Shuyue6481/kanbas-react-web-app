// import { Button, Card, Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// // import * as db from "./Database";
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setEnrollments,
//   enrollCourse,
//   unenrollCourse,
// } from "./enrollmentReducer";
// import { enrollCourseAPI, unenrollCourseAPI, fetchEnrollments } from "./client";
// import * as userClient from "./Account/client";
// import * as courseClient from "./Courses/client";

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (course: any) => void;
//   updateCourse: () => void;
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);
//   const dispatch = useDispatch();
//   const [showAllCourses, setShowAllCourses] = useState(false);

//   const fetchEnrollmentsData = async () => {
//     try {
//       const data = await fetchEnrollments();
//       dispatch({ type: "SET_ENROLLMENTS", payload: data });
//     } catch (error) {
//       console.error("Failed to fetch enrollments:", error);
//     }
//   };
//   useEffect(() => {
//     fetchEnrollmentsData();
//   }, []);
//   const [allCourses, setAllCourses] = useState<any[]>([]);
//   const fetchAllCoursesData = async () => {
//     try {
//       const data = await courseClient.fetchAllCourses();
//       setAllCourses(data);
//     } catch (error) {
//       console.error("Failed to fetch all courses:", error);
//     }
//   };
//   useEffect(() => {
//     fetchAllCoursesData(); // 组件加载时获取所有课程
//   }, []);

//   const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);
//   const fetchEnrolledCourses = async () => {
//     try {
//       const data = await userClient.findMyCourses();
//       setEnrolledCourses(data);
//     } catch (error) {
//       console.error("Failed to fetch enrolled courses:", error);
//     }
//   };
//   useEffect(() => {
//     fetchEnrolledCourses();
//   }, []);

//   // const displayedCourses =
//   //   currentUser && currentUser.role === "STUDENT"
//   //     ? showAllCourses
//   //       ? allCourses
//   //       : enrolledCourses
//   //     : allCourses;

//   const displayedCourses =
//     currentUser && currentUser.role === "STUDENT"
//       ? showAllCourses
//         ? allCourses
//         : enrolledCourses
//       : enrolledCourses;

//   const enrollments = useSelector(
//     (state: any) => state.enrollmentReducer.enrollments
//   );
//   const handleEnroll = async (courseId: string) => {
//     try {
//       const newEnrollment = await enrollCourseAPI({
//         user: currentUser._id,
//         course: courseId,
//       });
//       // dispatch(enrollCourse(newEnrollment)); // 更新 Redux 状态
//       // setEnrolledCourses([...enrolledCourses, courseId]); // 更新本地状态
//       await fetchEnrolledCourses();
//     } catch (error) {
//       console.error("Failed to enroll:", error);
//     }
//   };

//   const handleUnenroll = async (course: any) => {
//     try {
//       // await unenrollCourseAPI(enrollmentId);
//       // dispatch(unenrollCourse(enrollmentId)); // 更新 Redux 状态
//       // setEnrolledCourses(enrolledCourses.filter((id) => id !== enrollmentId)); // 更新本地状态
//       const foundEnrollment = enrollments.find(
//         (e: any) => e.user === currentUser._id && e.course === course._id
//       );
//       await unenrollCourseAPI(foundEnrollment._id);
//       await fetchEnrolledCourses();
//     } catch (error) {
//       console.error("Failed to unenroll:", error);
//     }
//   };
//   // const enrollments = useSelector(
//   //   (state: any) => state.enrollmentReducer.enrollments
//   // );
//   // const handleUnenroll = async (course: any) => {
//   //   try {
//   //     // 根据 Redux 中的 enrollments 查找对应的 enrollment 对象以获取 enrollment _id
//   //     const enrollment = enrollments.find(
//   //       (e: any) => e.user === currentUser._id && e.course === course._id
//   //     );
//   //     if (enrollment) {
//   //       await unenrollCourseAPI(enrollment._id);
//   //       dispatch(unenrollCourse(enrollment._id)); // 更新 Redux 状态
//   //       // 过滤掉该 course 对象
//   //       setEnrolledCourses(enrolledCourses.filter((c: any) => c._id !== course._id));
//   //     }
//   //   } catch (error) {
//   //     console.error("Failed to unenroll:", error);
//   //   }
//   // };

//   return (
//     <div id="wd-dashboard">
//       {currentUser && currentUser.role === "STUDENT" && (
//         <Button
//           variant="primary"
//           size="lg"
//           className="me-1 float-end"
//           id="wd-enrollment"
//           onClick={() => setShowAllCourses(!showAllCourses)}
//         >
//           Enrollments
//         </Button>
//       )}
//       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
//       {currentUser &&
//         (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (
//           <div>
//             <h5>
//               New Course
//               <button
//                 className="btn btn-primary float-end"
//                 id="wd-add-new-course-click"
//                 onClick={addNewCourse}
//               >
//                 {" "}
//                 Add{" "}
//               </button>
//               <button
//                 className="btn btn-warning float-end me-2"
//                 onClick={updateCourse}
//                 id="wd-update-course-click"
//               >
//                 Update
//               </button>
//               <br />
//               <input
//                 value={course.name}
//                 className="form-control mb-2"
//                 onChange={(e) => setCourse({ ...course, name: e.target.value })}
//               />
//               <textarea
//                 value={course.description}
//                 className="form-control"
//                 onChange={(e) =>
//                   setCourse({ ...course, description: e.target.value })
//                 }
//               />
//             </h5>
//             <hr />
//           </div>
//         )}
//       <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
//       <hr />
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           {displayedCourses.map((course: any) => {
//             // const isEnrolled = enrollments.some(
//             //   (e: any) =>
//             //     e.userId === currentUser._id && e.courseId === course._id
//             // );
//             const isEnrolled = enrolledCourses.some(
//               (c: any) => c._id === course._id
//             );
//             return (
//               <Col
//                 key={course._id}
//                 className="wd-dashboard-course"
//                 style={{ width: "300px" }}
//               >
//                 <Card>
//                   <Link
//                     to={`/Kambaz/Courses/${course._id}/Home`}
//                     className="wd-dashboard-course-link text-decoration-none text-dark"
//                   >
//                     <Card.Img
//                       src={`/images/${course.src}`}
//                       variant="top"
//                       width="100%"
//                       height={160}
//                       onError={(e) => {
//                         e.currentTarget.src = "/images/default.jpg";
//                       }}
//                     />
//                     <Card.Body className="card-body">
//                       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                         {course.name}
//                       </Card.Title>
//                       <Card.Text
//                         className="wd-dashboard-course-description overflow-hidden"
//                         style={{ height: "100px" }}
//                       >
//                         {course.description}
//                       </Card.Text>
//                       <Button variant="primary">Go</Button>
//                       {currentUser && currentUser.role === "STUDENT" && (
//                         <>
//                           {isEnrolled ? (
//                             <Button
//                               variant="danger"
//                               className="float-end"
//                               onClick={async (e) => {
//                                 e.preventDefault();
//                                 e.stopPropagation();
//                                 await handleUnenroll(course);
//                               }}
//                             >
//                               Unenroll
//                             </Button>
//                           ) : (
//                             <Button
//                               variant="success"
//                               className="float-end"
//                               onClick={async (e) => {
//                                 e.preventDefault();
//                                 e.stopPropagation();
//                                 await handleEnroll(course._id);
//                               }}
//                             >
//                               Enroll
//                             </Button>
//                           )}
//                         </>
//                       )}
//                       {currentUser &&
//                         (currentUser.role === "ADMIN" ||
//                           currentUser.role === "FACULTY") && (
//                           <>
//                             <button
//                               onClick={(event) => {
//                                 event.preventDefault();
//                                 deleteCourse(course._id);
//                               }}
//                               className="btn btn-danger float-end"
//                               id="wd-delete-course-click"
//                             >
//                               Delete
//                             </button>
//                             <button
//                               id="wd-edit-course-click"
//                               onClick={(event) => {
//                                 event.preventDefault();
//                                 setCourse(course);
//                               }}
//                               className="btn btn-warning me-2 float-end"
//                             >
//                               Edit
//                             </button>
//                           </>
//                         )}
//                     </Card.Body>
//                   </Link>
//                 </Card>
//               </Col>
//             );
//           })}
//         </Row>
//       </div>
//     </div>
//   );
// }

// import { Button, Card, Col, Row } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import * as userClient from "./Account/client";
// import * as courseClient from "./Courses/client";
// import { enrollCourseAPI, fetchEnrollments, unenrollCourseAPI } from "./client";
// import { useDispatch, useSelector } from "react-redux";
// import { setEnrollments } from "./enrollmentReducer";

// export default function Dashboard({
//   courses,
//   course,
//   setCourse,
//   addNewCourse,
//   deleteCourse,
//   updateCourse,
//   enrolling,
//   setEnrolling,
//   updateEnrollment,
// }: {
//   courses: any[];
//   course: any;
//   setCourse: (course: any) => void;
//   addNewCourse: () => void;
//   deleteCourse: (course: any) => void;
//   updateCourse: () => void;
//   enrolling: boolean;
//   setEnrolling: (enrolling: boolean) => void;
//   updateEnrollment: (courseId: string, enrolled: boolean) => void;
// }) {
//   const { currentUser } = useSelector((state: any) => state.accountReducer);

//   const [showAllCourses, setShowAllCourses] = useState(false);
//   const [allCourses, setAllCourses] = useState<any[]>([]);

//   const [myCourses, setMyCourses] = useState<any[]>([]);

//   const fetchAllCoursesData = async () => {
//     try {
//       const data = await courseClient.fetchAllCourses();
//       setAllCourses(data);
//     } catch (error) {
//       console.error("Failed to fetch all courses:", error);
//     }
//   };

//   const fetchMyCourses = async () => {
//     if (!currentUser) return;
//     try {
//       const data = await userClient.findMyCourses();
//       setMyCourses(data);
//     } catch (error: any) {
//       console.error("Failed to fetch my courses:", error);
//     }
//   };

//   useEffect(() => {
//     fetchAllCoursesData();
//   }, []);

//   useEffect(() => {
//     if (currentUser) {
//       fetchMyCourses();
//     }
//   }, [currentUser]);

//   const dispatch = useDispatch();
//   const fetchEnrollmentsData = async () => {
//     if (!currentUser) return;
//     console.log("fetchEnrollmentsData called");
//     try {
//       const data = await fetchEnrollments();
//       console.log("Fetched enrollments:", data);
//       dispatch(setEnrollments(data));
//     } catch (error) {
//       console.error("Failed to fetch enrollments:", error);
//     }
//   };
//   useEffect(() => {
//     fetchEnrollmentsData();
//   }, []);

//   // const displayedCourses =
//   //   currentUser && currentUser.role === "STUDENT"
//   //     ? showAllCourses
//   //       ? allCourses
//   //       : myCourses
//   //     : allCourses;
//   const displayedCourses =
//     currentUser && currentUser.role === "STUDENT"
//       ? showAllCourses
//         ? allCourses
//         : myCourses
//       : myCourses;

//   // enroll 操作：调用 enrollCourseAPI 后刷新 myCourses
//   const handleEnroll = async (course: any) => {
//     try {
//       await enrollCourseAPI({
//         user: currentUser._id,
//         course: course._id,
//       });
//       await fetchMyCourses();
//       await fetchEnrollmentsData();
//     } catch (error) {
//       console.error("Failed to enroll:", error);
//     }
//   };

//   // const handleUnenroll = async (course: any) => {
//   //   try {
//   //     if (!course.enrollmentId) {
//   //       console.error("Cannot find enrollment id for course", course._id);
//   //       return;
//   //     }
//   //     await unenrollCourseAPI(course.enrollmentId);
//   //     await fetchMyCourses();
//   //   } catch (error) {
//   //     console.error("Failed to unenroll:", error);
//   //   }
//   // };
//   const enrollments = useSelector(
//     (state: any) => state.enrollmentReducer.enrollments
//   );
//   const handleUnenroll = async (course: any) => {
//     console.log("currentUser:", currentUser._id);
//     console.log("Course:", course._id);
//     console.log("Redux enrollments:", enrollments);
//     try {
//       const foundEnrollment = enrollments.find(
//         (e: any) => e.user === currentUser._id && e.course === course._id
//       );
//       if (!foundEnrollment) {
//         console.error("Cannot find enrollment id for course", course._id);
//         return;
//       }
//       await unenrollCourseAPI(foundEnrollment._id);
//       await fetchMyCourses();
//     } catch (error) {
//       console.error("Failed to unenroll:", error);
//     }
//   };

//   return (
//     <div id="wd-dashboard">
//       {/* {currentUser && currentUser.role === "STUDENT" && (
//         <Button
//           variant="primary"
//           size="lg"
//           className="me-1 float-end"
//           id="wd-enrollment"
//           onClick={() => setShowAllCourses(!showAllCourses)}
//         >
//           Enrollments
//         </Button>
//       )} */}
//       <h1 id="wd-dashboard-title">
//         Dashboard{" "}
//         <button
//           onClick={() => setEnrolling(!enrolling)}
//           className="float-end btn btn-primary"
//         >
//           {enrolling ? "My Courses" : "All Courses"}
//         </button>
//       </h1>
//       <hr />
//       {currentUser &&
//         (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (
//           <div>
//             <h5>
//               New Course
//               <button
//                 className="btn btn-primary float-end"
//                 id="wd-add-new-course-click"
//                 onClick={async () => {
//                   await addNewCourse();
//                   await fetchAllCoursesData();
//                   await fetchEnrollmentsData();
//                   await fetchMyCourses();
//                 }}
//               >
//                 Add
//               </button>
//               <button
//                 className="btn btn-warning float-end me-2"
//                 onClick={async () => {
//                   await updateCourse();

//                   await fetchAllCoursesData();
//                   await fetchEnrollmentsData();
//                   await fetchMyCourses();
//                 }}
//                 id="wd-update-course-click"
//               >
//                 Update
//               </button>
//               <br />
//               <input
//                 value={course.name}
//                 className="form-control mb-2"
//                 onChange={(e) => setCourse({ ...course, name: e.target.value })}
//               />
//               <textarea
//                 value={course.description}
//                 className="form-control"
//                 onChange={(e) =>
//                   setCourse({ ...course, description: e.target.value })
//                 }
//               />
//             </h5>
//             <hr />
//           </div>
//         )}
//       <h2 id="wd-dashboard-published">
//         Published Courses ({allCourses.length})
//       </h2>
//       <hr />
//       <div id="wd-dashboard-courses">
//         <Row xs={1} md={5} className="g-4">
//           {courses.map((course: any) => {
//             const isEnrolled = myCourses.some((c: any) => c._id === course._id);
//             return (
//               <Col
//                 key={course._id}
//                 className="wd-dashboard-course"
//                 style={{ width: "300px" }}
//               >
//                 <Card>
//                   <Link
//                     to={`/Kambaz/Courses/${course._id}/Home`}
//                     className="wd-dashboard-course-link text-decoration-none text-dark"
//                     onClick={(e) => {
//                       if (
//                         currentUser &&
//                         currentUser.role === "STUDENT" &&
//                         !isEnrolled
//                       ) {
//                         e.preventDefault();
//                       }
//                     }}
//                   >
//                     <Card.Img
//                       src={
//                         course.src
//                           ? `/images/${course.src}`
//                           : "/images/default.jpg"
//                       }
//                       variant="top"
//                       width="100%"
//                       height={160}
//                     />
//                     <Card.Body className="card-body">
//                       <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
//                         {course.name}
//                       </Card.Title>
//                       <Card.Text
//                         className="wd-dashboard-course-description overflow-hidden"
//                         style={{ height: "100px" }}
//                       >
//                         {course.description}
//                       </Card.Text>
//                       <Button variant="primary">Go</Button>
//                       {enrolling && (
//                         <button
//                           onClick={(event) => {
//                             event.preventDefault();
//                             updateEnrollment(course._id, !course.enrolled);
//                           }}
//                           className={`btn ${
//                             course.enrolled ? "btn-danger" : "btn-success"
//                           } float-end`}
//                         >
//                           {course.enrolled ? "Unenroll" : "Enroll"}
//                         </button>
//                       )}
//                       {/* {currentUser && currentUser.role === "STUDENT" && (
//                         <>
//                           {isEnrolled ? (
//                             <Button
//                               variant="danger"
//                               className="float-end"
//                               onClick={async (e) => {
//                                 e.preventDefault();
//                                 e.stopPropagation();
//                                 await handleUnenroll(course);
//                               }}
//                             >
//                               Unenroll
//                             </Button>
//                           ) : (
//                             <Button
//                               variant="success"
//                               className="float-end"
//                               onClick={async (e) => {
//                                 e.preventDefault();
//                                 e.stopPropagation();
//                                 await handleEnroll(course);
//                               }}
//                             >
//                               Enroll
//                             </Button>
//                           )}
//                         </>
//                       )} */}
//                       {currentUser &&
//                         (currentUser.role === "ADMIN" ||
//                           currentUser.role === "FACULTY") && (
//                           <>
//                             <button
//                               onClick={async (event) => {
//                                 event.preventDefault();
//                                 event.stopPropagation();
//                                 await deleteCourse(course._id);
//                                 await fetchAllCoursesData();
//                                 await fetchEnrollmentsData();
//                                 await fetchMyCourses();
//                               }}
//                               className="btn btn-danger float-end"
//                               id="wd-delete-course-click"
//                             >
//                               Delete
//                             </button>
//                             <button
//                               id="wd-edit-course-click"
//                               onClick={async (event) => {
//                                 event.preventDefault();
//                                 setCourse(course);
//                                 await fetchAllCoursesData();
//                                 await fetchEnrollmentsData();
//                               }}
//                               className="btn btn-warning me-2 float-end"
//                             >
//                               Edit
//                             </button>
//                           </>
//                         )}
//                     </Card.Body>
//                   </Link>
//                 </Card>
//               </Col>
//             );
//           })}
//         </Row>
//       </div>
//     </div>
//   );
// }

import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  enrolling,
  setEnrolling,
  updateEnrollment,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
  enrolling: boolean;
  setEnrolling: (enrolling: boolean) => void;
  updateEnrollment: (courseId: string, enrolled: boolean) => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">
        Dashboard{" "}
        <button
          onClick={() => setEnrolling(!enrolling)}
          className="float-end btn btn-primary"
        >
          {enrolling ? "My Courses" : "All Courses"}
        </button>
      </h1>
      <hr />

      {currentUser &&
        (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (
          <div>
            <h5>
              New Course
              <button
                className="btn btn-primary float-end"
                id="wd-add-new-course-click"
                onClick={addNewCourse}
              >
                Add
              </button>
              <button
                className="btn btn-warning float-end me-2"
                id="wd-update-course-click"
                onClick={updateCourse}
              >
                Update
              </button>
              <br />
              <input
                value={course.name}
                className="form-control mb-2"
                onChange={(e) => setCourse({ ...course, name: e.target.value })}
              />
              <textarea
                value={course.description}
                className="form-control"
                onChange={(e) =>
                  setCourse({ ...course, description: e.target.value })
                }
              />
            </h5>
            <hr />
          </div>
        )}

      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((c: any) => (
            
            <Col
              key={c._id}
              className="wd-dashboard-course"
              style={{ width: "300px" }}
            >
              <Card>
                <Link
                  to={`/Kambaz/Courses/${c._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                  onClick={(e) => {
                    // const isEnrolled = courses.some((mc: any) => mc._id === c._id);
                    if (currentUser?.role === "STUDENT" && !c.enrolled && enrolling) {
                      e.preventDefault();
                    }
                  }}
                >
                  <Card.Img
                    src={c.src ? `/images/${c.src}` : "/images/default.jpg"}
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {c.name}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {c.description}
                    </Card.Text>
                    <Button variant="primary">Go</Button>

                    {/* {currentUser?.role === "STUDENT" && (
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          updateEnrollment(c._id, !c.enrolled);
                        }}
                        className={`btn ${
                          c.enrolled ? "btn-danger" : "btn-success"
                        } float-end`}
                      >
                        {c.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )} */}

                    {currentUser?.role === "STUDENT" && enrolling && (
                      <button
                        onClick={(event) => {
                          event.preventDefault();
                          updateEnrollment(c._id, !c.enrolled);
                        }}
                        className={`btn ${
                          c.enrolled ? "btn-danger" : "btn-success"
                        } float-end`}
                      >
                        {c.enrolled ? "Unenroll" : "Enroll"}
                      </button>
                    )}


                    {currentUser &&
                      (currentUser.role === "ADMIN" ||
                        currentUser.role === "FACULTY") && (
                        <>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              deleteCourse(c._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              setCourse(c);
                            }}
                            className="btn btn-warning me-2 float-end"
                            id="wd-edit-course-click"
                          >
                            Edit
                          </button>
                        </>
                      )}
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
