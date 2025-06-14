import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div className="text-2xl font-bold">YourLogo</div>

      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-blue-600">Rooms</a>
        <a href="#" className="hover:text-blue-600">Mansion</a>
        <a href="#" className="hover:text-blue-600">Countryside</a>
        {/* Add more as needed */}
      </nav>

      <div className="flex space-x-4 items-center">
        <input
          type="search"
          placeholder="Search"
          className="border rounded-md px-3 py-1"
        />
        <button className="text-blue-600">Sign In</button>
        <button className="bg-blue-600 text-white px-3 py-1 rounded">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
