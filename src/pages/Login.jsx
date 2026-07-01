import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import InputField from "../components/InputField";
import "../styles/login.css";

function Login() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = () => {
    if (!email || !password) {
      alert("Please enter Email and Password.");
      return;
    }

    if (email === user.email && password === user.password) {
      navigate("/account");
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="mobile">
      <div className="loginPage">
        <h1>
          Signin to your
          <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet,
          <br />
          consectetur adipiscing elit,
        </p>

        <InputField
          label={
            <>
              Email Address <span className="required">*</span>
            </>
          }
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <InputField
          label={
            <>
              Password <span className="required">*</span>
            </>
          }
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className={email && password ? "loginBtn active" : "loginBtn"}
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;