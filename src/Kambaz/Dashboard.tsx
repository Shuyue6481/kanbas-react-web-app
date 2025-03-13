import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as db from "./Database";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse, unenrollCourse } from "./enrollmentReducer";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (course: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const enrollments = useSelector(
    (state: any) => state.enrollmentReducer.enrollments || db.enrollments
  );
  const dispatch = useDispatch();
  const [showAllCourses, setShowAllCourses] = useState(false);
  // const displayedCourses =
  //   currentUser && currentUser.role === "STUDENT" && !showAllCourses
  //     ? courses.filter((course: any) =>
  //         enrollments.some(
  //           (enrollment: any) =>
  //             enrollment.user === currentUser._id &&
  //             enrollment.course === course._id
  //         )
  //       )
  //     : courses;

  const displayedCourses = currentUser
    ? currentUser.role === "STUDENT"
      ? showAllCourses
        ? courses
        : courses.filter((course: any) =>
            enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser._id &&
                enrollment.course === course._id
            )
          )
      : courses.filter((course: any) =>
          enrollments.some(
            (enrollment: any) =>
              enrollment.user === currentUser._id &&
              enrollment.course === course._id
          )
        )
    : [];

  return (
    <div id="wd-dashboard">
      {currentUser && currentUser.role === "STUDENT" && (
        <Button
          variant="primary"
          size="lg"
          className="me-1 float-end"
          id="wd-enrollment"
          onClick={() => setShowAllCourses(!showAllCourses)}
        >
          Enrollments
        </Button>
      )}
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (
        <div>
          <h5>
            New Course
            <button
              className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              {" "}
              Add{" "}
            </button>
            <button
              className="btn btn-warning float-end me-2"
              onClick={updateCourse}
              id="wd-update-course-click"
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
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => {
            const isEnrolled =
              currentUser && currentUser.role === "STUDENT"
                ? enrollments.some(
                    (enrollment: any) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id
                  )
                : true;

            return (
              <Col
                key={course._id}
                className="wd-dashboard-course"
                style={{ width: "300px" }}
              >
                <Card>
                  <Link
                    to={isEnrolled ? `/Kambaz/Courses/${course._id}/Home` : "#"}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                  >
                    <Card.Img
                      src={`/images/${course.src}`}
                      variant="top"
                      width="100%"
                      height={160}
                      onError={(e) => {
                        e.currentTarget.src = "/images/default.jpg";
                      }}
                    />
                    <Card.Body className="card-body">
                      <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                        {course.name}
                      </Card.Title>
                      <Card.Text
                        className="wd-dashboard-course-description overflow-hidden"
                        style={{ height: "100px" }}
                      >
                        {course.description}
                      </Card.Text>

                      <Button variant="primary"> Go </Button>

                      {currentUser && currentUser.role === "STUDENT" && (
                        <>
                          {isEnrolled ? (
                            <Button
                              variant="danger"
                              className="float-end"
                              onClick={(e) => {
                                e.preventDefault();
                                const enrollmentToRemove = enrollments.find(
                                  (enr: any) =>
                                    enr.user === currentUser._id &&
                                    enr.course === course._id
                                );
                                if (enrollmentToRemove) {
                                  dispatch(
                                    unenrollCourse(enrollmentToRemove._id)
                                  );
                                }
                              }}
                            >
                              Unenroll
                            </Button>
                          ) : (
                            <Button
                              variant="success"
                              className="float-end"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(
                                  enrollCourse({
                                    user: currentUser._id,
                                    course: course._id,
                                  })
                                );
                              }}
                            >
                              Enroll
                            </Button>
                          )}
                        </>
                      )}

                      {currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (
                        <>
                          <button
                            onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                            }}
                            className="btn btn-danger float-end"
                            id="wd-delete-course-click"
                          >
                            Delete
                          </button>
                          <button
                            id="wd-edit-course-click"
                            onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                            }}
                            className="btn btn-warning me-2 float-end"
                          >
                            Edit
                          </button>
                        </>
                      )}
                    </Card.Body>
                  </Link>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
