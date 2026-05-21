export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 bg-white border-r border-slate-200 flex-col p-6">
      <div className="text-xl font-heading font-bold text-brand-500 mb-8">
        Reelax
      </div>
      <nav className="flex flex-col gap-4 text-sm font-medium text-slate-600">
        <span className="text-brand-500">Overview</span>
        <span>Analytics</span>
        <span>History</span>
      </nav>
    </aside>
  )
}