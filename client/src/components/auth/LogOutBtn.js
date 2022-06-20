import axios from "axios";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Button } from "react-bootstrap";
function LogOutBtn() {
  const { getLoggedIn } = useContext(AuthContext);

  const history = useHistory();

  async function logOut() {
    await axios.get("http://localhost:5000/auth/logout");
    // await axios.get(
    //   "https://mern-auth-template-tutorial.herokuapp.com/auth/logout"
    // );
    await getLoggedIn();
    history.push("/login");
  }

  return (
    <Button
      variant="outline"
      style={{ color: "#20BEAD", borderColor: "#20BEAD" }}
      onClick={logOut}
    >
      Log Out
    </Button>
  );
}

export default LogOutBtn;
