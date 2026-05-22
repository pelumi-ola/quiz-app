"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Search, Info, Trash2, PenLine } from "lucide-react";
import Link from "next/link";

const allNotifications = [
  {
    id: 1,
    title: "New leaderboard rank",
    shortMessage: "Your rank moved from #126 to #124....",
    fullMessage: "Your rank moved from #126 to #124. Keep playing to win",
    date: "24/05/26",
    time: "2h ago",
    category: "Rank update",
    unread: true,
  },
  {
    id: 2,
    title: "New leaderboard rank",
    shortMessage: "Your rank moved from #126 to #124....",
    fullMessage: "Your rank moved from #126 to #124. Keep playing to win",
    date: "24/05/26",
    time: "2h ago",
    category: "Rank update",
    unread: true,
  },
  {
    id: 3,
    title: "New leaderboard rank",
    shortMessage: "Your rank moved from #126 to #124....",
    fullMessage: "Your rank moved from #126 to #124. Keep playing to win",
    date: "24/05/26",
    time: "2h ago",
    category: "Rank update",
    unread: false,
  },
];

function NotificationsContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialId = Number(searchParams.get("id")) || allNotifications[0].id;

  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(allNotifications);
  const [selectedId, setSelectedId] = useState(initialId);
  const [checked, setChecked] = useState([]);

  const unreadCount = items.filter((n) => n.unread).length;

  const filtered = items
    .filter((n) => (tab === "all" ? true : n.unread))
    .filter((n) =>
      n.title.toLowerCase().includes(search.toLowerCase()) ||
      n.shortMessage.toLowerCase().includes(search.toLowerCase())
    );

  const selected = items.find((n) => n.id === selectedId);

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((n) => n.id !== id));
    const remaining = items.filter((n) => n.id !== id);
    if (remaining.length > 0) {
      setSelectedId(remaining[0].id);
    } else {
      setSelectedId(null);
    }
  };

  const toggleCheck = (id) => {
    setChecked((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );
  };

  return (
    <div className="flex min-h-screen bg-white">

      {/* Left panel */}
      <div className="w-[400px] border-r border-gray-100 flex flex-col flex-shrink-0">

        {/* Header */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-center gap-3 mb-5">
            <button
              onClick={() => router.back()}
              className="text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft size={20} />
            </button>
            <h1 className="text-xl font-bold text-gray-900">Notification</h1>
          </div>

          {/* Search */}
          <div className="flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2 mb-5">
            <Search size={14} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search notifications..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="text-sm text-gray-600 placeholder:text-gray-400 outline-none bg-transparent w-full"
            />
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-6 border-b border-gray-100">
            <button
              onClick={() => setTab("all")}
              className={`flex items-center gap-1.5 pb-2 text-sm font-semibold border-b-2 transition-colors ${
                tab === "all"
                  ? "border-[#6B21A8] text-[#6B21A8]"
                  : "border-transparent text-gray-400"
              }`}
            >
              All
              <span className="bg-[#6B21A8] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {items.length}
              </span>
            </button>
            <button
              onClick={() => setTab("unread")}
              className={`flex items-center gap-1.5 pb-2 text-sm font-semibold border-b-2 transition-colors ${
                tab === "unread"
                  ? "border-[#6B21A8] text-[#6B21A8]"
                  : "border-transparent text-gray-400"
              }`}
            >
              Unread
              <span className="bg-gray-200 text-gray-600 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            </button>
          </div>
        </div>

        {/* Notification list */}
        <div className="flex-1 overflow-y-auto">
          {filtered.length === 0 ? (
            <p className="text-sm text-gray-400 text-center py-10">No notifications</p>
          ) : (
            filtered.map((n) => (
              <div
                key={n.id}
                onClick={() => setSelectedId(n.id)}
                className={`flex items-start gap-3 px-6 py-4 cursor-pointer transition-colors border-b border-gray-50 ${
                  selectedId === n.id ? "bg-purple-50" : "hover:bg-gray-50"
                }`}
              >
                {/* Checkbox */}
                <input
                  type="checkbox"
                  checked={checked.includes(n.id)}
                  onChange={(e) => {
                    e.stopPropagation();
                    toggleCheck(n.id);
                  }}
                  className="mt-1 accent-[#6B21A8] flex-shrink-0"
                />

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <p className={`text-sm font-semibold ${selectedId === n.id ? "text-[#6B21A8]" : "text-gray-900"}`}>
                    {n.title}
                  </p>
                  <p className={`text-xs mt-0.5 truncate ${selectedId === n.id ? "text-[#6B21A8]" : "text-gray-400"}`}>
                    {n.shortMessage}
                  </p>
                </div>

                {/* Time */}
                <span className="text-xs text-gray-400 flex-shrink-0 whitespace-nowrap mt-0.5">
                  {n.time}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col p-8">
        {selected ? (
          <>
            {/* Detail header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">{selected.category}</h2>
              <div className="flex items-center gap-3">
                <button className="text-gray-400 hover:text-gray-600 transition-colors">
                  <Info size={20} />
                </button>
                <button
                  onClick={() => handleDelete(selected.id)}
                  className="text-gray-400 hover:text-red-500 transition-colors"
                >
                  <Trash2 size={20} />
                </button>
              </div>
            </div>

            {/* Notification card */}
            <div className="border border-gray-200 rounded-2xl p-6 mb-6">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-base font-bold text-gray-900">{selected.title}</h3>
                <span className="text-xs text-gray-400 whitespace-nowrap ml-4">
                  {selected.date} • {selected.time}
                </span>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{selected.fullMessage}</p>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-4">
              <Link
                href="/profileleaderboard"
                className="flex-1 flex items-center justify-center gap-2 border-2 border-[#6B21A8] border-b-[4px] text-[#6B21A8] font-semibold text-sm py-3.5 rounded-xl hover:bg-purple-50 transition-colors"
              >
                <img src="/purpledrop.svg" alt="icon" className="w-4 h-4 mr-2 translate-x-[-120px] translate-y-[-10px]" />  
                Top leaderboard
              </Link>

              <button
                onClick={() => handleDelete(selected.id)}
                className="flex-1 flex items-center justify-center gap-2 border-2 border-red-500 border-b-[4px] border-b-red-700 text-red-500 font-semibold text-sm py-3.5 rounded-xl hover:bg-red-50 transition-colors"
              >
                <img src="/red drop.svg" alt="icon" className="w-4 h-4 translate-x-[-150px] translate-y-[-10px]" />
                Delete
              </button>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center">
            <p className="text-sm text-gray-400">No notification selected</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function NotificationsPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen text-sm text-gray-400">Loading...</div>}>
      <NotificationsContent />
    </Suspense>
  );
}