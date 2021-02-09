/* eslint-disable default-case */
import { NotificationManager } from "react-notifications";

export const createNotification = (type, message, title) => {
  switch (type) {
    case "info":
      return NotificationManager.info(message, title);
    case "success":
      return NotificationManager.success(message, (title = "Success"));
    case "warning":
      return NotificationManager.warning(message, title);
    case "error":
      return NotificationManager.error(message, (title = "Error!"));
  }
};
