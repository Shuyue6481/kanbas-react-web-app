import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { editAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";
import { assignments } from "../../Database";

export default function AssignmentsControls() {
  const { cid } = useParams();
  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );
  const courseAssignments = assignments.filter(
    (assignment: any) => assignment.course === cid
  );
  const dispatch = useDispatch();
  const newDefaultAssignment = {
    title: "New Assignment",
    description: "New Assignment Description",
    dueDate: "",
    points: "",
    course: cid,
  };
  const [selectedAssignment, setSelectedAssignment] = React.useState(
    courseAssignments[courseAssignments.length - 1]
  );
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    dispatch(editAssignment(newDefaultAssignment));
    const newAid = uuidv4();
    navigate(`/Kambaz/Courses/${cid}/Assignments/${newAid}`);
  };
  return (
    <div
      id="wd-assignments-controls"
      className="d-flex justify-content-between  text-nowrap"
    >
      <InputGroup style={{ width: "500px", height: "50px" }}>
        <InputGroup.Text className="bg-white">
          <FaSearch className="text-secondary" />
        </InputGroup.Text>
        <FormControl
          placeholder="Search..."
          id="wd-search-assignment"
          style={{ borderLeft: "none" }}
        />
      </InputGroup>

      <div className="d-flex gap-3">
        <Button
          variant="light"
          size="lg"
          className="border  px-4"
          id="wd-group-btn"
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Group
        </Button>

        <Button
          variant="danger"
          size="lg"
          className="me-1 float-end"
          id="wd-assignment"
          // onClick={handleButtonClick}
          onClick={() => {
            if (currentUser?.role === "FACULTY" || currentUser?.role === "ADMIN") {
              handleButtonClick();
            }
          }}
        >
          <FaPlus
            className="position-relative me-2"
            style={{ bottom: "1px" }}
          />
          Assignment
        </Button>
      </div>
    </div>
  );
}
