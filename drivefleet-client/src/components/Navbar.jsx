

import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="">
      <div className="sm:text-center w-90 md:w-300 mx-auto flex justify-between items-center mt-6 ">
        <div>
          <Image src={logo} alt="logo" width={200} height={150}></Image>
        </div>
        <ul className="md:flex justify-between items-center gap-4 text-gray-700">
          <li className="font-bold hover:text-blue-500 transition-colors duration-300" >
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
          <Button variant="primary" className=" text-white">
            <Link href={"/login"}>Login</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
