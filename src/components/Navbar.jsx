import React, { useState } from "react";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <nav className="bg-primary/40 lg:sticky lg:top-0 py-3">
      <div className="  max-w-[1240px] mx-auto flex justify-between items-center py-1 px-4 mt-6 mb-3">
        <div>
          {!showNav && (
            <Link
              to="/"
              className="uppercase cursor-pointer hover:text-secondary duration-200 text-xl font-bold hover:tracking-wider flex gap-2 items-center"
            >
              <img src="/assets/brand.png" alt="" width={"45px"} />
              <h1>mayeso.</h1>
            </Link>
          )}
        </div>
        <div className="hidden lg:flex justify-between w-[40%] items-center ">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "uppercase cursor-pointer hover:text-secondary duration-200 text-green-500"
                : "uppercase cursor-pointer hover:text-secondary duration-200"
            }
          >
            about
          </NavLink>
          <NavLink
            to="/quiz"
            className={({ isActive }) =>
              isActive
                ? "uppercase cursor-pointer hover:text-secondary duration-200 text-green-500"
                : "uppercase cursor-pointer hover:text-secondary duration-200"
            }
          >
            Quizes
          </NavLink>
          <NavLink
            to="/scores"
            className={({ isActive }) =>
              isActive
                ? "uppercase cursor-pointer hover:text-secondary duration-200 text-green-500"
                : "uppercase cursor-pointer hover:text-secondary duration-200"
            }
          >
            my scores
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive
                ? "uppercase cursor-pointer hover:text-secondary duration-200 text-green-500"
                : "uppercase cursor-pointer hover:text-secondary duration-200"
            }
          >
            faq
          </NavLink>
        </div>
        <div className="cursor-pointer">
          <Link to={"/quiz/create"} className="hidden lg:block btn">
            Create New Quiz
          </Link>
          <div
            className="lg:hidden text-accent fixed right-10 top-12 lg:right-4 z-50"
            onClick={() => {
              setShowNav((prevState) => !prevState);
            }}
          >
            {showNav ? (
              <MdOutlineClose size={30} />
            ) : (
              <MdOutlineMenu size={30} />
            )}
          </div>
        </div>
        {/* Side Nav */}
        <div
          className={
            showNav
              ? "fixed top-0 z-50 left-0 lg:hidden w-[65%] h-full  flex flex-col px-4 bg-black/90 py-7  gap-6 duration-200  shadow-sm"
              : "fixed top-0 z-50 left-[-100%] lg:hidden w-[50%] h-full  flex flex-col px-4 bg-black/90 py-1  gap-6 duration-200  shadow-sm"
          }
        >
          <div>
            <Link
              to="/"
              className="uppercase cursor-pointer hover:text-secondary duration-200 text-xl font-bold hover:tracking-wider flex gap-2 items-center"
            >
              <img src="/assets/brand.png" alt="" width={"45px"} />
              <h1>mayeso.</h1>
            </Link>
          </div>
          <div className="flex flex-col gap-2 h-[40%] justify-between ">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "uppercase cursor-pointer hover:text-secondary duration-200 border-b pb-3  text-center border-secondary/40 text-green-500"
                  : "uppercase cursor-pointer hover:text-secondary duration-200 border-b pb-3  text-center border-secondary/40"
              }
            >
              about
            </NavLink>
            <NavLink
              to="/quiz"
              className={({ isActive }) =>
                isActive
                  ? "uppercase cursor-pointer hover:text-secondary duration-200 border-b pb-3  text-center border-secondary/40 text-green-500"
                  : "uppercase cursor-pointer hover:text-secondary duration-200 border-b pb-3  text-center border-secondary/40"
              }
            >
              Quizes
            </NavLink>
            <NavLink
              to="/scores"
              className={({ isActive }) =>
                isActive
                  ? "uppercase cursor-pointer hover:text-secondary duration-200 border-b pb-3  text-center border-secondary/40 text-green-500"
                  : "uppercase cursor-pointer hover:text-secondary duration-200 border-b pb-3  text-center border-secondary/40"
              }
            >
              my scores
            </NavLink>
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                isActive
                  ? "uppercase cursor-pointer hover:text-secondary duration-200 border-b pb-3  text-center border-secondary/40 text-green-500"
                  : "uppercase cursor-pointer hover:text-secondary duration-200 border-b pb-3  text-center border-secondary/40"
              }
            >
              faq
            </NavLink>
          </div>
          <div className="cursor-pointer mt-4 mx-auto">
            <Link to={"/quiz/create"} className="btn">
              Create New Quiz
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
