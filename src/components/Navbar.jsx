function Navbar() {
  return (
    <nav className="w-full px-6 md:px-12 py-5 flex items-center justify-between">

      {/* Logo */}

      <div className="text-2xl font-bold">
        Agency
      </div>

      {/* Desktop Menu */}

      <ul className="hidden md:flex gap-8 font-medium">
        <li className="cursor-pointer hover:text-gray-500">
          Home
        </li>

        <li className="cursor-pointer hover:text-gray-500">
          Services
        </li>

        <li className="cursor-pointer hover:text-gray-500">
          About
        </li>

        <li className="cursor-pointer hover:text-gray-500">
          Contact
        </li>
      </ul>

      {/* Button */}

      <button className="bg-black text-white px-5 py-2 rounded-full hover:opacity-90">
        Get Started
      </button>

    </nav>
  );
}

export default Navbar;