import {
  Search,
  Filter,
  Mail,
  Star,
  Paperclip,
  Clock,
  Edit,
  Inbox,
  FileText,
  Send,
  Archive,
  Shield,
  Trash,
} from "lucide-react";

export function SearchModal({ search, setSearch, handleSearch }) {
  return (
    <div className="w-full max-w-md mx-auto backdrop-blur-sm text-gray-300 rounded-xl border border-gray-700/50 shadow-2xl shadow-black/20 bg-[#1a1a1a]">
      {/* Search Input */}
      <div className="p-4 ">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
          <input
            autoFocus
            // placeholder="Type to search..."
            value={search}
            onChange={handleSearch}
            className="w-full p-2 text-sm rounded bg-[#1a1a1a] border border-gray-600 focus:outline-none"
          />
        </div>
      </div>

      {/* Search & Filter Section */}
      <div className="p-2">
        <div className="px-2 py-1 text-xs font-medium text-gray-400 uppercase tracking-wide">
          Search & Filter
        </div>
        <div className="space-y-1 mt-2">
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-colors group">
            <Search className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm group-hover:text-gray-100 transition-colors">
              Search Emails
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-colors group">
            <Filter className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm group-hover:text-gray-100 transition-colors">
              Filter Emails
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-colors group">
            <Mail className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm group-hover:text-gray-100 transition-colors">
              Unread Emails
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-colors group">
            <Star className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
            <span className="text-sm group-hover:text-gray-100 transition-colors">
              Starred Emails
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-colors group">
            <Paperclip className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
            <span className="text-sm group-hover:text-gray-100 transition-colors">
              With Attachments
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-colors bg-gray-800 border-l-2 border-blue-500">
            <Clock className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-100">Last 7 Days</span>
          </div>
        </div>
      </div>

      {/* <Separator className="bg-gray-700" /> */}

      {/* Mail Section */}
      <div className="p-2">
        <div className="px-2 py-1 text-xs font-medium text-gray-400 uppercase tracking-wide">
          Mail
        </div>
        <div className="space-y-1 mt-2">
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-colors group">
            <Edit className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm group-hover:text-gray-100 transition-colors">
              Compose Email
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-colors group">
            <Inbox className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
            <span className="text-sm group-hover:text-gray-100 transition-colors">
              Inbox
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-colors group">
            <FileText className="w-4 h-4 text-gray-400 group-hover:text-yellow-400 transition-colors" />
            <span className="text-sm group-hover:text-gray-100 transition-colors">
              Drafts
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-colors group">
            <Send className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
            <span className="text-sm group-hover:text-gray-100 transition-colors">
              Sent
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-colors group">
            <Archive className="w-4 h-4 text-gray-400 group-hover:text-purple-400 transition-colors" />
            <span className="text-sm group-hover:text-gray-100 transition-colors">
              Archive
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-colors group">
            <Shield className="w-4 h-4 text-gray-400 group-hover:text-orange-400 transition-colors" />
            <span className="text-sm group-hover:text-gray-100 transition-colors">
              Spam
            </span>
          </div>
          <div className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-800 cursor-pointer transition-colors group">
            <Trash className="w-4 h-4 text-gray-400 group-hover:text-red-400 transition-colors" />
            <span className="text-sm group-hover:text-gray-100 transition-colors">
              Bin
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
