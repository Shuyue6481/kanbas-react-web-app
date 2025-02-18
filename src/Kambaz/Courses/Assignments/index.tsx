import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButton from "./AssignmentControlButton";
import { GoPlus, GoTriangleDown } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link, useParams } from "react-router";
import * as db from "../../Database";

export default function Assignments() {
  const { cid } = useParams();
  const assignments = db.assignments;
  return (
    <div>
      <AssignmentsControls />
      <br />
      <br />
      <ul id="wd-assignments" className="list-group rounded-0 border-gray">
        <li className="wd-module p-0 list-group-item border ">
          <div className="wd-title p-3 ps-2 bg-light d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              <GoTriangleDown />
              <span className="fw-bold ms-4 fs-5">ASSIGNMENTS</span>
            </div>
            <div className="d-flex align-items-center">
              <span className="border rounded-pill px-3 py-1  bg-light me-3">
                40% of Total
              </span>

              <GoPlus />
              <IoEllipsisVertical className="fs-4 ms-4" />
            </div>
          </div>
        </li>

        {assignments
          .filter((assignment: any) => assignment.course === cid)
          .map((assignment: any) => (
            <li
              key={assignment._id}
              className="wd-lesson p-3 ps-1 d-flex align-items-center border"
            >
              <AssignmentControlButton />
              <div className="flex-grow-1 ms-4 fs-5">
                <Link
                  to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                  className="fw-bold text-dark text-decoration-none"
                >
                  {assignment.title}
                </Link>
                <div className="text-muted small">
                  <span className="text-danger">Multiple Modules</span> |{" "}
                  <b>Not available until</b> May 13 at 12:00am | <br />
                  <b>Due</b> May 20 at 11:59pm | 100pts
                </div>
              </div>
              <LessonControlButtons />
            </li>
          ))}
      </ul>
    </div>
  );
}
