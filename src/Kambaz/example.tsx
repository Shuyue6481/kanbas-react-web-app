import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as db from "./Database";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  deleteCourse: (courseId: any) => void;
  updateCourse: () => void;
}) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  // enrollment 状态可以先从 Redux 中获取，如果没有，则使用 Database 中的初始值
  const enrollments = useSelector(
    (state: any) => state.enrollmentReducer.enrollments || db.enrollments
  );
  const dispatch = useDispatch();

  // 针对学生用户，增加一个状态来切换显示“所有课程”或“仅注册的课程”
  const [showAllCourses, setShowAllCourses] = useState(false);

  // 如果当前用户是学生且未开启“显示所有课程”，只显示该学生注册的课程
  const displayedCourses =
    currentUser && currentUser.role === "STUDENT" && !showAllCourses
      ? courses.filter((course: any) =>
          enrollments.some(
            (enrollment: any) =>
              enrollment.user === currentUser._id &&
              enrollment.course === course._id
          )
        )
      : courses;

  return (
    <div id="wd-dashboard">
      <div className="d-flex justify-content-between align-items-center">
        <h1 id="wd-dashboard-title">Dashboard</h1>
        {/* 学生用户显示蓝色 Enrollments 按钮 */}
        {currentUser && currentUser.role === "STUDENT" && (
          <Button
            variant="primary"
            onClick={() => setShowAllCourses(!showAllCourses)}
          >
            Enrollments
          </Button>
        )}
      </div>
      <hr />
      
      {currentUser && currentUser.role === "ADMIN" && (
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
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
            <br />
            <input
              value={course.name}
              className="form-control mb-2"
              onChange={(e) =>
                setCourse({ ...course, name: e.target.value })
              }
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

      <h2 id="wd-dashboard-published">
        Published Courses ({displayedCourses.length})
      </h2>
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {displayedCourses.map((course: any) => {
            // 针对学生，判断当前课程是否已注册
            const isEnrolled =
              currentUser && currentUser.role === "STUDENT"
                ? enrollments.some(
                    (enrollment: any) =>
                      enrollment.user === currentUser._id &&
                      enrollment.course === course._id
                  )
                : true; // 非学生角色直接视为可导航

            return (
              <Col
                key={course._id}
                className="wd-dashboard-course"
                style={{ width: "300px" }}
              >
                <Card>
                  {/* 对于学生，只有注册的课程才允许导航；否则点击链接不跳转 */}
                  <Link
                    to={isEnrolled ? `/Kambaz/Courses/${course._id}/Home` : "#"}
                    className="wd-dashboard-course-link text-decoration-none text-dark"
                    onClick={(e) => {
                      if (
                        currentUser &&
                        currentUser.role === "STUDENT" &&
                        !isEnrolled
                      ) {
                        e.preventDefault();
                        alert("You are not enrolled in this course.");
                      }
                    }}
                  >
                    <Card.Img
                      src={`/images/${course.src}`}
                      variant="top"
                      width="100%"
                      height={160}
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
                      {currentUser && currentUser.role === "ADMIN" && (
                        <Button variant="primary"> Go </Button>
                      )}
                      {/* 学生的注册/取消注册按钮 */}
                      {currentUser && currentUser.role === "STUDENT" && (
                        <>
                          {isEnrolled ? (
                            <Button
                              variant="danger"
                              onClick={(e) => {
                                e.preventDefault();
                                dispatch(
                                  unenrollCourse({
                                    user: currentUser._id,
                                    course: course._id,
                                  })
                                );
                              }}
                            >
                              Unenroll
                            </Button>
                          ) : (
                            <Button
                              variant="success"
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
                      {currentUser && currentUser.role === "ADMIN" && (
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
