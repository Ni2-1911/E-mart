import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "../../assets/css/login.css";
import signUpImage from "../../assets/images/signup.png";
import { Link } from "react-router-dom";
function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [eye, setEye] = useState(false);
  const [passType, setPassType] = useState("password");

  function eyeCheck(){
    setEye(!eye);
    if(eye){
      setPassType("text");
    }
    else{
      setPassType("password");
    }
  }

  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  async function register(e) {
    e.preventDefault();

    try {
      const registerData = {
        firstName,
        lastName,
        email,
        password,
        passwordVerify,
      };

      await axios.post("http://localhost:5000/auth/", registerData);
      // await axios.post(
      //   "https://mern-auth-template-tutorial.herokuapp.com/auth/",
      //   registerData
      // );
      await getLoggedIn();
      history.push("/Item");
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div className="body">
      <div id="box_background1"></div>
      <div
        className="shadow-lg bg-white rounded"
        style={{
          width: "70vw",
          height: "80vh",
          display: "flex",
          position: "fixed",
        }}
      >
        <img src={signUpImage} alt="#" style={{ width: "40vw" }} id="img" />
        <div
          className="container mx-4"
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <form onSubmit={register}>
            <h3 className="py-3">Sign Up</h3>

            <div className="row g-3">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name*"
                  aria-label="First name"
                  onChange={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  required
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name*"
                  aria-label="Last name"
                  onChange={(e) => setLastName(e.target.value)}
                  value={lastName}
                  required
                />
              </div>
            </div>

            <div className="my-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email*"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
              <div id="EmailHelpBlock" className="form-text mb-3">
                Must a vaid Email Address
              </div>
            </div>
            <div className="input-group">
            <input
              type={passType}
              id="inputPassword5"
              className="form-control"
              aria-describedby="passwordHelpBlock"
              placeholder="Password*"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
              <span className="input-group-text" id="basic-addon3" onClick={eyeCheck}>
                {
                  (eye)?
                  <ion-icon name="eye-sharp"></ion-icon> :
                  <ion-icon name="eye-off-sharp"></ion-icon>
                }
              </span>
            </div>
            <div id="passwordHelpBlock" className="form-text">
              Your password must be 8-20 characters long.
            </div>
           
            <input
              type="password"
              id="inputPassword5"
              className="form-control my-3"
              aria-describedby="passwordHelpBlock"
              placeholder="Confirm Password*"
              onChange={(e) => setPasswordVerify(e.target.value)}
              value={passwordVerify}
              required
            />
            <button
              className="btn btn-primary d-grid gap-2 col-6 my-3"
              type="submit"
            >
              Sign up
            </button>

            <div className="py-2">
              Already have an account? <Link to="/login">sign-in</Link>
            </div>
          </form>
        </div>
      </div>
      <div id="box_background2"></div>
    </div>
  );
}

export default Register;
