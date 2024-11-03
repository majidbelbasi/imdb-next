import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

export default function Header() {
  return (
    <div className=" flex justify-between items-center p-3 max-w-6xl mx-auto ">
      <div className=" flex gap-4">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex gap-1 items-center">
        <Link
          href="/"
          className=" text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg"
        >
          IMDB
        </Link>
        <span className=" text-xl hidden sm:inline">Clone</span>
      </div>
    </div>
  );
}