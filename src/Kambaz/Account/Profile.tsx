// import { Link } from "react-router-dom";
// export default function Profile() {
//   return (
//     <div id="wd-profile-screen">
//       <h3>Profile</h3>
//       <input
//         defaultValue="alice"
//         placeholder="username"
//         className="wd-username"
//       />
//       <br />
//       <input
//         defaultValue="123"
//         placeholder="password"
//         type="password"
//         className="wd-password"
//       />
//       <br />
//       <input defaultValue="Alice" placeholder="First Name" id="wd-firstname" />
//       <br />
//       <input
//         defaultValue="Wonderland"
//         placeholder="Last Name"
//         id="wd-lastname"
//       />
//       <br />
//       <input defaultValue="2000-01-01" type="date" id="wd-dob" />
//       <br />
//       <input defaultValue="alice@wonderland" type="email" id="wd-email" />
//       <br />
//       <select defaultValue="FACULTY" id="wd-role">
//         <option value="USER">User</option> <option value="ADMIN">Admin</option>
//         <option value="FACULTY">Faculty</option>{" "}
//         <option value="STUDENT">Student</option>
//       </select>
//       <br />
//       <Link to="/Kambaz/Account/Signin">Sign out</Link>
//     </div>
//   );
// }

import {Button, Container, FormControl } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };
  const signout = () => {
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Container className="p-4" style={{ width: "350px" }}>
      <h3 className="mb-3">Profile</h3>

      {profile && (
        <div>
          <FormControl
            defaultValue={profile.username}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <FormControl
            defaultValue={profile.password}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <FormControl
            defaultValue={profile.firstName}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <FormControl
            defaultValue={profile.lastName}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <FormControl
            defaultValue={profile.dob}
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
            type="date"
          />
          <FormControl
            defaultValue={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <select
            onChange={(e) =>
              setProfile({
                ...profile,
                role: e.target.value,
              })
            }
            className="form-control mb-2"
            id="wd-role"
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <Button onClick={signout}> Sign out </Button>
        </div>
      )}
    </Container>
  );
}
