import Image from "next/image";
import banner from '../assets/banner.webp';
import { Button } from "@heroui/react";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
const Banner = () => {
  return (
    <div className="max-w-7xl mx-auto bg-gray-200 flex flex-col lg:flex-row items-center justify-around p-30 mt-10 rounded-lg gap-10">
      <div className="space-y-5">
        <h1 className="text-4xl font-bold text-gray-800">
          DriveFleet Car Rental Platform
        </h1>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl">
          DriveFleet – A modern car rental platform that lets users browse, book, and manage vehicles seamlessly with a fast, secure, and user-friendly experience.
        </p>
        <Link href="/explore-cars"><Button>Explore Cars <FaArrowRightLong /></Button></Link>
      </div>
      <div>
        <Image src={banner} alt="Banner Image" width={800} height={300}>
        </Image>
      </div>
    </div>
  );
};

export default Banner;
