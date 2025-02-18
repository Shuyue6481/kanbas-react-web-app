import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";
// import { courses } from "../Database";
export default function CourseNavigation() {
  const { cid } = useParams();
  const { pathname } = useLocation();
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
  ];

  return (
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {/* <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link" className="list-group-item active border border-0">
        Home
      </Link>
      <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link" className="list-group-item text-danger border border-0">
        Modules
      </Link>

      <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link" className="list-group-item text-danger border border-0">
        Piazza
      </Link>

      <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link" className="list-group-item text-danger border border-0">
        Zoom
      </Link>

      <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link" className="list-group-item text-danger border border-0">
        Assignments
      </Link>

      <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link" className="list-group-item text-danger border border-0">
        Quizzes
      </Link>

      <Link to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link" className="list-group-item text-danger border border-0">
        Grades
      </Link>

      <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link" className="list-group-item text-danger border border-0">
        People
      </Link> */}

      {links.map((link) => {
        const to = `/Kambaz/Courses/${cid}/${link}`;
        return (
          <Link
            key={link}
            to={to}
            id={`wd-course-${link.toLowerCase()}-link`}
            className={`list-group-item border border-0 ${
              pathname.includes(`/${link}`) ? "active" : "text-danger"
            }`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
