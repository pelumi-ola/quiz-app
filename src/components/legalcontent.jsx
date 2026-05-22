'use client';

import { useSearchParams, useRouter } from 'next/navigation';

export default function LegalPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeTab = searchParams.get('tab') || 'terms';

  const tabs = [
    {
      id: 'terms',
      label: 'Terms of service',
      title: 'Terms of Service',
      content:
        'You can change your name every two weeks',
    },
    {
      id: 'privacy',
      label: 'Privacy policy',
      title: 'Privacy Policy',
      content:
        'This privacy policy explains how we collect, use, and protect your information while using Trivia.',
    },
    {
      id: 'use',
      label: 'Terms of use',
      title: 'Terms of Use',
      content:
        'By using Trivia, you agree to follow the platform rules and use the service responsibly.',
    },
  ];

  const currentTab = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  const handleTabChange = (tabId) => {
    router.push(`/legal?tab=${tabId}`);
  };

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left sidebar */}
      <aside className="w-[240px] min-h-screen border-r border-gray-100 bg-white">
        {/* Logo */}
        <div className="h-[76px] flex items-center gap-3 px-10 border-b border-gray-100">
          <img src="/logo-img 1.svg" alt="Trivia" className="w-10 h-10" />
          <span className="text-2xl font-bold text-black">Trivia</span>
        </div>

        {/* Legal nav */}
        <nav className="mt-10 flex flex-col gap-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`text-left px-10 py-4 text-base font-medium transition-colors ${
                  isActive
                    ? 'border-l-4 border-[#6F31A0] bg-[#F8F1FF] text-[#6F31A0]'
                    : 'text-black hover:bg-gray-50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </aside>

      {/* Right content */}
      <main className="flex-1">
        {/* Top bar */}
        <header className="h-[76px] flex items-center px-10 border-b border-gray-100">
          <h1 className="text-lg font-medium text-gray-500">
            Legal breakdown
          </h1>
        </header>

        {/* Content area */}
        <section className="px-10 py-10">
          <div className="max-w-5xl border border-gray-200 rounded-2xl overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">
                {currentTab.title}
              </h2>
            </div>

            <div className="px-6 py-6">
              <p className="text-sm text-gray-500 leading-7">
                {currentTab.content}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}