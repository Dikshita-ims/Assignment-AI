"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  Folder,
  FileText,
  Library,
  Sparkles,
} from "lucide-react";

const menuItems = [
  {
    title: "Home",
    icon: LayoutGrid,
    href: "/",
  },

  {
    title: "My Groups",
    icon: Folder,
    href: "#",
  },

  {
    title: "Assignments",
    icon: FileText,
    href: "/",
  },

  {
    title: "AI Teacher's Toolkit",
    icon: Sparkles,
    href: "/create",
  },

  {
    title: "My Library",
    icon: Library,
    href: "#",
  },
];

export default function Sidebar() {
const pathname = usePathname();
  return (
    <aside className="hidden lg:flex w-[260px] h-screen bg-white rounded-r-3xl p-6 flex flex-col justify-between shadow-sm">

      <div>

        <div className="flex items-center gap-3 mb-10">

          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-red-700 flex items-center justify-center text-white font-bold text-xl">
            V
          </div>

          <h1 className="text-3xl font-bold">
            VedaAI
          </h1>

        </div>

        <Link href="/create">

          <button className="w-full bg-[#222] text-white rounded-full py-4 font-medium shadow-md border-2 border-orange-400 mb-10 hover:opacity-90 transition-all">
            ✦ Create Assignment
          </button>

        </Link>

        <div className="space-y-3">

          {menuItems.map((item) => {

            const Icon = item.icon;

            return (
              <Link
                href={item.href}
                key={item.title}
              >

                <div
  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
    pathname === item.href
      ? "bg-black text-white"
      : "text-gray-700 hover:bg-gray-100 hover:text-black"
  }`}
>

                  <Icon size={18} />

                  <span className="text-sm font-medium">
                    {item.title}
                  </span>

                </div>

              </Link>
            );
          })}

        </div>

      </div>

      <div className="flex items-center gap-3 bg-gray-100 rounded-2xl p-3">

        <img
          src="https://i.pravatar.cc/100"
          alt="school"
          className="w-12 h-12 rounded-full"
        />

        <div>

          <p className="font-semibold text-sm">
            Delhi Public School
          </p>

          <p className="text-xs text-gray-700">
            Bokaro Steel City
          </p>

        </div>

      </div>

    </aside>
  );
}