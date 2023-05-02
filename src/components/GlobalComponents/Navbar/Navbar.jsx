import { NavLink, useNavigate } from "react-router-dom";
import SearchInput from "./SearchInput";
import { HiHome } from "react-icons/hi";
import { FaBell, FaFacebookMessenger, FaUserAlt } from "react-icons/fa";
import { BsFillGearFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { signOut } from "firebase/auth";

import { auth } from "../../../firebase/config";

const Navbar = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      console.log("Sign-out successful.");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav className="py-4 px-4 md:px-0 bg-white border-b border-borderColor mb-12">
      <div className="container mx-auto flex justify-between">
        <NavLink
          to="/"
          className="py-2 px-4 bg-secondBgColor rounded-lg flex items-center gap-2 hover:bg-gray-300 transition-colors duration-300"
        >
          <HiHome className="text-xl" />
          <p className="hidden lg:block">Home</p>
        </NavLink>
        <SearchInput />
        <NavLink
          to="/profile"
          className="py-2 px-4 bg-secondBgColor rounded-lg flex items-center gap-2 hover:bg-gray-300 transition-colors duration-300"
        >
          <FaUserAlt />
          <p className="hidden lg:block">Profile</p>
        </NavLink>
        <NavLink
          to="/settings"
          className="py-2 px-4 bg-secondBgColor rounded-lg flex items-center gap-2 hover:bg-gray-300 transition-colors duration-300"
        >
          <BsFillGearFill />
          <p className="hidden lg:block">Settings</p>
        </NavLink>
        <div className="py-2 px-4 bg-secondBgColor rounded-lg flex items-center gap-2 hover:bg-gray-300 transition-colors duration-300 cursor-pointer">
          <FaBell />
          <p className="hidden lg:block">Notifications</p>
        </div>
        <NavLink
          to="/messages"
          className="py-2 px-4 bg-secondBgColor rounded-lg flex items-center gap-2 hover:bg-gray-300 transition-colors duration-300"
        >
          <FaFacebookMessenger />
          <p className="hidden lg:block">Messages</p>
        </NavLink>
        <button
          className="py-2 px-4 bg-secondBgColor rounded-lg flex items-center gap-2 hover:bg-gray-300 transition-colors duration-300 cursor-pointer"
          type="button"
          onClick={handleSignOut}
        >
          <FiLogOut />
          <p className="hidden lg:block">Log out</p>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;