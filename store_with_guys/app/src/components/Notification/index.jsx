import React, { useContext } from "react";
import { Context } from "../../context";

export default function Notification() {
  const { notification, setNotification } = useContext(Context);

  const isNotificationActive = notification.state
    ? "notification notificationActive"
    : "notification";

  if (notification.state) {
    setTimeout(() => {
      setNotification(notification.state = false);
    }, 3500);
  }

  return (
    <div className={isNotificationActive}>
      <p>{notification.content}</p>
    </div>
  );
}


// для дальнейшкго использования окна уведомдения, в любом компоненте, добавь в обработчик     
// setNotification({state: true, content:`some content`});
// предварительно передай пропсом (или через context) setNotification
