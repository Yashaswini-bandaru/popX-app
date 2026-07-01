import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/welcome.css";

function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="mobile">
      <div className="welcomePage">

        <div className="welcomeContent">

          <h1>Welcome to PopX</h1>

          <p>
            Lorem ipsum dolor sit amet,
            <br />
            consectetur adipiscing elit,
          </p>

          <Button
            text="Create Account"
            className="primaryBtn"
            onClick={() => navigate("/signup")}
          />

          <Button
            text="Already Registered? Login"
            className="secondaryBtn"
            onClick={() => navigate("/login")}
          />

        </div>

      </div>
    </div>
  );
}

export default Welcome;