import { Link } from "react-router-dom";
const RegistrationFailure = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {`User Already Exists! Please Try Again...`}
      <Link to={"/register"}>
        <button style={{ padding: 10, marginTop: 20 }}>Register</button>
      </Link>
    </div>
  );
};

export default RegistrationFailure;
