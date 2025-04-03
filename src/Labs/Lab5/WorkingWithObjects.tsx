import { useState } from "react";
import { FormControl } from "react-bootstrap";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;
  const [moduleObj, setModuleObj] = useState({
    id: 1,
    name: "NodeJS Module",
    description: "Create a NodeJS server with ExpressJS",
    course: "NodeJS Course",
  });
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Modifying Assignment Properties</h4>
      <a
        id="wd-update-assignment-title"
        className="btn btn-primary float-end"
        href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <FormControl
        className="w-75"
        id="wd-assignment-title"
        defaultValue={assignment.title}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />

      <a
        id="wd-update-assignment-score"
        className="btn btn-primary float-end mb-2"
        href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <FormControl
        className="w-75 mb-2"
        type="number"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />

      <a
        id="wd-update-assignment-completed"
        className="btn btn-primary float-end mb-2"
        href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
      >
        Update Completed
      </a>
      <div className="mb-2">
        <input
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />{" "}
        Completed
      </div>
      <hr />

      <h4>Modifying Module Properties</h4>
      <a
        id="wd-update-module-name"
        className="btn btn-primary float-end mb-2"
        href={`${MODULE_API_URL}/name/${moduleObj.name}`}
      >
        Update Module Name
      </a>
      <FormControl
        className="w-75 mb-2"
        value={moduleObj.name}
        onChange={(e) => setModuleObj({ ...moduleObj, name: e.target.value })}
      />

      <a
        id="wd-update-module-description"
        className="btn btn-primary float-end mb-2"
        href={`${MODULE_API_URL}/description/${moduleObj.description}`}
      >
        Update Module Description
      </a>
      <FormControl
        className="w-75 mb-2"
        value={moduleObj.description}
        onChange={(e) =>
          setModuleObj({ ...moduleObj, description: e.target.value })
        }
      />
      <hr />
      <h4>Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/assignment`}
      >
        Get Assignment
      </a>
      <a
        id="wd-retrieve-assignments"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className="btn btn-primary me-2"
        href={`${REMOTE_SERVER}/lab5/assignment/title`}
      >
        Get Title
      </a>
      <a
        id="wd-retrieve-assignment-title me-2"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>
      <a
        id="wd-retrieve-module-description"
        className="btn btn-primary"
        href={`${REMOTE_SERVER}/lab5/module/description`}
      >
        Get Module Description
      </a>
      <hr />
    </div>
  );
}
