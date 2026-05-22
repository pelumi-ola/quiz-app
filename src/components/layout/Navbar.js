"use client";

import { useState, useRef, useEffect } from "react";
import { Settings, LogOut, Bell, PenLine } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import FancyButton from "../ui/FancyButton";

const notifications = [
  {
    id: 1,
    title: "New leaderboard rank",
    message: "Your rank moved from #126 to #124. K...",
    time: "2h ago",
    unread: true,
  },
  {
    id: 2,
    title: "New leaderboard rank",
    message: "Your rank moved from #126 to #124. K...",
    time: "2h ago",
    unread: true,
  },
  {
    id: 3,
    title: "New leaderboard rank",
    message: "Your rank moved from #126 to #124. K...",
    time: "2h ago",
    unread: false,
  },
];

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();

  const [avatarOpen, setAvatarOpen] = useState(false);
  const [bellOpen, setBellOpen] = useState(false);
  const [tab, setTab] = useState("all");
  const [items, setItems] = useState(notifications);

  const bellRef = useRef(null);
  const avatarRef = useRef(null);

  const pageTitles = {
    "/dashboard": "Dashboard",
    "/profileleaderboard": "Leaderboard",
    "/profile": "Profile",
    "/wallet": "Wallet",
    "/settings": "Settings",
    "/notifications": "Notifications",
    "/quiz-questions": "Play Quiz",
    "/FeedbackSupport": "Feedback & Support",
  };

  const title = pageTitles[pathname] || "Dashboard";
  const isProfilePage = pathname === "/profile";

  const unreadCount = items.filter((n) => n.unread).length;
  const filtered = tab === "all" ? items : items.filter((n) => n.unread);

  const markAllAsRead = () => {
    setItems((prev) => prev.map((n) => ({ ...n, unread: false })));
  };

  const handleNotificationClick = (id) => {
    setBellOpen(false);
    router.push(`/notifications?id=${id}`);
  };

  const handleSettings = () => {
    setAvatarOpen(false);
    router.push("/settings");
  };

  const handleLogout = () => {
    setAvatarOpen(false);
    router.push("/login");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (bellRef.current && !bellRef.current.contains(e.target)) {
        setBellOpen(false);
      }

      if (avatarRef.current && !avatarRef.current.contains(e.target)) {
        setAvatarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Hide navbar on settings page
  // This must come AFTER all hooks like useEffect
  if (pathname === "/settings") {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 flex h-[68px] items-center justify-between border-b border-gray-100 bg-white px-6">
      <h2
        className={`text-lg font-semibold ${
          isProfilePage ? "font-bold text-[#5C259E]" : "text-gray-900"
        }`}
      >
        {title}
      </h2>

      <div className="flex items-center gap-4">
        {/* Play Quiz */}
        <FancyButton
          href="/quizquestions"
          className="h-[48px] w-[183px] text-sm"
        >
          Play quiz
        </FancyButton>

        {/* Bell + Notification Dropdown */}
        <div className="relative" ref={bellRef}>
          <button
            type="button"
            onClick={() => {
              setBellOpen((prev) => !prev);
              setAvatarOpen(false);
            }}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-50"
          >
            <Bell size={16} className="text-gray-700" />
          </button>

          {unreadCount > 0 && (
            <span className="pointer-events-none absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
              {unreadCount}
            </span>
          )}

          {bellOpen && (
            <div className="absolute right-0 z-50 mt-3 w-[340px] rounded-2xl border border-gray-100 bg-white shadow-2xl">
              <div className="px-5 pb-3 pt-5">
                <h3 className="mb-4 text-base font-bold text-gray-900">
                  Notifications
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 rounded-lg bg-gray-100 p-1">
                    <button
                      type="button"
                      onClick={() => setTab("all")}
                      className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                        tab === "all"
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      All
                    </button>

                    <button
                      type="button"
                      onClick={() => setTab("unread")}
                      className={`rounded-md px-3 py-1 text-sm font-medium transition-colors ${
                        tab === "unread"
                          ? "bg-white text-gray-900 shadow-sm"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      Unread({unreadCount})
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={markAllAsRead}
                    disabled={unreadCount === 0}
                    className={`flex items-center gap-1.5 text-xs font-medium transition-opacity ${
                      unreadCount === 0
                        ? "cursor-not-allowed text-gray-300"
                        : "text-[#6B21A8] hover:opacity-80"
                    }`}
                  >
                    <PenLine size={12} />
                    Mark all as read
                  </button>
                </div>
              </div>

              <div className="h-px bg-gray-100" />

              <div className="max-h-[320px] overflow-y-auto">
                {unreadCount === 0 ? (
                  <div className="flex min-h-[300px] flex-col items-center justify-center px-8 text-center">
                    <div className="mb-6 flex h-20 w-20 items-center justify-center">
                      <img
                        src="/notification-empty.svg"
                        alt="No notifications"
                        className="h-full w-full object-contain"
                      />
                    </div>

                    <h4 className="text-[20px] font-bold text-gray-900">
                      You&apos;re all caught up!
                    </h4>

                    <p className="mt-3 max-w-[240px] text-sm leading-6 text-gray-500">
                      Nothing to see here. You have no new notifications
                    </p>
                  </div>
                ) : (
                  filtered.map((n, i) => (
                    <div key={n.id}>
                      <div
                        onClick={() => handleNotificationClick(n.id)}
                        className="flex cursor-pointer items-start gap-3 px-5 py-4 transition-colors hover:bg-gray-50"
                      >
                        <div className="mt-1.5 w-2 flex-shrink-0">
                          {n.unread && (
                            <span className="block h-2 w-2 rounded-full bg-[#6B21A8]" />
                          )}
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-semibold leading-snug text-gray-900">
                            {n.title}
                          </p>

                          <p className="mt-0.5 truncate text-xs text-gray-400">
                            {n.message}
                          </p>
                        </div>

                        <span className="mt-0.5 flex-shrink-0 whitespace-nowrap text-xs text-gray-400">
                          {n.time}
                        </span>
                      </div>

                      {i < filtered.length - 1 && (
                        <div className="mx-5 h-px bg-gray-100" />
                      )}
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right icon changes based on page */}
        {isProfilePage ? (
          <Link href="/settings">
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-200 transition-colors hover:bg-gray-50"
            >
              <Settings size={18} className="text-gray-500" />
            </button>
          </Link>
        ) : (
          <div className="relative" ref={avatarRef}>
            <button
              type="button"
              onClick={() => {
                setAvatarOpen((o) => !o);
                setBellOpen(false);
              }}
              className="h-9 w-9 overflow-hidden rounded-full border border-gray-200"
            >
              <img
                src="https://api.dicebear.com/7.x/adventurer/svg?seed=Trella"
                alt="Trella Olu"
                className="h-full w-full object-cover"
              />
            </button>

            {avatarOpen && (
              <div className="absolute right-0 top-11 z-20 w-40 overflow-hidden rounded-xl border border-gray-200 bg-white text-sm shadow-md">
                <button
                  type="button"
                  onClick={handleSettings}
                  className="flex w-full items-center gap-2 px-4 py-2.5 text-gray-600 hover:bg-gray-50"
                >
                  <Settings size={14} />
                  Settings
                </button>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2 border-t border-gray-100 px-4 py-2.5 text-red-500 hover:bg-gray-50"
                >
                  <LogOut size={14} />
                  Log out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
}