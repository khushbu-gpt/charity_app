import Image from "next/image";
import Link from "next/link";
import logo from '@/assets/logo.png';
import { Search } from "lucide-react";
export default function Navbar(){
    return(
        <nav className="bg-white flex justify-around w-full items-center py-5 shadow-md ">
            <Image src={logo} alt="logo" width={160} height={100}/>
            <div className="flex justify-around items-center gap-10">
                <Link href="/" className=" hover:text-emerald-600 text-neutral-500">Home</Link>
                <Link href="/" className="hover:text-emerald-600 text-neutral-500">About</Link>
                <Link href="/" className="hover:text-emerald-600 text-neutral-500">Causes</Link>
                <Link href="/" className="hover:text-emerald-600 text-neutral-500">Event</Link>
                <Link href="/" className="hover:text-emerald-600 text-neutral-500">Blog</Link>
                <Link href="/" className="hover:text-emerald-600 text-neutral-500">Contact</Link>
                <button className="cursor-pointer text-black"><Search strokeWidth={1}/></button>
        </div>
        </nav>
    )
}