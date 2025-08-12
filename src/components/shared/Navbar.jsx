import React, { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiCircleQuestion, CiSettings } from "react-icons/ci";
import { PiDotsNineBold } from "react-icons/pi";
import Avatar from "react-avatar";
import { useDispatch, useSelector } from "react-redux";
import { setSearchText, setUser } from "../../redux/appSlice";
import { AnimatePresence, motion } from "framer-motion";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase"; // ✅ Import auth

const Navbar = () => {
  const [input, setInput] = useState("");
  const [toggle, setToggle] = useState(false);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.appSlice); // ✅ Get user from Redux

  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        dispatch(setUser(null));
      })
      .catch((err) => {
        console.error("Sign-out error:", err);
      });
  };

  useEffect(() => {
    dispatch(setSearchText(input));
  }, [input, dispatch]); // ✅ Add dispatch to dependency array

  return (
    <div className="flex items-center justify-between mx-3 h-16">
      {/* Left */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <RxHamburgerMenu size={20} />
          </div>
          <img
            className="w-8"
            src="https://mailmeteor.com/logos/assets/PNG/Gmail_Logo_512px.png"
            alt="Gmail Logo"
          />
          <h1 className="text-2xl text-gray-500 font-medium">Gmail</h1>
        </div>
      </div>

      {/* Search */}
      <div className="md:block hidden w-[50%] mr-60">
        <div className="flex items-center bg-[#EAF1FB] px-2 py-3 rounded-full">
          <IoIosSearch size={24} className="text-gray-700" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Search Mail"
            className="rounded-full w-full bg-transparent outline-none px-1"
          />
        </div>
      </div>

      {/* Right */}
      <div className="md:block hidden">
        <div className="flex items-center gap-2">
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiCircleQuestion size={20} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <CiSettings size={20} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 cursor-pointer">
            <PiDotsNineBold size={20} />
          </div>

          {/* Avatar + Dropdown */}
          <div className="relative cursor-pointer">
            <Avatar
              onClick={() => setToggle(!toggle)}
              src={user?.photoURL || "https://via.placeholder.com/150"}
              name={user?.displayName || "User"}
              size="40"
              round
            />
            <AnimatePresence>
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.1 }}
                  className="absolute right-2 z-20 shadow-lg bg-white rounded-md"
                >
                  <p
                    onClick={signOutHandler}
                    className="p-2 underline hover:bg-gray-100"
                  >
                    Logout
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
