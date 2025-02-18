//import { ListGroup } from "react-bootstrap";
import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import * as db from "../../Database";

export default function Modules() {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    // <div>
    //   {/* Implement Collapse All button, View Progress button, etc. */}
    //   <button type="button">Collapse All</button>
    //   <button type="button">View Progress</button>
    //   <select>
    //     <option value="PublishAll">Publish All</option>
    //   </select>
    //   <button type="button">+ Module</button>
    //   <ul id="wd-modules">
    //     <li className="wd-module">
    //       <div className="wd-title">Week 1</div>
    //       <ul className="wd-lessons">
    //         <li className="wd-lesson">
    //           <span className="wd-title">LEARNING OBJECTIVES</span>
    //           <ul className="wd-content">
    //             <li className="wd-content-item">Introduction to the course</li>
    //             <li className="wd-content-item">
    //               Learn what is Web Development
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </li>
    //     <li className="wd-module">
    //       <div className="wd-title">Week 2</div>
    //     </li>
    //     <li className="wd-module">
    //       <div className="wd-title">Week 3</div>
    //     </li>
    //   </ul>
    // </div>

    // <div>
    //   <ModulesControls />
    //   <br />
    //   <br />
    //   <br />
    //   <br />
    //   <ListGroup className="rounded-0" id="wd-modules">
    //     <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
    //       <div className="wd-title p-3 ps-2 bg-secondary">
    //         {" "}
    //         <BsGripVertical className="me-2 fs-3" /> Week 1{" "}
    //         <ModuleControlButtons />
    //       </div>
    //       <ListGroup className="wd-lessons rounded-0">
    //         <ListGroup.Item className="wd-lesson p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
    //           <LessonControlButtons />
    //         </ListGroup.Item>
    //         <ListGroup.Item className="wd-lesson p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" /> Introduction to the
    //           course <LessonControlButtons />
    //         </ListGroup.Item>
    //         <ListGroup.Item className="wd-lesson p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" /> Learn what is Web
    //           Development <LessonControlButtons />
    //         </ListGroup.Item>
    //         <ListGroup.Item className="wd-lesson p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" /> LESSON 1{" "}
    //           <LessonControlButtons />
    //         </ListGroup.Item>
    //         <ListGroup.Item className="wd-lesson p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" /> LESSON 2{" "}
    //           <LessonControlButtons />
    //         </ListGroup.Item>
    //       </ListGroup>
    //     </ListGroup.Item>
    //     <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
    //       <div className="wd-title p-3 ps-2 bg-secondary">
    //         {" "}
    //         <BsGripVertical className="me-2 fs-3" /> Week 2{" "}
    //         <ModuleControlButtons />
    //       </div>
    //       <ListGroup className="wd-lessons rounded-0">
    //         <ListGroup.Item className="wd-lesson p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" /> LEARNING OBJECTIVES{" "}
    //           <LessonControlButtons />
    //         </ListGroup.Item>
    //         <ListGroup.Item className="wd-lesson p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" /> LESSON 1{" "}
    //           <LessonControlButtons />
    //         </ListGroup.Item>
    //         <ListGroup.Item className="wd-lesson p-3 ps-1">
    //           <BsGripVertical className="me-2 fs-3" /> LESSON 2{" "}
    //           <LessonControlButtons />
    //         </ListGroup.Item>
    //       </ListGroup>
    //     </ListGroup.Item>
    //   </ListGroup>
    // </div>

    <div>
      <ModulesControls />
      <br />
      <br />
      <br />
      <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {module.name}{" "}
                <ModuleControlButtons />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name}{" "}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
