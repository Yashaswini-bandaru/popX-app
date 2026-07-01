import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import InputField from "../components/InputField";
import Button from "../components/Button";
import "../styles/signup.css";

function Signup() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const createAccount = () => {
    const { fullName, phone, email, password } = formData;

    if (!fullName || !phone || !email || !password) {
      alert("Please fill all required fields.");
      return;
    }

    setUser(formData);

    navigate("/login");
  };

  return (
    <div className="mobile">
      <div className="signupPage">
        <h1>
          Create your
          <br />
          PopX account
        </h1>

        <InputField
          label={
            <>
              Full Name <span className="required">*</span>
            </>
          }
          placeholder="Marry Doe"
          value={formData.fullName}
          onChange={(e) => handleChange("fullName", e.target.value)}
        />

        <InputField
          label={
            <>
              Phone Number <span className="required">*</span>
            </>
          }
          placeholder="9876543210"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
        />

        <InputField
          label={
            <>
              Email Address <span className="required">*</span>
            </>
          }
          placeholder="marry@example.com"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <InputField
          label={
            <>
              Password <span className="required">*</span>
            </>
          }
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={(e) => handleChange("password", e.target.value)}
        />

        <InputField
          label="Company Name"
          placeholder="PopX"
          value={formData.company}
          onChange={(e) => handleChange("company", e.target.value)}
        />

        <div className="agencySection">
          <p>
            Are you an Agency?<span>*</span>
          </p>

          <div className="radioGroup">
            <label>
              <input
                type="radio"
                checked={formData.agency === "Yes"}
                onChange={() => handleChange("agency", "Yes")}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                checked={formData.agency === "No"}
                onChange={() => handleChange("agency", "No")}
              />
              No
            </label>
          </div>
        </div>

        <div className="signupButton">
          <Button
            text="Create Account"
            className="primaryBtn"
            onClick={createAccount}
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;