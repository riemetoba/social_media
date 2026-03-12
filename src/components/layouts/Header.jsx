import { Search, ShoppingCart, MessageSquare, Bell, Menu, Settings } from "lucide-react";
import Image from "../Image";
import logo from "/src/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-[#635BFF] px-6 py-3 shadow-lg text-white font-poppins">
      <div className="flex items-center justify-between">
        
        {/* LEFT SECTION: Logo, Menu, and Links */}
        <div className="flex items-center space-x-10">
          {/* Logo and Hamburger */}
          <div className="flex items-center space-x-6 w-[240px] justify-between">
            <div className="flex items-center space-x-2">
              <Image src={logo} className="h-8 w-auto" />
              <span className="font-bold tracking-widest text-sm uppercase">Mernian</span>
            </div>
            <Menu className="h-5 w-5 cursor-pointer opacity-80 hover:opacity-100" />
          </div>

          {/* Nav Links */}
          <div className="flex items-center space-x-6">
            <a href="#" className="text-[11px] font-bold uppercase tracking-wider hover:text-cyan-300">Careers</a>
            <a href="#" className="text-[11px] font-bold uppercase tracking-wider hover:text-cyan-300">Store</a>
            <a href="#" className="text-[11px] font-bold uppercase tracking-wider hover:text-cyan-300">FAQ</a>
            <span className="text-xs font-bold cursor-pointer">...</span>
          </div>
        </div>

        {/* MIDDLE SECTION: Search Bar */}
        <div className="flex-1 max-w-[450px] mx-10">
          <div className="flex items-center bg-[#4E4AC8] rounded-md px-4 py-2.5">
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 bg-transparent text-sm text-white placeholder-[#8B88EF] outline-none"
            />
            <Search className="h-4 w-4 text-[#8B88EF] cursor-pointer" />
          </div>
        </div>

        {/* RIGHT SECTION: EXP and Icons */}
        <div className="flex items-center space-x-6">
          {/* EXP Progress */}
          <div className="flex flex-col items-end">
            <div className="flex space-x-2 text-[10px] font-bold uppercase">
              <span className="opacity-60">Next</span>
              <span className="text-white">35 EXP</span>
            </div>
            <div className="h-1 w-24 bg-black/20 rounded-full mt-1 overflow-hidden">
              <div className="h-full w-[70%] bg-cyan-400" />
            </div>
          </div>

          {/* Vertical Divider */}
          <div className="h-8 w-[1px] bg-white/10 mx-2" />

          {/* Action Icons */}
          <div className="flex items-center space-x-5">
            <ShoppingCart className="h-5 w-5 cursor-pointer opacity-70 hover:opacity-100" />
            <MessageSquare className="h-5 w-5 cursor-pointer opacity-70 hover:opacity-100" />
            <div className="relative">
              <Bell className="h-5 w-5 cursor-pointer opacity-70 hover:opacity-100" />
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 bg-cyan-400 rounded-full border-2 border-[#635BFF]" />
            </div>
            <Settings className="h-5 w-5 cursor-pointer opacity-70 hover:opacity-100" />
          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;