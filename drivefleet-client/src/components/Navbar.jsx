'use client';
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <nav className="">
      <div className="sm:text-center w-90 md:w-300 mx-auto flex justify-between items-center mt-6">
        <div>
          <Image src={logo} alt="logo" width={200} height={150} />
        </div>
        <ul className="md:flex justify-between items-center gap-4 text-gray-700">
          <li className="font-bold hover:text-blue-500 transition-colors duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="font-bold hover:text-blue-500 transition-colors duration-300">
            <Link href="/explore-cars">Explore Cars</Link>
          </li>
          <li className="font-bold hover:text-blue-500 transition-colors duration-300">
            <Link href="/add-car">Add Car</Link>
          </li>
          <li className="font-bold hover:text-blue-500 transition-colors duration-300">
            <Link href="/my-bookings">My Bookings</Link>
          </li>
        </ul>

        <div>
          {user ? (
            <div className="relative group flex items-center gap-2 cursor-pointer">
             
              <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold text-sm">
                {user.image ? (
                  <img src={user.image} alt={user.name} className="w-9 h-9 rounded-full object-cover" referrerPolicy="no-referrer" />
                ) : (
                  user.name?.charAt(0).toUpperCase()
                )}
              </div>
              <span className="text-gray-700 font-medium">{user.name}</span>
              

              <div className="absolute right-0 top-11 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50
                              invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
                <div className="px-4 py-3 border-b border-gray-100">
                  <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                  <p className="text-xs text-gray-500 truncate">{user.email}</p>
                </div>
                <ul className="py-1">
                  <li>
                    <Link href="/add-car" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Add Car
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-bookings" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      My Bookings
                    </Link>
                  </li>
                  <li>
                    <Link href="/my-added-cars" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      My Added Cars
                    </Link>
                  </li>
                  <li className="border-t border-gray-100">
                    <button
                      onClick={handleSignOut}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          ) : (
            <Button variant="primary" className="text-white">
              <Link href="/login">Login</Link>
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;