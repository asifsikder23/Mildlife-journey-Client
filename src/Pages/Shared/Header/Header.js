import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/logo/mj logo.png'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { AuthContext } from "../../../Context/UserContext";

const Header = () => {
  const {user, logOut} = useContext(AuthContext)
    const menuItems = (
        <>
          <li className="font-semibold">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="font-semibold">
            <Link to={"/packages"}>Packages</Link>
          </li>
          <li className="font-semibold">
            <Link to={"/gallery"}>Gallery</Link>
          </li>
          <li className="font-semibold">
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li className="font-semibold">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </>
      );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to={'/'} className="text-2xl font-bold">
          <div className="flex items-center gap-4">
          <div>
          <img className="h-14 w-14 invisible md:visible" src={logo} alt="" />
          </div>
          <div>
          <p>MildLife Journey</p>
          </div>
          </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            {menuItems}
          </ul>
        </div>
        <div className="navbar-end">
          
        <div className="dropdown dropdown-end">
          {
                  user ?
            
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              
              <div className="w-10 rounded-full">
                    <img src={user.photoURL}/>
              </div>
            </label>
                  
                  :
                  <Link to={'/login'} className="btn px-5">Log in</Link>
              }

            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-slate-900 text-white rounded-box w-52"
            >
              <li>
              <a href="#my-modal-2">Profile</a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
              {
                  user &&
                  <button onClick={logOut}>log out</button>
                  
                    
              }
              
              </li>
            </ul>
          </div>
        </div>
          
          {
              user &&
              <div className="modal" id="my-modal-2">
            
                      
                  <div>
                      <div className="modal-action">
                          <a href="#" className="text-white">
                          <XMarkIcon className="h-10 w-10 text-white"/>
                          </a>
                          </div>

                    <section className="w-72 mx-auto bg-[#20354b] rounded-2xl px-8 py-6 shadow-lg">
                      

                        <div className="mt-6 w-fit mx-auto ">
                            {
                              user?.photoURL &&
                              <img className="rounded-full" src={user.photoURL}/>
                            }
                            
                        </div>

                        <div className="mt-8 ">
                            {
                              user?.displayName &&
                              <h2 className="text-white font-bold text-2xl tracking-wide">{user.displayName}
                            </h2>
                            }
                            {
                              user?.email &&
                              <p className="text-white">{user.email}</p>
                            }
                            
                        </div>
                        <p className="text-emerald-400 font-semibold mt-2.5" >
                            Active
                        </p>

                        <div className="h-1 w-full bg-black mt-8 rounded-full">
                            <div className="h-1 rounded-full w-4/5 bg-yellow-500 "></div>
                        </div>
                        <div className="mt-3 text-white text-sm">
                            <span className="text-gray-400 font-semibold">Progress: </span>
                            <span>40%</span>
                        </div>

                    </section>
                      </div>
          </div>
           }
        
      </div>
    </div>
  );
};

export default Header;
