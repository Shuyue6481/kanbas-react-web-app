import { Button, InputGroup, FormControl } from "react-bootstrap";
import { FaSearch, FaPlus } from "react-icons/fa";

export default function AssignmentsControls() {
  return (
    <div
      id="wd-assignments-controls"
      className="d-flex justify-content-between  text-nowrap"
    >
      <InputGroup style={{ width: "400px", height: "50px" }}>
        <InputGroup.Text className="bg-white">
          <FaSearch className="text-secondary" />
        </InputGroup.Text>
        <FormControl
          placeholder="Search..."
          id="wd-search-assignment"
          style={{ borderLeft: "none", bottom: "1px" }}
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
