import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import SearchBar from "../common/SearchBar"

function Header() {

  const [open, setOpen] = useState(false)

  const closeMenu = () => {
    setOpen(false)
  }

  return (

    <header className="bg-white border-b relative">

      <div className="max-w-7xl mx-auto p-4">

        <div className="flex items-center justify-between">

          <SearchBar />

          <div className="hidden lg:flex items-center gap-4">

            <button
              className="
              bg-yellow-500
              px-4
              py-2
              rounded
              text-white
              hover:opacity-90
              transition
              "
            >
              Upgrade
            </button>

            <button
              className="
              bg-primary
              px-4
              py-2
              rounded
              text-white
              hover:bg-blue-700
              transition
              "
            >
              + Create Campaign
            </button>

            <div className="w-10 h-10 rounded-full bg-gray-300" />

          </div>

          <button
            className="lg:hidden text-xl"
            onClick={() => setOpen(true)}
          >
            <FaBars />
          </button>

        </div>

      </div>

      {open && (
        <div
          onClick={closeMenu}
          className="
          fixed
          inset-0
          bg-black/40
          z-40
          "
        />
      )}

      <div
        className={`
        fixed
        top-0
        right-0
        h-screen
        w-[280px]
        bg-white
        z-50
        shadow-xl
        transform
        transition-transform
        duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >

        <div className="p-6">

          <div className="flex justify-end mb-8">

            <button
              onClick={closeMenu}
              className="text-xl"
            >
              <FaTimes />
            </button>

          </div>

          <div className="flex flex-col gap-4">

            <button
              onClick={closeMenu}
              className="
              bg-yellow-500
              text-white
              py-3
              rounded
              hover:opacity-90
              "
            >
              Upgrade
            </button>

            <button
              onClick={closeMenu}
              className="
              bg-primary
              text-white
              py-3
              rounded
              hover:bg-blue-700
              "
            >
              Create Campaign
            </button>

          </div>

        </div>

      </div>

    </header>

  )
}

export default Header