import React from "react";

function ReviewCard({first, last, desc}) {
  return (
    <div
      className="border shadow-sm dark bg-gray-800 text-white rounded-lg p-6 w-full max-w-md"
      data-v0-t="card"
    >
      <div className="flex-col space-y-1.5 p-6 flex items-center gap-4">
        <span className="relative flex shrink-0 overflow-hidden w-14 h-14 border-2 border-white rounded-full">
          <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
            {first}
          </span>
        </span>
        <div className="grid gap-1">
          <h3 className="whitespace-nowrap tracking-tight text-lg font-bold">
            {last}
          </h3>
          <p className="text-sm text-gray-400">Product Manager</p>
        </div>
      </div>
      <div className="p-6 flex items-center gap-2 justify-center mt-4">
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
          className="w-5 h-5 fill-primary"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
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
          className="w-5 h-5 fill-primary"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
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
          className="w-5 h-5 fill-primary"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
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
          className="w-5 h-5 fill-primary"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
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
          className="w-5 h-5 fill-primary"
        >
          <path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2" />
        </svg>
        <span className="text-sm ml-2 text-gray-400">4.5</span>
      </div>
      <div className="p-6 mt-4 text-base text-gray-400">
        <p>
          {desc}
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;
