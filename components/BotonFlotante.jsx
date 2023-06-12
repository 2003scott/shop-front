import React from "react";

function BotonFlotante() {
  return (
    <div className="hover:text-lg">
      <div className="fixed bottom-0 right-0 mb-4 mr-4 ">
      <a href="https://wa.me/+51902844989" target="_blank">
        <button className="bg-[rgb(0,23,79)] text-white font-bold py-3 px-4 gap-1 rounded-full flex items-center shadow-2xl border-solid border-2 border-sky-500 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"
            />
          </svg>
          Ayuda
        </button>
        </a>
      </div>
    </div>
  );
}

export default BotonFlotante;
