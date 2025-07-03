// components/EmailList/EmailList.jsx

import { useEffect, useState } from "react";
import axios from "axios";
// import { formatEmailTime } from "./utils";
import { SearchBar } from "./SearchBar";
import { EmailItem } from "./EmailItem";

export function EmailList() {
  const [emails, setEmails] = useState([]);
  const [search, setSearch] = useState(""); // 1. Add search state

  

  function formatEmailTime(rawDate) {
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

  useEffect(() => {
    const fetchEmailDetails = async () => {
      const token = localStorage.getItem("access_token");

      const res = await axios.get(
        "https://gmail.googleapis.com/gmail/v1/users/me/messages",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const messageDetails = res.data.messages;

      const messages = await Promise.all(
        messageDetails.map(async (msg) => {
          const res = await axios.get(
            `https://gmail.googleapis.com/gmail/v1/users/me/messages/${msg.id}`,
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          const fromHeader = res.data.payload.headers.find(
            (h) => h.name === "From"
          );
          let from = fromHeader?.value || "(No From)";
          from = from.split("<")[0];

          const dateHeader = res.data.payload.headers.find(
            (h) => h.name === "Date"
          );
          let date = dateHeader?.value || "(No Date)";
          date = formatEmailTime(date);

          const subjectHeader = res.data.payload.headers.find(
            (h) => h.name === "Subject"
          );
          const subject = subjectHeader?.value || "(No Subject)";

          return {
            id: msg.id,
            subject,
            from,
            time: date,
            avatar: from.trim()[0].toUpperCase(),
            avatarColor: "bg-gray-600",
          };
        })
      );

      setEmails(messages);
    };

    fetchEmailDetails();
  }, []);

  return (
    <div className="w-140 bg-[#1a1a1a] flex-1 flex flex-col">
      <SearchBar search={search} setSearch={setSearch} />
      <div className="flex-1 overflow-y-auto">
        {emails.map((email) => (
          <EmailItem key={email.id} email={email} />
        ))}
      </div>
    </div>
  );
}
