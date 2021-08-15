import { Button } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth, provider } from "./firebase";
import "./Login.css";

function Login() {

    const dispatch = useDispatch();

  const signIn = () => {
    auth.signInWithPopup(provider)
        .then(({user}) => {
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL
            }))
        })
        .catch(err => alert(err.message))
  };
  return (
    <div className="login">
      <div className="login_container">
        <img src="https://cdn.vox-cdn.com/thumbor/Tbqi3ZF9Qz0fTJIUvkgQe3FdN0k=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21939811/newgmaillogo.jpg" />
        <Button onClick={signIn} variant="contained" color="primary">
          Login
        </Button>
      </div>
    </div>
  );
}

export default Login;
