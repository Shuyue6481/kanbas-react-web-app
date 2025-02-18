import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as db from "./Database";
export default function Dashboard() {
  const courses = db.courses;
  //   return (
  //     <div id="wd-dashboard">
  //       <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
  //       <h2 id="wd-dashboard-published">Published Courses (7)</h2> <hr />
  //       <div id="wd-dashboard-courses">
  //         <Row xs={1} md={5} className="g-4" style={{ rowGap: "35px" }}>
  //           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
  //             <Card>
  //               <Link
  //                 to="/Kambaz/Courses/1234/Home"
  //                 className="wd-dashboard-course-link text-decoration-none text-dark"
  //               >
  //                 <Card.Img
  //                   variant="top"
  //                   src="/images/reactjs.jpg"
  //                   width="100%"
  //                   height={160}
  //                 />
  //                 <Card.Body>
  //                   <Card.Title className="wd-dashboard-course-title">
  //                     CS1234 React JS
  //                   </Card.Title>
  //                   <Card.Text className="wd-dashboard-course-description">
  //                     Full Stack software developer
  //                   </Card.Text>
  //                   <Button variant="primary">Go</Button>
  //                 </Card.Body>
  //               </Link>
  //             </Card>
  //           </Col>

  //           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
  //             <Card>
  //               <Link
  //                 to="/Kambaz/Courses/5200/Home"
  //                 className="wd-dashboard-course-link text-decoration-none text-dark"
  //               >
  //                 <Card.Img
  //                   variant="top"
  //                   src="/images/cs5200.jpg"
  //                   width="100%"
  //                   height={160}
  //                 />
  //                 <Card.Body>
  //                   <Card.Title className="wd-dashboard-course-title">
  //                     CS5200 SQLITE
  //                   </Card.Title>
  //                   <Card.Text className="wd-dashboard-course-description">
  //                     Database Management Systems
  //                   </Card.Text>
  //                   <Button variant="primary">Go</Button>
  //                 </Card.Body>
  //               </Link>
  //             </Card>
  //           </Col>

  //           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
  //             <Card>
  //               <Link
  //                 to="/Kambaz/Courses/5310/Home"
  //                 className="wd-dashboard-course-link text-decoration-none text-dark"
  //               >
  //                 <Card.Img
  //                   variant="top"
  //                   src="/images/cs5310.jpg"
  //                   width="100%"
  //                   height={160}
  //                 />
  //                 <Card.Body>
  //                   <Card.Title className="wd-dashboard-course-title">
  //                     CS5310 JavaScript
  //                   </Card.Title>
  //                   <Card.Text className="wd-dashboard-course-description">
  //                     Computer Graphics
  //                   </Card.Text>
  //                   <Button variant="primary">Go</Button>
  //                 </Card.Body>
  //               </Link>
  //             </Card>
  //           </Col>

  //           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
  //             <Card>
  //               <Link
  //                 to="/Kambaz/Courses/5008/Home"
  //                 className="wd-dashboard-course-link text-decoration-none text-dark"
  //               >
  //                 <Card.Img
  //                   variant="top"
  //                   src="/images/cs5008.jpg"
  //                   width="100%"
  //                   height={160}
  //                 />
  //                 <Card.Body>
  //                   <Card.Title className="wd-dashboard-course-title">
  //                     CS5008 C
  //                   </Card.Title>
  //                   <Card.Text className="wd-dashboard-course-description">
  //                     Data Structures
  //                   </Card.Text>
  //                   <Button variant="primary">Go</Button>
  //                 </Card.Body>
  //               </Link>
  //             </Card>
  //           </Col>

  //           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
  //             <Card>
  //               <Link
  //                 to="/Kambaz/Courses/5100/Home"
  //                 className="wd-dashboard-course-link text-decoration-none text-dark"
  //               >
  //                 <Card.Img
  //                   variant="top"
  //                   src="/images/cs5100.jpg"
  //                   width="100%"
  //                   height={160}
  //                 />
  //                 <Card.Body>
  //                   <Card.Title className="wd-dashboard-course-title">
  //                     CS5100 Python
  //                   </Card.Title>
  //                   <Card.Text className="wd-dashboard-course-description">
  //                     Foundations of Artificial Intelligence
  //                   </Card.Text>
  //                   <Button variant="primary">Go</Button>
  //                 </Card.Body>
  //               </Link>
  //             </Card>
  //           </Col>

  //           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
  //             <Card>
  //               <Link
  //                 to="/Kambaz/Courses/5400/Home"
  //                 className="wd-dashboard-course-link text-decoration-none text-dark"
  //               >
  //                 <Card.Img
  //                   variant="top"
  //                   src="/images/cs5400.jpg"
  //                   width="100%"
  //                   height={160}
  //                 />
  //                 <Card.Body>
  //                   <Card.Title className="wd-dashboard-course-title">
  //                     CS5400 Node JS
  //                   </Card.Title>
  //                   <Card.Text className="wd-dashboard-course-description">
  //                     Principles of Programming Language
  //                   </Card.Text>
  //                   <Button variant="primary">Go</Button>
  //                 </Card.Body>
  //               </Link>
  //             </Card>
  //           </Col>

  //           <Col className="wd-dashboard-course" style={{ width: "300px" }}>
  //             <Card>
  //               <Link
  //                 to="/Kambaz/Courses/5002/Home"
  //                 className="wd-dashboard-course-link text-decoration-none text-dark"
  //               >
  //                 <Card.Img
  //                   variant="top"
  //                   src="/images/cs5002.jpg"
  //                   width="100%"
  //                   height={160}
  //                 />
  //                 <Card.Body>
  //                   <Card.Title className="wd-dashboard-course-title">
  //                     CS5002 Java
  //                   </Card.Title>
  //                   <Card.Text className="wd-dashboard-course-description">
  //                     Discrete Structures
  //                   </Card.Text>
  //                   <Button variant="primary">Go</Button>
  //                 </Card.Body>
  //               </Link>
  //             </Card>
  //           </Col>
  //         </Row>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>{" "}
      <hr />
      <div id="wd-dashboard-courses">
        <Row xs={1} md={5} className="g-4">
          {courses.map((course) => (
            <Col className="wd-dashboard-course" style={{ width: "300px" }}>
              <Card>
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <Card.Img
                    src="/images/reactjs.jpg"
                    variant="top"
                    width="100%"
                    height={160}
                  />
                  <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">
                      {course.name}{" "}
                    </Card.Title>
                    <Card.Text
                      className="wd-dashboard-course-description overflow-hidden"
                      style={{ height: "100px" }}
                    >
                      {course.description}{" "}
                    </Card.Text>
                    <Button variant="primary"> Go </Button>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
