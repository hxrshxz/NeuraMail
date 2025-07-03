export function formatEmailTime(rawDate) {
    const messageDate = new Date(rawDate);
    const now = new Date();

    const isSameDay =
      messageDate.getDate() === now.getDate() &&
      messageDate.getMonth() === now.getMonth() &&
      messageDate.getFullYear() === now.getFullYear();

    return isSameDay
      ? messageDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      : messageDate.toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        });
  }