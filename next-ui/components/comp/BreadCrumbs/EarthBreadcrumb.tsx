import React from "react";

function EarthBreadcrumb() {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1 text-sm text-gray-600">
        <li>
          <a href="#" className="block transition hover:text-gray-700">
            Home
          </a>
        </li>

        <li className="rtl:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 20.247 6-16.5"
            />
          </svg>
        </li>

        <li>
          <a href="#" className="block transition hover:text-gray-700">
            {" "}
            Nebula{" "}
          </a>
        </li>

        <li className="rtl:rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-4 text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m9 20.247 6-16.5"
            />
          </svg>
        </li>

        <li>
          <a href="#" className="block transition hover:text-gray-700">
            Galaxy
          </a>
        </li>
      </ol>
    </nav>
  );
}

export default EarthBreadcrumb;
