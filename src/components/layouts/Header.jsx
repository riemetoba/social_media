import { Search, Menu } from "lucide-react";
import { FaShoppingCart, FaSms, FaBell, FaTools } from "react-icons/fa";
import Image from "../Image";
import logo from "/src/assets/logo.png";

const Header = () => {
  return (
    <nav className="bg-primary px-6 py-3 shadow-lg text-white font-poppins">
      <div className="flex items-center justify-between">
        {/* Left side start */}
        <div className="flex items-center gap-x-12">
          {/* Logo and Hamburger */}
          <div className="flex items-center gap-x-6 w-60 justify-between">
            <div className="flex items-center gap-x-2">
              <Image src={logo} className="h-8 w-auto" />
              <span className="font-bold tracking-widest text-[12px] uppercase">
                Mernian
              </span>
            </div>
            <Menu className="h-5 w-5 cursor-pointer text-white" />
          </div>

          <div className="flex items-center gap-x-9">
            <a
              href="#"
              className="text-[12px] font-poppins font-bold tracking-wider"
            >
              Careers
            </a>
            <a
              href="#"
              className="text-[12px] font-poppins font-bold tracking-wider"
            >
              Store
            </a>
            <a
              href="#"
              className="text-[12px] font-poppins font-bold tracking-wider"
            >
              FAQ
            </a>
            <span className="text-xs font-bold cursor-pointer">...</span>
          </div>
        </div>

        {/* Middle section start */}
        <div className="flex-1 max-w-112.5 mx-10">
          <div className="flex items-center bg-[#4E4AC8] rounded-md px-4 py-3.5">
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 bg-transparent text-sm text-white placeholder-[#6763DF] outline-none"
            />
            <Search className="h-4 w-4 text-[#6763DF] cursor-pointer" />
          </div>
        </div>

        {/* Right side start */}
        <div className="flex items-center gap-x-6">
          <div className="flex flex-col items-end">
            <div className="flex items-center gap-x-11 text-[12px] font-poppins text-[#ffffff] uppercase">
              <span className="">Next</span>
              <span className="">35 EXP</span>
            </div>
            <div className="h-1 w-28 bg-black/20 rounded-full mt-1 overflow-hidden">
              <div className="h-full w-[70%] bg-[#41EFFF]" />
            </div>
          </div>
          {/* border  */}
          <div className="h-8 w-0.5 bg-[#7A77FD] mx-2" />

          {/* Action icons */}
          <div className="flex items-center gap-x-5">
            <FaShoppingCart className="h-5 w-5 cursor-pointer text-[#7A77FD]" />
            <FaSms className="h-5 w-5 cursor-pointer text-[#7A77FD]" />
            <div className="relative">
              <FaBell className="h-5 w-5 cursor-pointer text-[#7A77FD]" />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-[#41EFFF] rounded-full border-2 border-[#635BFF]" />
            </div>
          </div>
          {/* border  */}
          <div className="h-8 w-0.5 bg-[#7A77FD] mx-2" />
          <FaTools className="h-5 w-5 cursor-pointer text-[#7A77FD]" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
