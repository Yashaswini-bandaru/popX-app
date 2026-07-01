import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import { UserContext } from "../context/UserContext";
import avatar from "../assets/avatar.jpg";
import "../styles/account.css";

function Account() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.email) {
      navigate("/login");
    }
  }, [user, navigate]);

  return (
    <div className="mobile">
      <div className="accountPage">
        <div className="header">
          <h2>Account Settings</h2>
        </div>

        <div className="profileSection">
          <div className="imageBox">
            <img src={avatar} alt="Profile" />

            <div className="camera">
              <FaCamera />
            </div>
          </div>

          <div className="details">
            <h3>{user.fullName}</h3>
            <p>{user.email}</p>
          </div>
        </div>

        <div className="description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam.
        </div>

        <div className="divider"></div>
        <div className="divider1"></div>
      </div>
    </div>
  );
}

export default Account;