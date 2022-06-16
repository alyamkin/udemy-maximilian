import classes from "./NotificationMessage.module.css";

const NotificationMessage = (props) => {
  return (
    <div className={classes.notification}>
      <p className={classes["notification__message"]}>{props.message}</p>
      <button
        className={classes["notification__close"]}
        onClick={props.onCloseNotification}
      >
        &#x2715;
      </button>
    </div>
  );
};

export default NotificationMessage;
