import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 px-6 md:px-16 py-16 mt-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-10">

        <div className=" gap-10">
          <h1 className="text-6xl md:text-7xl font-bold text-white">
            DriveFleet 
          </h1>
          <p className="mt-4 max-w-xl">
            DriveFleet provides reliable and affordable car rental services with seamless booking, secure payments, and a smooth driving experience anytime, anywhere.
          </p>
        </div>
          <div className="mt-10 md:mt-0">
            <h3 className="text-white mb-3 tracking-wide">QUICK LINKS</h3>
            <div className="space-y-2 flex flex-col">
              <Link href="/explore-cars" className="hover:text-white cursor-pointer">Explore Cars</Link>
              <Link href="/add-car" className="hover:text-white cursor-pointer">Add Car</Link>
              <Link href="/my-bookings" className="hover:text-white cursor-pointer">My Bookings</Link>
              <Link href="/login" className="hover:text-white cursor-pointer">Login</Link>
            </div>
          </div>
         
          <div>
            <h3 className="text-white mb-3 tracking-wide">CONTACT US</h3>
            <ul className="space-y-2">
              <li>786 901 1622</li>
              <li>hello@drivefleet.dev</li>
            </ul>
          </div>
        
        </div>
        

        

        
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            © 2026 DriveFleet. All rights reserved.
          </p>

          <div className="flex gap-5 mt-4 md:mt-0 text-white text-lg">
            <span className="cursor-pointer">X</span>
            <span className="cursor-pointer">in</span>
            <span className="cursor-pointer">◎</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;