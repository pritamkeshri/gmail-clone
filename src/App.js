import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { sendMessageIsOpen } from "./features/mailSlice";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Mail from "./Mail";
import EmailList from "./EmailList";
import SendMail from "./SendMail";
import { useDispatch, useSelector } from "react-redux";
import { login, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";

function App() {
  const isSendMessage = useSelector(sendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
          })
        );
      }
    });
  }, []);
  return (
    <Router>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div className="app_body">
            <Sidebar />

            <Switch>
              <Route path="/mail">
                <Mail />
              </Route>
              <Route path="/">
                <EmailList />
              </Route>
            </Switch>
          </div>
          {isSendMessage && <SendMail />}
          <h2>Lets build gmail</h2>
        </div>
      )}
    </Router>
  );
}

export default App;
