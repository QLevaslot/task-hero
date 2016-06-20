/**
 * Extending notification API
 */
const notificationAPI = {
  requestPermission: () => {
    Notification.requestPermission();
  },
  /**
   * Check the notification permissions
   * @returns {String} granted
   */
  checkPermission: () => {
    let result;
    if (Notification.permission) {
      // Firefox
      result = Notification.permission;
    } else {
      // Chrome
      result = (new Notification()).permission;
    }
    console.info('notification permission: ', result);
    return result;
  },
  sendNotification: (data) => {
    const notification = new Notification('Notification Spam', {
      body: data.body,
      icon: data.icon
    });
    notification.onclick = () => {
      data.onclick();
    };
    return notification;
  }
};

export default notificationAPI;
