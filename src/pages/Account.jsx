import "../styles/account.css";
import avatar from "../assets/avatar.jpg";
import { FaCamera } from "react-icons/fa";

function Account() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

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
            <h3>{user.fullName || "Marry Doe"}</h3>
            <p>{user.email || "Marry@Gmail.Com"}</p>
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