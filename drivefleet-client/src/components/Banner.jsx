import Image from "next/image";
import banner from '../assets/banner.webp';
import { Button } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";

const Banner = () => {
  return (
    <div className="relative max-w-7xl mx-auto bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white flex flex-col lg:flex-row items-center justify-between p-8 md:p-16 lg:p-20 mt-10 rounded-2xl gap-12 overflow-hidden shadow-2xl border border-gray-800">
      
     
      <div className="absolute top-0 -left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

    
      <div className="space-y-6 max-w-xl z-10 text-center lg:text-left">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-medium tracking-wide">
          ✨ Premium Car Rental
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent leading-tight">
          DriveFleet Car Rental Platform
        </h1>
        
        <p className="text-base md:text-lg text-gray-400 leading-relaxed max-w-lg mx-auto lg:mx-0">
          A modern car rental platform that lets users browse, book, and manage vehicles seamlessly with a fast, secure, and user-friendly experience.
        </p>
        
        <div className="pt-4">
          <Link href="/explore-cars" passHref>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 group"
              endContent={<FaArrowRightLong className="group-hover:translate-x-1 transition-transform" />}
            >
              Explore Cars
            </Button>
          </Link>
        </div>
      </div>

      
      <div className="relative w-full lg:w-1/2 flex justify-center z-10 group">
       
        <div className="absolute inset-0 bg-blue-500/5 rounded-full filter blur-2xl group-hover:bg-blue-500/10 transition-colors duration-500" />
        
        <Image 
          src={banner} 
          alt="DriveFleet Banner Image" 
          width={600} 
          height={400}
          priority
          className="object-contain transform hover:-translate-y-2 transition-transform duration-500 ease-out drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
        />
      </div>
    </div>
  );
};

export default Banner;