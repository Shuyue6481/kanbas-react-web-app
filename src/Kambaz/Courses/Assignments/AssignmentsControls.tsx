import React from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { selectAssignment } from "./reducer";
import { v4 as uuidv4 } from "uuid";
import { assignments } from "../../Database";

export default function AssignmentsControls() {
  const { courseId } = useParams();
	const assignments = useSelector(
		(state:any) => state.assignmentsReducer.assignments
	);
	const courseAssignments = assignments.filter(
		(assignment:any) => assignment.course === courseId
	);
	const dispatch = useDispatch();
	const newDefaultAssignment = {
		title: "New Assignment",
		description: "New Assignment Description",
		dueDate: "",
		points: "",
		course: courseId,
	};
  const [selectedAssignment, setSelectedAssignment] = React.useState(
		courseAssignments[0]
	);

  const navigate = useNavigate();
  const handleButtonClick = () => {
    dispatch(selectAssignment(newDefaultAssignment));
    const newAid = uuidv4();
    navigate(`/Kambaz/Courses/${courseId}/Assignments/${newAid}`);
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
          onClick={handleButtonClick}
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