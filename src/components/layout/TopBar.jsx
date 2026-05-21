export default function TopBar() {
  return (
    <div className="bg-white border-b px-6 py-4 flex items-center justify-between">
      <input
        placeholder="Find influencers to collaborate with"
        className="w-[360px] border rounded-md px-4 py-2 text-sm outline-none"
      />

      <div className="flex items-center gap-3">
        <button className="text-sm px-3 py-1.5 rounded bg-amber-100 text-amber-700">
          Upgrade
        </button>

        <button className="text-sm px-4 py-2 rounded bg-blue-600 text-white">
          + Create Campaign
        </button>

        <div className="w-8 h-8 rounded-full bg-slate-300" />
      </div>
    </div>
  )
}