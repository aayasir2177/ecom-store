import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Success from "./pages/Success";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import RegistrationFailure from "./pages/RegistrationFailure";
import LoginSuccess from "./pages/LoginSuccess";
import LoginFailure from "./pages/LoginFailure";
import OrderSuccess from "./pages/OrderSuccess";
import OrderFailure from "./pages/OrderFailure";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route path="/products/:category" element={<ProductList />} />

        <Route path="/product/:id" element={<Product />} />

        <Route path="/cart" element={<Cart />} />

        <Route path="/success" element={<Success />} />

        <Route path="/register" element={<Register />} />

        <Route path="/registrationSuccess" element={<RegistrationSuccess />} />

        <Route path="/registrationFailure" element={<RegistrationFailure />} />

        <Route path="/login" element={<Login />} />

        <Route path="/loginSuccess" element={<LoginSuccess />} />

        <Route path="/loginFailure" element={<LoginFailure />} />

        <Route path="/orderSuccess" element={<OrderSuccess />} />

        <Route path="/orderFailure" element={<OrderFailure />} />
      </Routes>
    </Router>
  );
};

export default App;
