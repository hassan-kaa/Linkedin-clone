import { Button, IconButton, TextField } from "@mui/material";
import styled from "styled-components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { auth } from "../firebase/firebase";
function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };
  const signUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(navigate("/"))
      .catch((err) => console.log(err));
  };
  return (
    <MyContainer>
      <Link to={"/login"}>
        <img
          src="https://brandlogos.net/wp-content/uploads/2016/06/linkedin-logo-512x512.png"
          alt="logo"
          width={48}
          height={48}
        />{" "}
      </Link>

      <TextField
        label="Email"
        variant="outlined"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <TextField
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        label="Password"
        variant="outlined"
        type={showPassword ? "text" : "password"}
      />
      <IconButton onClick={handleClickShowPassword}>
        {showPassword ? <VisibilityOff /> : <Visibility />}
      </IconButton>

      <Button onClick={signUp}>Sign up</Button>
      <p>Don't have an account yet ? R</p>
      <Link to={"login"}>Register now</Link>
    </MyContainer>
  );
}

export default Login;
const MyContainer = styled.div`
  padding: 12px;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  margin: 16px;
  max-width: 40%;
  left: 50%;
  * {
    margin-top: 8px;
  }
`;
