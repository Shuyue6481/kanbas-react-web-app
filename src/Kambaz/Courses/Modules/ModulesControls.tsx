import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import { Button, Dropdown } from "react-bootstrap";
import { MdDoNotDisturbAlt } from "react-icons/md";
import ModuleEditor from "./ModuleEditor";
import { useState } from "react";
export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button
        variant="danger"
        size="lg"
        className="me-1 float-end"
        id="wd-add-module-btn"
        data-bs-toggle="modal"
        data-bs-target="#wd-add-module-dialog"
        onClick={handleShow}
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>
      <ModuleEditor
        dialogTitle="Add Module"
        moduleName={moduleName}
        show={show}
        handleClose={handleClose}
        setModuleName={setModuleName}
        addModule={addModule}
      />

      <Dropdown className="float-end me-2">
        <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item id="wd-publish-all">
            <GreenCheckmark /> Publish All
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-all-modules-and-items">
            <GreenCheckmark /> Publish all modules and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-publish-modules-only">
            <GreenCheckmark /> Publish modules only
          </Dropdown.Item>
          {/* Create two more items with IDs wd-unpublish-all-modules-and-items and wd-unpublish-modules-only with
             labels Unpublish all modules and items and Unpublish modules only */}
          <Dropdown.Item id="wd-unpublish-all-modules-and-items">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish all modules
            and items
          </Dropdown.Item>
          <Dropdown.Item id="wd-unpublish-modules-only">
            <MdDoNotDisturbAlt className="me-2 fs-5" /> Unpublish modules only
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Button
        variant="secondary"
        size="lg"
        className="me-1 float-end"
        id="wd-group-btn"
      >
        View Progress
      </Button>
      <Button
        variant="secondary"
        size="lg"
        className="me-1 float-end"
        id="wd-group-btn"
      >
        Collapse All
      </Button>
      <ModuleEditor
        dialogTitle="Add Module"
        moduleName={moduleName}
        show={show}
        handleClose={handleClose}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}

// import { Button, InputGroup, FormControl } from "react-bootstrap";
// import { FaPlus, FaSearch } from "react-icons/fa";

// export default function AssignmentsControls() {
//   return (
//     <div
//       id="wd-assignments-controls"
//       className="d-flex justify-content-between text-nowrap"
//     >
//       <InputGroup style={{ width: "400px", height: "50px" }}>
//         <InputGroup.Text className="bg-white">
//           <FaSearch className="text-secondary" />
//         </InputGroup.Text>
//         <FormControl
//           placeholder="Search..."
//           id="wd-search-assignment"
//           style={{ borderLeft: "none", bottom: "1px" }}
//         />
//       </InputGroup>

//       <div className="d-flex gap-3">
//         <Button
//           variant="secondary"
//           size="lg"
//           className=" text-dark px-4"
//           id="wd-group-btn"
//         >
//           Collapse All
//         </Button>

//         <Button
//           variant="secondary"
//           size="lg"
//           className=" text-dark px-4"
//           id="wd-group-btn"
//         >
//           View Progress
//         </Button>

//         <Button
//           variant="secondary"
//           size="lg"
//           className=" text-dark px-4"
//           id="wd-group-btn"
//         >
//           Group
//         </Button>

//         <Button
//           variant="danger"
//           size="lg"
//           className="me-1 float-end"
//           id="wd-assignment"
//         >
//           <FaPlus
//             className="position-relative me-2"
//             style={{ bottom: "1px" }}
//           />
//           Assignment
//         </Button>
//       </div>
//     </div>
//   );
// }
