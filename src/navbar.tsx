export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm w-full px-4 flex justify-between items-center">
      {/* Left Side: Logo */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl font-bold whitespace-nowrap">DevBatch</a>
      </div>

      {/* Right Side: Input + Avatar */}
      <div className="flex-none gap-2 sm:gap-4 flex items-center">
        {/* Search Input - Hidden on extra small screens, or smoothly sized */}
        <div className="form-control">
          <input 
            type="text" 
            placeholder="Find Items" 
            className="input input-bordered w-28 sm:w-auto input-sm sm:input-md" 
          />
        </div>

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar z-[9999] relative">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" 
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-slate-800 text-white rounded-box z-[999] mt-3 w-52 p-2 shadow-2xl">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge badge-sm badge-primary">New</span>
              </a>
            </li>
            <li><a>MY Orders</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

