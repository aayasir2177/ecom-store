import { Link } from "react-router-dom";
const OrderSuccess = () => {
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
      {`Your order has been successfully created!`}
      <Link to={"/register"}>
        <button style={{ padding: 10, marginTop: 20 }}>Register</button>
      </Link>
    </div>
  );
};

export default OrderSuccess;
