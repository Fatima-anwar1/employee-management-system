export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm w-full px-2 md:px-4 flex justify-between items-center flex-nowrap">
      
      {/* Left Side: Logo (Humne 'truncate' use kiya hai taake text lamba hone par break na ho) */}
      <div className="flex-1 min-w-0">
        <a className="btn btn-ghost text-xl font-bold truncate">DevBatch</a>
      </div>

      {/* Right Side: Input + Avatar (flex-none ensure karta hai ke ye apni jagah se hile nahi) */}
      <div className="flex-none flex items-center gap-2">
        
        {/* Responsive Input: choti screen par chota, badi par auto */}
        <input 
          type="text" 
          placeholder="Find Items" 
          className="input input-bordered w-24 sm:w-32 md:w-auto input-sm" 
        />

        {/* Profile Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Profile"
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
