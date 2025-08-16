import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const HomeFooter = () => {
  return (
    <>
      <footer className="mt-20">
        <div className="flex flex-col md:flex-row justify-center gap-10 md:gap-20 bg-amber-200 dark:bg-gray-900 p-6 md:p-16 lg:p-20">
          {/* Left: Branding and Social */}
          <div className="flex flex-col items-start gap-4 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold">
              Linear <br />
              Science <br />
              Academy
            </h1>
            <p className="text-xl md:text-2xl">আমাদের সাথে যুক্ত হও</p>

            <div className="flex gap-4 md:gap-6 items-center">
              <Link
                href="https://www.facebook.com/yourpage"
                className="text-blue-600 hover:text-blue-800 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/yourprofile"
                className="text-pink-500 hover:text-pink-700 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={24} />
              </Link>
              <Link
                href="https://www.youtube.com/yourchannel"
                className="text-red-600 hover:text-red-800 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={24} />
              </Link>
              <Link
                href="https://twitter.com/yourhandle"
                className="text-sky-500 hover:text-sky-700 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://wa.me/yourwhatsappphonenumber"
                className="text-green-600 hover:text-green-800 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} />
              </Link>
            </div>
          </div>

          {/* Middle: Links */}
          <div className="flex flex-col gap-2 mt-10 md:mt-0">
            <p className="text-xl md:text-2xl font-bold">লিংক</p>
            <Link href={"/#"}>আমাদের সম্পকে</Link>
            <Link href={"/#"}>ক্যারিয়ার</Link>
            <Link href={"/#"}>স্কিলস</Link>
            <Link href={"/#"}>টিচার পোর্টাল</Link>
            <Link href={"/#"}>প্রাইভেসি পলিসি</Link>
            <Link href={"/#"}>রিফান্ড পলিসি</Link>
            <Link href={"/#"}>ব্যাবহারিক শর্তাবলী</Link>
          </div>

          {/* Right: Contact */}
          <div className="flex flex-col gap-3 mt-10 md:mt-0">
            <p className="text-xl md:text-2xl font-bold">যোগাযোগ</p>
            <div className="flex items-center gap-2">
              <Phone />
              <p>017155454</p>
            </div>
            <div className="flex items-center gap-2">
              <FaWhatsapp size={24} />
              <p>017155454</p>
            </div>
            <div className="flex items-center gap-2">
              <Mail />
              <p>linearscienceacademy@gmail.com</p>
            </div>
            <div className="flex items-start gap-2">
              <MapPin className="mt-1" />
              <p>
                4/Ka, Lalbag Road (Beside IBN SINA Hospital), <br />
                Azimpur, Dhaka
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
