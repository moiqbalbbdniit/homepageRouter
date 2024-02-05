import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import myLogo from '../assets/logo.png';

export default function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center m-0">
          <Link to="/" className="flex items-center w-500">
            <img
              src={myLogo}
              className="mr-3 h-12 w-auto object-contain "
              alt="Logo"
            />
          </Link>
          <div className="flex justify-between items-center">
            {/* Toggle Button for Mobile View */}
            <button
              className="lg:hidden px-4 py-2 text-gray-700 text-3xl text-bold"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <FontAwesomeIcon icon={faTimes} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>

            <ul
              className={`${
                isMobileMenuOpen ? "block" : "hidden lg:flex"
              } flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0 lg:float-right`}
            >
              <li>
                <NavLink
                  to=""
                  className={({ isActive }) =>
                    `block
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                     py-2
                     pr-4
                    pl-3 
                    duration-200
                    border-b
                     border-gray-100 
                     hover:bg-gray-50 
                     lg:hover:bg-transparent 
                     lg:border-0 
                     hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                     py-2
                     pr-4
                    pl-3 
                    duration-200
                    border-b
                     border-gray-100 
                     hover:bg-gray-50 
                     lg:hover:bg-transparent 
                     lg:border-0 
                     hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block
                     ${isActive ? "text-orange-700" : "text-gray-700"}
                     py-2
                     pr-4
                    pl-3 
                    duration-200
                    border-b
                     border-gray-100 
                     hover:bg-gray-50 
                     lg:hover:bg-transparent 
                     lg:border-0 
                     hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
