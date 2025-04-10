import { Button, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editAssignment } from "./reducer";
// import { v4 as uuidv4 } from "uuid";
import * as assignmentsClient from "../client";

export default function AssignmentsControls() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const newDefaultAssignment = {
    title: "New Assignment",
    description: "New Assignment Description",
    dueDate: "",
    points: "",
    course: cid,
  };
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const navigate = useNavigate();

  // const handleButtonClick = async () => {
  //   const newAssignment = await assignmentsClient.createAssignmentForCourse(
  //     cid as string,
  //     newDefaultAssignment
  //   );
  //   console.log("Created assignment:", newAssignment);
  //   dispatch(editAssignment(newAssignment));
  //   // dispatch(addAssignment(newAssignment));
  //   // dispatch(editAssignment(newAssignment));
  //   // navigate(`/Kambaz/Courses/${cid}/Assignments/${newAssignment._id}`);
  //   // navigate(`/Kambaz/Courses/${cid}/Assignments/${newAssignment._id || newAssignment.id}`);
  //   // navigate(`/Assignments/${newAssignment._id}`);
  //   // navigate(`${newAssignment._id}`);

  // };


  const handleButtonClick = async () => {
    const newAssignment = await assignmentsClient.createAssignmentForCourse(
      cid as string,
      newDefaultAssignment
    );
    dispatch(editAssignment(newAssignment));
    navigate(`/Kambaz/Courses/${cid}/Assignments/${newAssignment._id}`);
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

        {currentUser &&
          (currentUser.role === "ADMIN" || currentUser.role === "FACULTY") && (
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
          )}
      </div>
    </div>
  );
}
