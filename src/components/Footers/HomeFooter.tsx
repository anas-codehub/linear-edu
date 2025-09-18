"use client";

import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const HomeFooter = () => {
  return (
    <footer className="bg-[url('/footer-pattern.svg')] bg-cover bg-center bg-gradient-to-br from-emerald-50/95 to-amber-50/95 dark:from-emerald-950/95 dark:to-amber-900/95 text-emerald-900 dark:text-emerald-100 mt-20 relative border-t border-emerald-400/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Branding */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            <div className="relative w-full max-w-xs">
              <Image
                src="/logo/logo.png"
                width={400}
                height={200}
                alt="Logo"
                className="relative z-10"
              />
            </div>

            <div className="mt-8 mb-6 relative inline-block">
              <p className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-brand-1 to-brand-2 dark:from-bdark-1 dark:to-bdark-2 relative z-10">
                আমাদের সাথে যুক্ত হও
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-1 via-brand-2 to-brand-1 rounded-full"></div>
            </div>

            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              {[
                {
                  icon: <Facebook size={22} className="text-white" />,
                  bg: "bg-[#1877F2] hover:bg-[#1877F2]/90",
                },
                {
                  icon: <Instagram size={22} className="text-white" />,
                  bg: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] hover:from-[#F58529]/90 hover:via-[#DD2A7B]/90 hover:to-[#8134AF]/90",
                },
                {
                  icon: <Youtube size={22} className="text-white" />,
                  bg: "bg-[#FF0000] hover:bg-[#FF0000]/90",
                },
                {
                  icon: <Twitter size={22} className="text-white" />,
                  bg: "bg-[#1DA1F2] hover:bg-[#1DA1F2]/90",
                },
                {
                  icon: <FaWhatsapp size={22} className="text-white" />,
                  bg: "bg-[#25D366] hover:bg-[#25D366]/90",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  className={`${social.bg} p-2 rounded-lg text-white shadow-lg hover:scale-105 transition-all duration-300`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-bold mb-6 pb-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 lg:after:left-0 lg:after:translate-x-0 after:w-16 after:h-1 after:rounded-full">
              লিংক
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
              {[
                "আমাদের সম্পকে",
                "ক্যারিয়ার",
                "স্কিলস",
                "টিচার পোর্টাল",
                "প্রাইভেসি পলিসি",
                "রিফান্ড পলিসি",
                "ব্যাবহারিক শর্তাবলী",
              ].map((link, index) => (
                <Link
                  key={index}
                  href="#"
                  className="group relative overflow-hidden py-1"
                >
                  <span className="relative z-10 transition-all duration-300 group-hover:text-brand-1 dark:group-hover:text-brand-1 group-hover:pl-2">
                    {link}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5  transition-all duration-500 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-bold mb-6 pb-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 lg:after:left-0 lg:after:translate-x-0 after:w-16 after:h-1 after:rounded-full">
              যোগাযোগ
            </h3>
            <div className="space-y-4 w-full">
              {[
                {
                  icon: <Phone className="text-brand-1 dark:text-bdark-1" />,
                  text: "017155454",
                },
                {
                  icon: (
                    <FaWhatsapp
                      size={18}
                      className="text-brand-1 dark:text-bdark-1"
                    />
                  ),
                  text: "017155454",
                },
                {
                  icon: <Mail className="text-brand-1 dark:text-bdark-1" />,
                  text: "linearscienceacademy@gmail.com",
                  className: "min-w-0 break-all",
                },
                {
                  icon: <MapPin className="text-brand-1 dark:text-bdark-1" />,
                  text: "4/Ka, Lalbag Road (Beside IBN SINA Hospital), Azimpur, Dhaka",
                  className: "min-w-0",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-3 rounded-lg backdrop-blur-sm bg-emerald-50/30 dark:bg-emerald-900/30 hover:bg-emerald-100/40 dark:hover:bg-emerald-800/40 transition-all duration-300 border border-transparent hover:border-emerald-400/30 shadow-sm hover:shadow-md ${
                    contact.className || ""
                  }`}
                >
                  <span className="shrink-0 mt-0.5">{contact.icon}</span>
                  <span className="text-sm md:text-base leading-snug break-words min-w-0 text-brand-1 dark:text-bdark-1">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-brand-1 relative">
          <p className="text-center text-sm md:text-base text-brand-1 dark:text-bdark-1">
            © {new Date().getFullYear()} Linear Science Academy. সব অধিকার
            সংরক্ষিত।
          </p>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
