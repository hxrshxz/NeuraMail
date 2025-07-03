import { RotateCcw } from "lucide-react";
import { useEffect } from "react";
import axios from "axios";
import Switch2 from "./ui/Switch2";

export function TopBar() {
  const fetchEmailDetails = async () => {
    const token = localStorage.getItem("access_token");

    const res = await axios.get(
      "https://gmail.googleapis.com/gmail/v1/users/me/messages",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          maxResults: 20,
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

        const subjectHeader = res.data.payload.headers.find(
          (h) => h.name === "Subject"
        );
        const subject = subjectHeader?.value || "(No Subject)";

        return {
          id: msg.id,
          subject,
        };
      })
    );

    setEmails(messages);
  };

  return (
    <div className="bg-[#1a1a1a] w-140 px-4 py-2 flex h-12 rounded-t-2xl">

      <div className="flex justify-between w-full space-x-4">
      <div className="flex items-center  space-x-4">
        <div className="flex items-center space-x-3">
        
      </div>
          <div className="w-4 h-4 border border-gray-500 rounded"></div>
          <div className="w-4 h-4 border border-gray-500 rounded"></div>
        </div>
        <div className="flex items-center space-x-3">
          {/* <div className="w-2 h-2 bg-green-500 rounded-full"></div> */}
          <Switch2 />
          <span className="text-sm text-[#cccccc]">Auto label</span>
          <button
            onClick={fetchEmailDetails}
            className="text-gray-400 hover:text-white p-1 h-8 w-8 flex items-center justify-center hover:cursor-pointer"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
