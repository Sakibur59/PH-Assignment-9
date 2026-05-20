import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "DriveFleet - Your Ultimate Car Rental Solution",
  description: "DriveFleet is your go-to car rental service, offering a wide range of vehicles for every occasion. Whether you need a compact car for city driving, a spacious SUV for a family trip, or a luxury vehicle for a special event, we have you covered. With our easy-to-use platform, competitive pricing, and exceptional customer service, renting a car has never been easier. Experience the freedom of the open road with DriveFleet today!",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${openSans.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        <Toaster></Toaster>
        </body>
    </html>
  );
}
