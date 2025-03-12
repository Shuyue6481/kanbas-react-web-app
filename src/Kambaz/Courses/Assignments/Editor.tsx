import {
  FormGroup,
  FormLabel,
  FormControl,
  Form,
  Col,
  Row,
  Card,
  InputGroup,
} from "react-bootstrap";
import { GoX } from "react-icons/go";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, editAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  // const { cid, aid } = useParams();
  // const assignments = db.assignments;
  // const assignment = assignments.find((a) => a._id === aid);
  const value = `The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.
`;

  const assignments = useSelector(
    (state: any) => state.assignmentsReducer.assignments
  );
  const assignment = useSelector(
    (state: any) => state.assignmentsReducer.assignment
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cid } = useParams();

  return (
    <Form id="wd-assignments-editor" className="p-4">
      <FormGroup className="mb-3" controlId="wd-name">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl
          type="text"
          value={assignment.title}
          onChange={(e) =>
            dispatch(
              editAssignment({
                ...assignment,
                title: e.target.value,
              })
            )
          }
        />
      </FormGroup>

      <Form.Group className="mb-3">
        <FormControl
          as="textarea"
          rows={12}
          defaultValue={value}
          value={assignment.description}
          onChange={(e) =>
            dispatch(
              editAssignment({
                ...assignment,
                description: e.target.value,
              })
            )
          }
        />
      </Form.Group>

      <Form.Group as={Row} className="mb-3 align-items-center">
        <Form.Label column sm={3} className="text-end">
          Points
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="number"
            value={assignment.points}
            onChange={(e) =>
              dispatch(
                editAssignment({
                  ...assignment,
                  points: e.target.value,
                })
              )
            }
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} className="text-end">
          Assign
        </Form.Label>

        <Col sm={9}>
          <Card className="p-3">
            <Form.Group className="mb-3 position-relative">
              <Form.Label>
                <strong>Assign to</strong>
              </Form.Label>
              <div className="assign-input-wrapper">
                <text className="assign-badge">
                  Everyone
                  <GoX className="assign-close-icon ms-3" />
                </text>
                <Form.Control type="text" className="assign-input" />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>
                <strong>Due</strong>
              </Form.Label>
              <InputGroup>
                <Form.Control
                  type="datetime-local"
                  value={assignment.dueDate}
                  className="custom-date-input"
                  onChange={(e) =>
                    dispatch(
                      editAssignment({
                        ...assignment,
                        dueDate: e.target.value,
                      })
                    )
                  }
                />
              </InputGroup>
            </Form.Group>

            <Form.Group as={Row}>
              <Col>
                <Form.Label>
                  <strong>Available from</strong>
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    type="datetime-local"
                    value={assignment.availableFromDate}
                    className="custom-date-input"
                    onChange={(e) =>
                      dispatch(
                        editAssignment({
                          ...assignment,
                          availableFromDate: e.target.value,
                        })
                      )
                    }
                  />
                </InputGroup>
              </Col>

              <Col>
                <Form.Label>
                  <strong>Until</strong>
                </Form.Label>
                <InputGroup>
                  <Form.Control
                    type="datetime-local"
                    value={assignment.availableUntilDate}
                    className="custom-date-input"
                    onChange={(e) =>
                      dispatch(
                        editAssignment({
                          ...assignment,
                          availableUntilDate: e.target.value,
                        })
                      )
                    }
                  />
                </InputGroup>
              </Col>
            </Form.Group>
          </Card>
        </Col>
      </Form.Group>

      <hr />

      {/* <div className="d-flex justify-content-end gap-2">
        <Button variant="light">Cancel</Button>
        <Button variant="danger">Save</Button>
      </div> */}

      <div className="d-flex justify-content-end gap-2">
        <Link
          to={`/Kambaz/Courses/${cid}/Assignments`}
          className="btn btn-light"
        >
          Cancel
        </Link>
        <Link
          to={`/Kambaz/Courses/${cid}/Assignments`}
          className="btn btn-danger"
          onClick={() => {
            if (assignments.find((a: any) => a._id === assignment._id)) {
              dispatch(updateAssignment(assignment));
            } else {
              dispatch(addAssignment(assignment));
            }
            navigate(`/Kanbas/Courses/${cid}/Assignments`);
          }}
        >
          Save
        </Link>
      </div>
    </Form>
  );
}
