import {
  Inbox,
  Edit3,
  Send,
  Archive,
  Trash2,
  AlertTriangle,
  Plus,
  Phone,
  MessageSquare,
  Settings,
  CheckCircle,
  FileText,
  MoreHorizontal,
} from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";

export function Sidebar() {
  const [spam, setSpam] = useState(0);
  const [bin, setBin] = useState(0);
  const [inbox, setInbox] = useState(0);
  const [sent, setSent] = useState(0);
  const [drafts, setDrafts] = useState(0);

  useEffect(() => {
    const token = localStorage.getItem("access_token");

    const fetchLabelCount = async (labelId) => {
      const res = await axios.get(
        `https://gmail.googleapis.com/gmail/v1/users/me/labels/${labelId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return res.data.messagesTotal;
    };

    const fetchSpamAndBinCounts = async () => {
      try {
        const spamCount = await fetchLabelCount("SPAM");
        setSpam(spamCount);

        const binCount = await fetchLabelCount("TRASH");
        setBin(binCount);

        const inboxCount = await fetchLabelCount("INBOX");
        setInbox(inboxCount);

        const sentCount = await fetchLabelCount("SENT");
        setSent(sentCount);

        const draftsCount = await fetchLabelCount("DRAFT");
        setDrafts(draftsCount);
      } catch (error) {
        console.error("Error fetching label counts:", error);
      }
    };

    fetchSpamAndBinCounts();
  }, []);

  return (
    <div className="w-60 bg-[#111113] flex flex-col h-screen ">
      <div className="flex items-center space-x-2">
        <button className="hover:text-white p-1 h-6 w-6 flex items-center ml-4 mt-2 justify-center bg-[#2c2c2c] rounded hover:cursor-pointer">
          <Plus className="h-0 w-0" />
        </button>
        <button className="text-gray-400 hover:text-white p-1 h-7 w-7 flex items-center ml-0 mt-2 justify-center bg-[#2c2c2c] rounded hover:cursor-pointer">
          <Plus className="h-4.5 w-4.5" />
        </button>
        <button className="text-gray-400 hover:text-white p-1 h-8 w-8 ml-26 hover:cursor-pointer hover:bg-[#2c2c2c] rounded mt-2 flex items-center justify-center">
          <MoreHorizontal className="h-5.5 w-5.5" />
        </button>
      </div>
      {/* User Profile */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="font-medium text-white text-sm">Harsh Mastic</h3>
          <p className="text-xs text-[#888888]">harshmastic@gmail.com</p>
        </div>
        <div className="flex items-center space-x-2 mb-4">
          <CheckCircle className="h-3 w-3 text-blue-500" />
          <span className="text-xs text-blue-500 font-medium">
            GET VERIFIED
          </span>
        </div>

        {/* New Email Button */}
        <button className="w-full bg-[#202020] hover:bg-[#202020] text-white text-sm h-8 flex items-center justify-start px-3 rounded">
          <Edit3 className="h-3 w-3 mr-2" />
          New email
        </button>
      </div>

      {/* Core Section */}
      <div className="px-4 mb-4 mt-4">
        <h4 className="text-xs font-medium text-[#888888] uppercase tracking-wider mb-2 ml-2">
          Core
        </h4>
        <nav className="space-y-1">
          <button className="w-full flex items-center justify-between text-[#cccccc] hover:text-white hover:bg-[#404040] h-8 text-sm px-2 rounded ml">
            <div className="flex items-center">
              <Inbox className="h-3 w-3 mr-4" />
              Inbox
            </div>
            <span className="bg-[#202020] text-gray-300 text-xs px-2 py-0.5 rounded">
              {inbox}
            </span>
          </button>
          <button className="w-full flex items-center justify-between text-[#cccccc] hover:text-white hover:bg-[#404040] h-8 text-sm px-2 rounded">
            <div className="flex items-center">
              <FileText className="h-3 w-3 mr-4" />
              Drafts
            </div>
            <span className="bg-[#202020] text-gray-300 text-xs px-2 py-0.5 rounded">
              {drafts}
            </span>
          </button>

          <button className="w-full flex items-center justify-between text-[#cccccc] hover:text-white hover:bg-[#404040] h-8 text-sm px-2 rounded">
            <div className="flex items-center">
              <Send className="h-3 w-3 mr-4" />
              Sent
            </div>
            <span className="bg-[#202020] text-gray-300 text-xs px-2 py-0.5 rounded">
              {sent}
            </span>
          </button>
        </nav>
      </div>

      {/* Management Section */}
      <div className="px-4 mb-4">
        <h4 className="text-xs font-medium text-[#888888] uppercase tracking-wider mb-2">
          Management
        </h4>
        <nav className="space-y-1">
          <button className="w-full flex items-center justify-start text-[#cccccc] hover:text-white hover:bg-[#404040] h-8 text-sm px-2 rounded">
            <Archive className="h-3 w-3 mr-4" />
            Archive
          </button>
          <button className="w-full flex items-center justify-between text-[#cccccc] hover:text-white hover:bg-[#404040] h-8 text-sm px-2 rounded">
            <div className="flex items-center">
              <AlertTriangle className="h-3 w-3 mr-4" />
              Spam
            </div>
            <span className="bg-[#202020] text-gray-300 text-xs px-2 py-0.5 rounded">
              {spam}
            </span>
          </button>
          <button className="w-full flex items-center justify-between text-[#cccccc] hover:text-white hover:bg-[#404040] h-8 text-sm px-2 rounded">
            <div className="flex items-center">
              <Trash2 className="h-3 w-3 mr-4" />
              {bin}
            </div>
            <span className="bg-[#202020] text-gray-300 text-xs px-2 py-0.5 rounded">
              0
            </span>
          </button>
        </nav>
      </div>

      <div className="flex flex-col justify-between h-full"> {/* Wrapping labels and bottom actions*/}
        {/* Labels Section */}
        <div className="px-4 mb-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-medium text-[#888888] uppercase tracking-wider ml-2">
              Labels
            </h4>
            <button className="text-gray-400 hover:text-white p-0 h-4 w-4 flex items-center justify-center hover:cursor-pointer mr-2.5">
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Bottom Actions */}
        <div className="flex flex-col p-4   space-y-1">
          <button className="w-full flex items-center justify-start text-[#cccccc] hover:text-white hover:bg-[#404040] h-8 text-sm px-2 rounded">
            <Phone className="h-3 w-3 mr-4" />
            Live Support
          </button>
          <button className="w-full flex items-center justify-start text-[#cccccc] hover:text-white hover:bg-[#404040] h-8 text-sm px-2 rounded">
            <MessageSquare className="h-3 w-3 mr-4" />
            Feedback
          </button>
          <button className="w-full flex items-center justify-start text-[#cccccc] hover:text-white hover:bg-[#404040] h-8 text-sm px-2 rounded">
            <Settings className="h-3 w-3 mr-4" />
            Settings
          </button>
        </div>
      </div>
    </div>
  );
}
