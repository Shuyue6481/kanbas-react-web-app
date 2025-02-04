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

import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputGroup } from "react-bootstrap";

export default function Profile() {
  return (
    <Container className="p-4" style={{ width: "350px" }}>
      <h3 className="mb-3">Profile</h3>

      <Form.Control
        className="mb-2"
        defaultValue="alice"
        placeholder="Username"
      />

      <Form.Control
        className="mb-2"
        defaultValue="123"
        type="text"
        placeholder="Password"
      />

      <Form.Control
        className="mb-2"
        defaultValue="Alice"
        placeholder="First Name"
      />

      <Form.Control
        className="mb-2"
        defaultValue="Wonderland"
        placeholder="Last Name"
      />

      <InputGroup className="mb-2">
        <Form.Control type="date"  />
      </InputGroup>

      <Form.Control
        className="mb-2"
        type="email"
        defaultValue="alice@wonderland.com"
        placeholder="Email"
      />

      <Form.Select className="mb-3" defaultValue="USER">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </Form.Select>

      <Link to="/Kambaz/Account/Signin">
        <Button variant="danger" className="w-100">
          Signout
        </Button>
      </Link>
    </Container>
  );
}
