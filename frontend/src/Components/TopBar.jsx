import { RotateCcw } from "lucide-react"

export function TopBar() {
  return (
    <div className="bg-[#1a1a1a] border-b border-[#404040] px-4 py-2 flex items-center justify-between h-12 rounded-lg">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-3">
          <div className="w-4 h-4 border border-gray-500 rounded"></div>
          <div className="w-4 h-4 border border-gray-500 rounded"></div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <span className="text-sm text-[#cccccc]">Auto label</span>
          <button className="text-gray-400 hover:text-white p-1 h-8 w-8 flex items-center justify-center">
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  )
}
