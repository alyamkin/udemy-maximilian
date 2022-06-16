import { useRef, useContext, useState, Fragment } from "react";
import AuthContext from "../../store/auth-context";

import NotificationMessage from "../UI/NotificationMessage";
import classes from "./ProfileForm.module.css";

const API_KEY = "AIzaSyC5k1oJKbyEGSsBJOQewRWuTL6H8GTK_lk";

const ProfileForm = () => {
  const [notificationMessage, setNotificationMessage] = useState("");
  const newPasswordInputRef = useRef();

  const authContext = useContext(AuthContext);

  const closeNotificationHandler = () => {
    setNotificationMessage("");
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    // add validation
    fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:update?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          password: enteredNewPassword,
          idToken: authContext.token,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        }
      })
      .then((data) => {
        setNotificationMessage("Password was changed successfully");
      })
      .catch((err) => {
        setNotificationMessage(err.message);
      });
  };

  return (
    <Fragment>
      {notificationMessage && (
        <NotificationMessage
          message={notificationMessage}
          onCloseNotification={closeNotificationHandler}
        />
      )}
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="new-password">New Password</label>
          <input type="password" id="new-password" ref={newPasswordInputRef} />
        </div>
        <div className={classes.action}>
          <button>Change Password</button>
        </div>
      </form>
    </Fragment>
  );
};

export default ProfileForm;
