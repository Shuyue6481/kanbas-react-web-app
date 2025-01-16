import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/1234/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cs1234.jpg" width={200} />
            <div>
              <h5> CS1234 React JS </h5>
              <p className="wd-dashboard-course-title">
                Full Stack software developer{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5200/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cs5200.jpg" width={200} />
            <div>
              <h5> CS5200 SQLITE </h5>
              <p className="wd-dashboard-course-title">
                Database Management Systems{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5310/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cs5310.jpg" width={200} />
            <div>
              <h5> CS5310 Java </h5>
              <p className="wd-dashboard-course-title"> Computer Graphics </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5002/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cs5002.jpg" width={200} />
            <div>
              <h5> CS5002 Java </h5>
              <p className="wd-dashboard-course-title"> Discrete Structures </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5008/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cs5008.jpg" width={200} />
            <div>
              <h5> CS5008 C </h5>
              <p className="wd-dashboard-course-title"> Data Structures </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5100/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cs5100.jpg" width={200} />
            <div>
              <h5> CS5100 Python </h5>
              <p className="wd-dashboard-course-title">
                Foundations of Artificial Intelligence{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
        <div className="wd-dashboard-course">
          <Link
            to="/Kambaz/Courses/5400/Home"
            className="wd-dashboard-course-link"
          >
            <img src="/images/cs5400.jpg" width={200} />
            <div>
              <h5> CS5400 React </h5>
              <p className="wd-dashboard-course-title">
                Principles of Programming Language{" "}
              </p>
              <button> Go </button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
