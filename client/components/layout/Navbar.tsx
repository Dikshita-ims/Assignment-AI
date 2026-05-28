"use client";

import {
  Bell,
  Search,
} from "lucide-react";

export default function Navbar() {

  return (

    <header className="w-full bg-white rounded-3xl px-8 py-5 shadow-sm flex items-center justify-between">

      <div>

        <h2 className="text-2xl font-bold text-gray-900">

          Welcome Back 👋

        </h2>

        <p className="text-gray-600 mt-1">

          Manage AI-powered assessments
          with ease

        </p>

      </div>

      <div className="flex items-center gap-5">

        <div className="relative">

          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search assignments..."
            className="bg-[#f5f5f5] rounded-full pl-11 pr-5 py-3 text-sm outline-none border border-transparent focus:border-black transition-all w-[180px] md:w-[260px]"
          />

        </div>

        <button className="relative w-12 h-12 rounded-full bg-[#f5f5f5] flex items-center justify-center hover:bg-gray-200 transition-all">

          <Bell size={20} />

          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-red-500 rounded-full" />

        </button>

        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
          className="w-12 h-12 rounded-full border-2 border-orange-400"
        />

      </div>

    </header>
  );
}