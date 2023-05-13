import { Link } from "react-router-dom";
const RegistrationSuccess = () => {
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
      {`Your account has been successfully created.`}
      <Link to={"/"}>
        <button style={{ padding: 10, marginTop: 20 }}>Go to Homepage</button>
      </Link>
    </div>
  );
};

export default RegistrationSuccess;
