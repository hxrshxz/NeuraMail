import { Beaker, Search } from "lucide-react";
import axios from "axios";
import { useEffect, useState } from "react";

const emails = [
  {
    id: 1,
    sender: "Google Cloud",
    subject: "Explore Google Cloud's application hosting options",
    time: "1:43 AM",
    avatar: "G",
    avatarColor: "bg-blue-500",
  },
  {
    id: 2,
    sender: "Heroku",
    subject: "Welcome to Heroku! Let's Build Something Amazing",
    time: "10:33 PM",
    avatar: "G",
    avatarColor: "bg-blue-500",
  },

  {
    id: 3,
    sender: "GitHub Education",
    subject: "Unlock summer wins — Copilot Agent, free laptops & more",
    time: "Jun 30",
    avatar: "G",
    avatarColor: "bg-gray-500",
  },
  {
    id: 3,
    sender: "GitHub Education",
    subject: "Unlock summer wins — Copilot Agent, free laptops & more",
    time: "Jun 30",

    avatar: "H",
    avatarColor: "bg-purple-500",
  },
  {
    id: 4,
    sender: "Internshala Trainings",
    subject: "We have update linked to your profile",
    time: "Jun 30",
    avatar: "I",
    avatarColor: "bg-green-500",
    hasBlueIndicator: true,
  },
  {
    id: 5,
    sender: "ISP Team from Internshala",
    subject: "Update: Your profile is a good fit",
    time: "Jun 30",
    avatar: "I",
    avatarColor: "bg-green-500",
  },
  {
    id: 6,
    sender: "HirePro",
    subject: "Registration Pending | Flipkart GRID 7.0",
    time: "Jun 30",
    avatar: "H",
    avatarColor: "bg-orange-500",
  },
  {
    id: 7,
    sender: "ASUS India",
    subject: "⚡ Power Up. Game On. Time to Level up with ASUS Gaming...",
    time: "Jun 30",
    avatar: "A",
    avatarColor: "bg-red-500",
    hasBlueIndicator: true,
  },
  {
    id: 8,
    sender: "Do Not Reply NSUT",
    subject: "[NSUT] Awards achievements and organizational efforts of...",
    time: "Jun 30",
    avatar: "🏆",
    avatarColor: "bg-yellow-600",
  },
  {
    id: 9,
    sender: "Brian",
    subject: "I almost forgot 😅",
    time: "Jun 30",
    avatar: "B",
    avatarColor: "bg-blue-600",
    hasOrangeIndicator: true,
  },
  {
    id: 10,
    sender: "GDG Noida",
    subject: "Summer Edition: Events, Pride and Growth!",
    time: "Jun 30",
    avatar: "G",
    avatarColor: "bg-green-600",
    hasBlueIndicator: true,
  },
  {
    id: 11,
    sender: "Brian",
    subject: "harsh, Your Custom Plan #T751276301 is ready! ✓",
    time: "Jun 30",
    avatar: "B",
    avatarColor: "bg-blue-600",
  },
  {
    id: 12,
    sender: "Brian",
    subject: "harsh, Your Custom Plan #T751276301 is ready! ✓",
    time: "Jun 30",
    avatar: "B",
    avatarColor: "bg-blue-600",
  },
];

export function EmailList() {
  const [emails, setEmails] = useState([]);

  useEffect(() => {
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
          // console.log(res.data)
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

    fetchEmailDetails();
  }, []);

  return (
    <div className="w-140 bg-[#1a1a1a] flex flex-col">
      {/* Search Bar */}
      <div className="p-3 border-b border-[#404040]">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            placeholder="Search & Filter"
            className="w-full pl-10 pr-16 bg-black-900 border border-[#555555] text-white placeholder-gray-400 h-8 text-sm rounded px-3 focus:outline-none focus:border-gray-400"
          />
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <span className="text-xs text-gray-400 border border-gray-500 px-1.5 py-0.5 rounded">
              Ctrl K
            </span>
          </div>
        </div>
      </div>

      {/* Email List */}
      <div className="flex-1 overflow-y-auto">
        {emails.map((email) => (
          <div
            key={email.id}
            className="p-3 hover:bg-[#3a3a3a] cursor-pointer transition-colors"
          >
            <div className="flex items-start space-x-3">
              <div
                className={`w-7 h-7 ${email.avatarColor} rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0`}
              >
                {email.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center space-x-2">
                    <h3 className="font-medium text-white truncate text-sm">
                      {email.sender}
                    </h3>
                    {email.hasBlueIndicator && (
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                    )}
                    {email.hasOrangeIndicator && (
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    )}
                  </div>
                  <span className="text-xs text-[#888888] flex-shrink-0">
                    {email.time}
                  </span>
                </div>
                <p className="text-gray-400 text-sm truncate">
                  {email.subject}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


