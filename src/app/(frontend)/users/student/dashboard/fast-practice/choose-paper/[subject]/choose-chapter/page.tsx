import React from "react";
import Link from "next/link";
import physics1 from "../../../../../../../../../../data/books-chapters/physics1";

const Page = () => {
  return (
    <div className="flex flex-col max-w-6xl w-full px-8 py-20 container mx-auto gap-4">
      {physics1.map((item) => (
        <Link
          key={item.sl}
          href={
            "/users/student/dashboard/fast-practice/choose-paper/subject/choose-chapter/practice"
          }
        >
          <div className="bg-warning text-black text-base hover:cursor-pointer p-4 rounded-lg shadow-md hover:bg-yellow-400 transition">
            <span className="font-bold">{item.sl}.</span> {item.title}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Page;
