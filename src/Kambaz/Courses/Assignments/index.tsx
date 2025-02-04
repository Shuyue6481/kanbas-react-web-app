import { Button, ListGroup } from "react-bootstrap";
import { BsCheckCircle, BsGripVertical, BsPlus } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButton from "./AssignmentControlButton";
import { GoPlus, GoTriangleDown } from "react-icons/go";
import { FaCircle } from "react-icons/fa6";
import { IoEllipsisVertical } from "react-icons/io5";

export default function Assignments() {
  return (
    // <div id="wd-assignments">
    //   <input placeholder="Search for Assignments" id="wd-search-assignment" />
    //   <button id="wd-add-assignment-group">+ Group</button>
    //   <button id="wd-add-assignment">+ Assignment</button>
    //   <h3 id="wd-assignments-title">
    //     ASSIGNMENTS 40% of Total <button>+</button>{" "}
    //   </h3>
    //   <ul id="wd-assignment-list">
    //     <li className="wd-assignment-list-item">
    //       <a
    //         href="#/Kambaz/Courses/1234/Assignments/123"
    //         className="wd-assignment-link"
    //       >
    //         A1 - ENV + HTML
    //       </a>{" "}
    //       <div>Multiple Modules | <b>Not available until</b> May 6 at 12:00am | <b>Due</b> May 13 at 11:59pm | 100pts</div>
    //     </li>
    //     <li className="wd-assignment-list-item">
    //       <a
    //         href="#/Kambaz/Courses/1234/Assignments/123"
    //         className="wd-assignment-link"
    //       >
    //         A2 - CSS + BOOTSTRAP
    //       </a>{" "}
    //       <div>Multiple Modules | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100pts</div>
    //     </li>
    //     <li className="wd-assignment-list-item">
    //       <a
    //         href="#/Kambaz/Courses/1234/Assignments/123"
    //         className="wd-assignment-link"
    //       >
    //         A3 - JAVASCRIPT + REACT
    //       </a>{" "}
    //       <div>Multiple Modules | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100pts</div>
    //     </li>
    //   </ul>
    // </div>

    // <div>
    //   <AssignmentsControls />
    //   <br />
    //   <br />
    //   <ListGroup className="rounded-0" id="wd-modules">
    //     <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
    //       <div className="wd-title p-3 ps-2 bg-secondary">
    //         {" "}
    //         <BsGripVertical className="me-2 fs-3" /> Week 1{" "}
    //         <LessonControlButtons />
    //       </div>
    //       <ListGroup className="wd-lessons rounded-0">
    //         <ListGroup.Item className="wd-lesson p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
    //           <LessonControlButtons />
    //         </ListGroup.Item>
    //         <ListGroup.Item className="wd-lesson p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" /> Introduction to the
    //           course <LessonControlButtons />
    //         </ListGroup.Item>
    //         <ListGroup.Item className="wd-lesson p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" /> Learn what is Web
    //           Development <LessonControlButtons />
    //         </ListGroup.Item>
    //       </ListGroup>
    //     </ListGroup.Item>
    //     <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
    //       <div className="wd-title p-3 ps-2 bg-secondary">
    //         {" "}
    //         <BsGripVertical className="me-2 fs-3" /> Week 2{" "}
    //         <LessonControlButtons />{" "}
    //       </div>
    //       <ListGroup className="wd-lessons rounded-0">
    //         <ListGroup.Item className="wd-lesson p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" /> LESSON 1{" "}
    //           <LessonControlButtons />
    //         </ListGroup.Item>
    //         <ListGroup.Item className="wd-lesson p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" /> LESSON 2{" "}
    //           <LessonControlButtons />
    //         </ListGroup.Item>
    //       </ListGroup>
    //     </ListGroup.Item>
    //   </ListGroup>
    // </div>

    <div>
      <AssignmentsControls />
      <br />
      <br />
      <ListGroup className="rounded-0" id="wd-assignments">
        <ListGroup.Item className="wd-module p-0 mb-2 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-light d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <GoTriangleDown />
              <span className="fw-bold ms-3">ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="border rounded-pill px-3 py-1  bg-light me-3">
                40% of Total
              </span>

              <GoPlus />
              <IoEllipsisVertical className="fs-4 ms-4" />
            </div>
          </div>

          <ListGroup className="wd-lessons rounded-0">
            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center ">
              <AssignmentControlButton />
              <div className="flex-grow-1 ms-3">
                {/* <span className="fw-bold text-dark">A1</span> */}
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="fw-bold text-dark text-decoration-none"
                >
                  A1
                </a>
                <div className="text-muted small">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 6 at 12:00am | <br />
                  <b>Due</b> May 13 at 11:59pm | 100pts
                </div>
              </div>
              <LessonControlButtons />
            </ListGroup.Item>

            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center ">
              <AssignmentControlButton />
              <div className="flex-grow-1 ms-3">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="fw-bold text-dark text-decoration-none"
                >
                  A2
                </a>
                <div className="text-muted small">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 at 12:00am | <br />
                  <b>Due</b> May 20 at 11:59pm | 100pts
                </div>
              </div>
              <LessonControlButtons />
            </ListGroup.Item>

            <ListGroup.Item className="wd-lesson p-3 ps-1 d-flex align-items-center ">
              <AssignmentControlButton />
              <div className="flex-grow-1 ms-3">
                <a
                  href="#/Kambaz/Courses/1234/Assignments/123"
                  className="fw-bold text-dark text-decoration-none"
                >
                  A3
                </a>
                <div className="text-muted small">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 20 at 12:00am | <br />
                  <b>Due</b> May 27 at 11:59pm | 100pts
                </div>
              </div>
              <LessonControlButtons />
            </ListGroup.Item>
          </ListGroup>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
}
