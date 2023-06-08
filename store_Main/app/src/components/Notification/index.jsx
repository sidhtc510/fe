import React, { useContext } from "react";
import { Context } from "../../context";

export default function Notification() {
  const { notification, setNotification } = useContext(Context);

  const isNotificationActive = notification.state
    ? "notification notificationActive"
    : "notification";

  if (notification.state) {
    setTimeout(() => {
      setNotification({ state: false, content: "" });
    }, 3500);
  }

  return (
    <div className={isNotificationActive}>
      <p>{notification.content}</p>
    </div>
  );
}

// импортируй этот компонент в App.jsx - <Notofication />
// изначальное состояние в App.jsx   const [notification, setNotification] = useState({state:false, content:''});
// для дальнейшкго использования окна уведомдения, в любом компоненте, добавь в обработчик
// setNotification({state: true, content:`some content`});
// предварительно передай через context обработчик состояния setNotification - const { setNotification } = useContext(Context);
