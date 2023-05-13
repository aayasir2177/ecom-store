import { Link } from "react-router-dom";
const LoginFailure = () => {
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
      {`Incorrect Username or Password! Please Try Again...`}
      <Link to={"/login"}>
        <button style={{ padding: 10, marginTop: 20 }}>Login</button>
      </Link>
    </div>
  );
};

export default LoginFailure;
