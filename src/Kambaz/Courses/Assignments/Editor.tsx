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

{
  /*
export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">Assignment Name</label>
      <input id="wd-name" value="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea id="wd-description">
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br />
      <table cellPadding="10">
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" value={100} />
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
          </td>
          <td>
            <select id="wd-group">
              <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
          </td>
          <td>
            <select id="wd-display-grade-as">
              <option value="Percentage">Percentage</option>
            </select>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
          </td>
          <td>
            <select id="wd-submission-type">
               <option value="Online">Online</option> 
            </select>
          </td>
        </tr>

        <tr>
          <td></td>
          <td>
            <label htmlFor="wd-points">Online Entry Options</label>
            <div>
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </div>
            <div>
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
            </div>
            <div>
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </div>
            <div>
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </div>
            <div>
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </div>
          </td>
        </tr>

        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-assign-to">Assign</label>
          </td>
          <td align="left" valign="top">
            <label htmlFor="wd-assign-to">Assign to</label>
            <div>
              <input id="wd-assign-to" value={"Everyone"} />
            </div>
          </td>
        </tr>

        <tr>
          <td></td>
          <td align="left" valign="top">
            <label htmlFor="wd-due-date">Due</label>
            <div>
              <input id="wd-due-date" type="date" defaultValue="2024-05-13" />
            </div>
          </td>
        </tr>

        <tr>
          <td></td>
          <td align="left" valign="top">
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <div>
                <label htmlFor="wd-available-from" style={{ display: "block" }}>
                  Available from
                </label>
                <input
                  id="wd-available-from"
                  type="date"
                  defaultValue="2024-05-06"
                />
              </div>

              <div>
                <label
                  htmlFor="wd-available-until"
                  style={{ display: "block" }}
                >
                  Until
                </label>
                <input
                  id="wd-available-until"
                  type="date"
                  defaultValue="2024-05-20"
                />
              </div>
            </div>
          </td>
        </tr>
      </table>
      <hr />
      <div style={{ textAlign: "right" }}>
        <button>Cancel</button>
        <button>Save</button>
      </div>
    </div>
  );
}
  */
}

export default function AssignmentEditor() {
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
        <FormControl type="text" defaultValue="A1" />
      </FormGroup>

      <Form.Group className="mb-3">
        <FormControl as="textarea" rows={12} defaultValue={value} />
        {/* <p>
          The assignment is{" "}
          <span className="text-danger">available online</span>
        </p>
        <p>
          Submit a link to the landing page of your Web application running on
          Netlify.{" "}
        </p>
        <p>The landing page should include the following:</p>
        <ul className="mb-0">
          <li>Your full name and section</li>
          <li>Links to each of the lab assignments</li>
          <li>Link to the Kanbas application </li>
          <li>Links to all relevant source code repositories</li>
        </ul>
        <p className="mt-3">
          The Kanbas application should include a link to navigate back to the
          landing page.
        </p> */}
      </Form.Group>

      <Form.Group as={Row} className="mb-3 align-items-center">
        <Form.Label column sm={3} className="text-end">
          Points
        </Form.Label>
        <Col sm={9}>
          <Form.Control type="number" defaultValue={100} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3  align-items-center">
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
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
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
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Form.Label column sm={3} className="text-end">
          Assign
        </Form.Label>

        <Col sm={9}>
          <Card className="p-3">
            {/* <Form.Group className="mb-3">
              <Form.Label>Assign to</Form.Label>
              <Form.Control type="text" defaultValue="Everyone" />
            </Form.Group> */}

            <Form.Group className="mb-3 position-relative">
              <Form.Label>
                <strong>Assign to</strong>
              </Form.Label>
              <div className="assign-input-wrapper">
                {/* <BadgeTag text="Everyone" /> */}
                {/* <Badge className="assign-badge text-dark">
                  Everyone
                  <GoX className="assign-close-icon" />
                </Badge> */}
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

      <div className="d-flex justify-content-end gap-2">
        <Button variant="light">Cancel</Button>
        <Button variant="danger">Save</Button>
      </div>
    </Form>
  );
}
