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
    <footer className="bg-[url('/footer-pattern.svg')] bg-cover bg-center bg-[#F0F8FF]/10 dark:bg-[#2A2E3B]/95 text-[#1E3A8A] dark:text-[#60A5FA] mt-20 relative overflow-hidden border-t border-[#4DA8FF]/20">
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-[#4DA8FF]/10"
          style={{
            width: `${Math.random() * 8 + 4}px`,
            height: `${Math.random() * 8 + 4}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}

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
              <p className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-[#4DA8FF] to-[#FF6B6B] dark:from-[#60A5FA] dark:to-[#FF6B6B] relative z-10">
                আমাদের সাথে যুক্ত হও
              </p>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#4DA8FF]/40 via-[#FF6B6B]/60 to-[#4DA8FF]/40 rounded-full"></div>
            </div>
            <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
              {[
                { icon: <Facebook size={22} />, bg: "bg-[#1877F2]" }, // Facebook blue
                {
                  icon: <Instagram size={22} />,
                  bg: "bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF]",
                }, // Instagram gradient
                { icon: <Youtube size={22} />, bg: "bg-[#FF0000]" }, // YouTube red
                { icon: <Twitter size={22} />, bg: "bg-[#1DA1F2]" }, // Twitter blue
                { icon: <FaWhatsapp size={22} />, bg: "bg-[#25D366]" }, // WhatsApp green
              ].map((social, index) => (
                <Link
                  key={index}
                  href="#"
                  className={`${social.bg} p-2 rounded-lg text-white shadow-lg hover:brightness-110 transition-all duration-300`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-bold mb-6 pb-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 lg:after:left-0 lg:after:translate-x-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#4DA8FF] after:to-[#FF6B6B] after:rounded-full">
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
                  <span className="relative z-10 transition-all duration-300 group-hover:text-[#4DA8FF] group-hover:pl-2">
                    {link}
                  </span>
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-[#4DA8FF] to-[#FF6B6B] transition-all duration-500 group-hover:w-full"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col items-center lg:items-start">
            <h3 className="text-2xl font-bold mb-6 pb-2 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 lg:after:left-0 lg:after:translate-x-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-[#4DA8FF] after:to-[#FF6B6B] after:rounded-full">
              যোগাযোগ
            </h3>
            <div className="space-y-4 w-full">
              {[
                { icon: <Phone className="text-theme" />, text: "017155454" },
                {
                  icon: <FaWhatsapp size={18} className="text-theme" />,
                  text: "017155454",
                },
                {
                  icon: <Mail className="text-theme" />,
                  text: "linearscienceacademy@gmail.com",
                  className: "min-w-0 break-all",
                },
                {
                  icon: <MapPin className="text-theme" />,
                  text: "4/Ka, Lalbag Road (Beside IBN SINA Hospital), Azimpur, Dhaka",
                  className: "min-w-0",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-3 rounded-lg backdrop-blur-sm bg-[#F0F8FF]/5 dark:bg-[#2A2E3B]/30 hover:bg-[#F0F8FF]/10 dark:hover:bg-[#2A2E3B]/50 transition-all duration-300 border border-transparent hover:border-[#4DA8FF]/20 shadow-sm hover:shadow-md ${
                    contact.className || ""
                  }`}
                >
                  <span className="shrink-0 mt-0.5">{contact.icon}</span>
                  <span className="text-sm md:text-base leading-snug break-words min-w-0">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-[#4DA8FF]/30 relative">
          <div className="absolute top-0 left-0 h-px w-full overflow-hidden">
            <div className="absolute top-0 left-0 h-full w-1/2 bg-gradient-to-r from-transparent via-[#4DA8FF] to-transparent animate-moveGradient"></div>
          </div>
          <p className="text-center text-sm md:text-base text-[#1E3A8A] dark:text-[#60A5FA]">
            © {new Date().getFullYear()} Linear Science Academy. সব অধিকার
            সংরক্ষিত।
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        @keyframes moveGradient {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(30deg);
          }
          100% {
            transform: translateX(100%) rotate(30deg);
          }
        }
      `}</style>
    </footer>
  );
};

export default HomeFooter;
