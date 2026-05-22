"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import SettingsTabs from "@/components/settings/SettingsTabs";
import AccountSettings from "@/components/settings/AccountSettings";
import NotificationSettings from "@/components/settings/NotificationSettings";
import PrivacySettings from "@/components/settings/PrivacySettings";
import HelpSettings from "@/components/settings/HelpSettings";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("Account");
  const [hideSettingsHeader, setHideSettingsHeader] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Page Header */}
      {!hideSettingsHeader && (
        <div className="flex items-center gap-4 px-8 py-6 border-b border-gray-100">
          <Link
            href="/profile"
            className="text-gray-900 hover:text-purple-700 transition-colors"
          >
            <ArrowLeft size={28} />
          </Link>

          <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        </div>
      )}

      {/* Page Content */}
      <main className="px-8 py-8">
        {!hideSettingsHeader && (
          <SettingsTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        )}

        {activeTab === "Account" && <AccountSettings />}
        {activeTab === "Notifications" && <NotificationSettings />}
        {activeTab === "Privacy" && <PrivacySettings />}
        {activeTab === "Help" && (
          <HelpSettings setHideSettingsHeader={setHideSettingsHeader} />
        )}
      </main>
    </div>
  );
}