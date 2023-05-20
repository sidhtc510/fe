import React, { useContext } from "react";
import { Context } from "../../context";

export default function Notification({notificationContent}) {
  const { notification, setNotification } = useContext(Context);

  const isNotificationActive = notification
    ? "notification notificationActive"
    : "notification";

  if (notification) {
    setTimeout(() => {
      setNotification(false);
    }, 3500);
  }

  return (
    <div className={isNotificationActive}>
      <p>{notificationContent}</p>
    </div>
  );
}
