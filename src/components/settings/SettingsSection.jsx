export default function SettingsSection({ title, children }) {
  return (
    <section className="border border-gray-200 rounded-2xl overflow-hidden bg-white mb-8">
      <div className="px-6 py-5 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-900">{title}</h2>
      </div>

      <div className="px-6 py-6">{children}</div>
    </section>
  );
}