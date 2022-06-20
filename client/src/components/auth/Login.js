import axios from "axios";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import '../../assets/css/login.css';
import loginImage from "../../assets/images/login.jpg";
import {Link} from 'react-router-dom';
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [eye, setEye] = useState(false);
  const [passType, setPassType] = useState("password");
  const { getLoggedIn } = useContext(AuthContext);
  const history = useHistory();

  function eyeCheck(){
    setEye(!eye);
    if(eye){
      setPassType("text");
    }
    else{
      setPassType("password");
    }
  }
  async function login(e) {
    e.preventDefault();

    try {
      const loginData = {
        email,
        password,
      };

      await axios.post("http://localhost:5000/auth/login", loginData);
      // await axios.post(
      //   "https://mern-auth-template-tutorial.herokuapp.com/auth/login",
      //   loginData
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
        style={{width:'70vw',height:'80vh',display:'flex',position:'fixed'}}
      >
        <img src={loginImage} alt="#" 
        style={{width: "40vw"}} id="img"
        />
        <div
          className="container mx-4"
          style={{display: 'flex',justifyContent: 'center',flexDirection: 'column'}}
        >
          <form onSubmit={login}>
            <h3>Login to your Account</h3>
            <br />
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address*
              </label>
              <div className="input-group mb-2">
                <span className="input-group-text" id="basic-addon1">
                  <ion-icon name="person"></ion-icon>
                </span>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email"
                  aria-label="email"
                  aria-describedby="basic-addon1"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <label
              for="exampleInputEmail1"
              className="form-label"
              type="password"
              placeholder="Password"
            >
              Password*
            </label>
            <div className="input-group">
              <span className="input-group-text" id="basic-addon2">
                <ion-icon name="key"></ion-icon>
              </span>
              <input
                type={passType}
                className="form-control"
                placeholder="password"
                aria-label="password"
                aria-describedby="basic-addon1"
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
            <div className="my-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" for="exampleCheck1">
                Remember me
              </label>
            </div>
            <button
              className="btn btn-primary d-grid gap-2 col-6 my-1"
              type="submit"
            >
              Login
            </button>
            <div className="py-2">

        don't have a account <Link to="/register" >sign Up</Link>
            </div>
          </form>
        </div>
      </div>
      <div id="box_background2"></div>
    </div>
  );
}

export default Login;
