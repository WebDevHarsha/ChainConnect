import React from 'react'

function ChatBox() {
  return (
      <div className="dark flex flex-col h-screen bg-gray-800 rounded-lg shadow-lg overflow-hidden">
      <div className="flex-1 overflow-auto p-4 space-y-4 md:p-6 lg:p-8 xl:p-10 2xl:p-12">
        <div className="flex items-end space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
          <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
              JP
            </span>
          </span>
          <div className="p-3 rounded-lg bg-gray-700 text-white md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            <p>Hello there! How can I assist you today?</p>
          </div>
        </div>
        <div className="flex items-end space-x-2 justify-end md:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
          <div className="p-3 rounded-lg bg-indigo-500 text-white md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            <p>I need help with my order.</p>
          </div>
          <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
              U
            </span>
          </span>
        </div>
        <div className="flex items-end space-x-2 md:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
          <span className="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9 md:h-12 md:w-12 lg:h-16 lg:w-16 xl:h-20 xl:w-20 2xl:h-24 2xl:w-24">
            <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
              JP
            </span>
          </span>
          <div className="p-3 rounded-lg bg-gray-700 text-white md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
            <p>Of course! Could you please provide me with your order number?</p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 p-4 fixed bottom-0 w-full md:p-6 lg:p-8 xl:p-10 2xl:p-12">
        <div className="flex space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 2xl:space-x-10">
          <input
            className="flex h-10 w-full border border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 flex-1 rounded-lg bg-gray-700 text-white md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
            placeholder="Type your message..."
          />
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 px-4 py-2 w-14 h-14 rounded-full bg-indigo-500 text-white md:w-16 md:h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 2xl:w-28 2xl:h-28">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 2xl:w-14 2xl:h-14"
            >
              <path d="m22 2-7 20-4-9-9-4Z" />
              <path d="M22 2 11 13" />
            </svg>
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default ChatBox