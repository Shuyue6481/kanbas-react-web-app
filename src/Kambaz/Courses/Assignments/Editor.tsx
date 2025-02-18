import {
  FormGroup,
  FormLabel,
  FormControl,
  Form,
  Col,
  Row,
  Button,
  Card,
  InputGroup,
} from "react-bootstrap";
import { GoX } from "react-icons/go";
import { Link, useParams } from "react-router-dom";
import * as db from "../../Database";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const assignments = db.assignments;
  const assignment = assignments.find((a) => a._id === aid);
  const value = `The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

• Your full name and section
• Links to each of the lab assignments
• Link to the Kanbas application
• Links to all relevant source code repositories

The Kanbas application should include a link to navigate back to the landing page.
`;

  return (
    <Form id="wd-assignments-editor" className="p-4">
      <FormGroup className="mb-3" controlId="wd-name">
        <FormLabel>Assignment Name</FormLabel>
        <FormControl type="text" defaultValue={assignment ? assignment.title : ""} />
      </FormGroup>

      <Form.Group className="mb-3">
        <FormControl as="textarea" rows={12} defaultValue={value} />
      </Form.Group>

      <Form.Group as={Row} className="mb-3 align-items-center">
        <Form.Label column sm={3} className="text-end">
          Points
        </Form.Label>
        <Col sm={9}>
          <Form.Control type="number" defaultValue={100} />
        </Col>
      </Form.Group>

      {/* <Form.Group as={Row} className="mb-3  align-items-center">
        <Form.Label column sm={3} className="text-end">
          Assignment Group
        </Form.Label>
        <Col sm={9}>
          <Form.Select>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </Form.Select>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3  align-items-center">
        <Form.Label column sm={3} className="text-end">
          Display Grade as
        </Form.Label>
        <Col sm={9}>
          <Form.Select>
            <option value="Percentage">Percentage</option>
          </Form.Select>
        </Col>
      </Form.Group> */}

      {/* <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} className="text-end">
          Submission Type
        </Form.Label>

        <Col sm={9}>
          <Card className="p-3">
            <Form.Select>
              <option value="Online">Online</option>
            </Form.Select>

            <Form.Label className="mt-3 fw-bold mb-3">
              <strong>Online Entry Options</strong>
            </Form.Label>
            <Form.Check type="checkbox" label="Text Entry" className="mb-3" />
            <Form.Check type="checkbox" label="Website URL" className="mb-3" />
            <Form.Check
              type="checkbox"
              label="Media Recordings"
              className="mb-3"
            />
            <Form.Check
              type="checkbox"
              label="Student Annotation"
              className="mb-3"
            />
            <Form.Check type="checkbox" label="File Uploads" />
          </Card>
        </Col>
      </Form.Group> */}

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
                  defaultValue="2024-05-13T23:59"
                  className="custom-date-input"
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
                    defaultValue="2024-05-06T12:00"
                    className="custom-date-input"
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
                    defaultValue="2024-05-08T12:00"
                    className="custom-date-input"
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
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-light">
          Cancel
        </Link>
        <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-danger">
          Save
        </Link>
      </div>
    </Form>
  );
}
