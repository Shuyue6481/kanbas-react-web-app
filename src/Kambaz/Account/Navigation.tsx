// import { Link } from "react-router-dom";
// export default function AccountNavigation() {
//   return (
//     <div id="wd-account-navigation">
//       <Link to={`/Kambaz/Account/Signin`}> Signin </Link> <br />
//       <Link to={`/Kambaz/Account/Signup`}> Signup </Link> <br />
//       <Link to={`/Kambaz/Account/Profile`}> Profile </Link> <br />
//     </div>
//   );
// }

import { Link} from "react-router-dom";
// import { useSelector } from "react-redux";
export default function AccountNavigation() {
  // const { currentUser } = useSelector((state: any) => state.accountReducer);
  // const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  // const { pathname } = useLocation();

  return (
    <div
      id="wd-courses-navigation"
      className="wd list-group fs-5 rounded-0 me-4"
    >
      <Link
        to="/Kambaz/Account/Signin"
        id="wd-course-home-link"
        className="list-group-item active border border-0"
      >
        Signin
      </Link>
      <Link
        to="/Kambaz/Account/Signup"
        id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"
      >
        Signup
      </Link>

      <Link
        to="/Kambaz/Account/Profile"
        id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"
      >
        Profile
      </Link>
    </div>
  );
}
