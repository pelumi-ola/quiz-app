// app/(dashboard)/wallet/page.tsx
export default function WalletPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full py-32">
      {/* Rocket illustration */}
      <div
        className="w-52 h-52 rounded-full flex items-center justify-center mb-8"
        style={{ background: '#EDE9FE' }}
      >
        <span style={{ fontSize: 100 }}>🚀</span>
      </div>

      <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming soon...</h2>
      <p className="text-gray-400 text-sm">
        This feature is under development and will be available soon
      </p>
    </div>
  );
}