import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "../Modules/LessonControlButtons";
import AssignmentsControls from "./AssignmentsControls";
import AssignmentControlButton from "./AssignmentControlButton";
import { GoPlus, GoTriangleDown } from "react-icons/go";
import { IoEllipsisVertical } from "react-icons/io5";
import { Link, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { deleteAssignment, editAssignment } from "./reducer";
import { FaTrash } from "react-icons/fa6";
import { format } from "date-fns";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function Assignments() {
  const { cid } = useParams();

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments || []
  );
  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );
  const dispatch = useDispatch();
  const [selectedAssignment, setSelectedAssignment] = React.useState(
    courseAssignments[courseAssignments.length - 1]
  );
  const { currentUser } = useSelector((state: any) => state.accountReducer);

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
                  onClick={(e) => {
                    if (currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY")) {
                      dispatch(editAssignment(assignment));
                    } else {
                      e.preventDefault();
                    }
                  }}
                  // onClick={(e) => {
                  //   dispatch(editAssignment(assignment));
                  // }}
                >
                  {assignment.title}
                </Link>
                <div className="text-muted small">
                  <small>
                    <span className="text-danger">Multiple Modules</span> |{" "}
                    <strong>Not available until</strong>{" "}
                    {/* {assignment.availableUntilDate} */}
                    {/* {format(
                      new Date(assignment.availableUntilDate),
                      "MMM d 'at' h:mma"
                    )}{" "} */}
                    {assignment.availableUntilDate
                      ? format(
                          new Date(assignment.availableUntilDate),
                          "MMM d 'at' h:mma"
                        )
                      : ""}{" "}
                    | <br />
                    <strong>Due</strong>{" "}
                    {/* {format(new Date(assignment.dueDate), "MMM d 'at' h:mma")} |{" "} */}
                    {assignment.dueDate
                      ? format(new Date(assignment.dueDate), "MMM d 'at' h:mma")
                      : ""}|{" "}
                    {assignment.points} pts
                  </small>
                </div>
              </div>
              <LessonControlButtons />
              {/* <FaTrash
                className="text-danger me-1 mb-1 float-end fs-5"
                style={{ position: "relative", top: "3px" }}
                data-bs-toggle="modal"
                data-bs-target="#deleteModal"
                onClick={() => {
                  setSelectedAssignment({ ...assignment });
                  dispatch(deleteAssignment(assignment._id));
                }}
              /> */}

              <FaTrash
                className="text-danger me-1 mb-1 float-end fs-5"
                style={{ position: "relative", top: "3px" }}
                // data-bs-toggle="modal"
                // data-bs-target="#deleteModal"
                data-bs-toggle={
                  currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY")
                    ? "modal"
                    : undefined
                }
                data-bs-target={
                  currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY")
                    ? "#deleteModal"
                    : undefined
                }
                onClick={() => {
                  if (currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY")) {
                    setSelectedAssignment({ ...assignment });
                  }
                }}
                // onClick={() => {
                //   setSelectedAssignment({ ...assignment });
                // }}
              />

              <div
                className="modal fade"
                id="deleteModal"
                tabIndex={-1}
                aria-labelledby="deleteModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="deleteModalLabel">
                        Confirm Deletion
                      </h1>
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      Are you sure you want to delete {selectedAssignment.title}
                      ? This action cannot be undone.
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        No
                      </button>
                      <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-dismiss="modal"
                        onClick={() => {
                          if (currentUser && (currentUser.role === "ADMIN" || currentUser.role === "FACULTY")) {
                            dispatch(deleteAssignment(selectedAssignment._id))
                          }
                        }}
                        // onClick={() =>
                        //   dispatch(deleteAssignment(selectedAssignment._id))
                        // }
                      >
                        Yes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
