import { MessageSquare, Send, Mail } from "lucide-react"

export function EmailView() {
  return (
    <div className="flex-1 bg-[#1e1e1e] flex flex-col relative rounded-2xl">
      {/* Upgrade Banner */}
      <div className="absolute top-4 right-4 z-10">
        <div className="bg-[#2a2a2a] rounded-lg p-4 border border-[#404040] w-72">
          <h3 className="text-white font-medium mb-3 text-sm">Upgrade to Zero Pro for unlimited AI chat</h3>
          <button className="w-full bg-white text-black hover:bg-gray-200 text-sm h-8 rounded font-medium">
            Start 7 day free trial
          </button>
        </div>
      </div>

      {/* Empty State */}
      <div className="flex-1 flex items-center justify-center ">
        <div className="text-center">
          <div className="w-20 h-20 bg-[#2a2a2a] rounded-lg flex items-center justify-center mb-6 mx-auto">
            <Mail className="h-10 w-10 text-[#666666]" />
          </div>
          <h2 className="text-lg font-medium text-white mb-2">It's empty here</h2>
          <p className="text-[#888888] mb-6 text-sm">Choose an email to view details</p>
          <div className="flex items-center justify-center space-x-3">
            <button className="border border-[#555555] text-gray-300 hover:bg-[#2a2a2a] bg-transparent text-sm h-8 px-4 rounded flex items-center">
              <MessageSquare className="h-3 w-3 mr-2" />
              Zero chat
            </button>
            <button className="bg-[#4a4a4a] hover:bg-[#5a5a5a] text-white text-sm h-8 px-4 rounded flex items-center">
              <Send className="h-3 w-3 mr-2" />
              Send email
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
