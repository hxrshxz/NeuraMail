export function EmailItem({ email }) {
  return (
    <div
      key={email.id}
      className="p-3 hover:bg-[#3a3a3a] cursor-pointer transition-colors"
    >
      <div className="flex items-start space-x-3">
        <div
          className={`w-7 h-7 ${email.avatarColor} rounded-full flex items-center justify-center text-white text-xs font-medium flex-shrink-0 mt-2`}
        >
          {email.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <div className="flex items-center space-x-2">
              <h3 className="text-white font-bold truncate text-sm">
                {email.from}
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
          <p className="text-gray-400 text-sm truncate">{email.subject}</p>
        </div>
      </div>
    </div>
  );
}
