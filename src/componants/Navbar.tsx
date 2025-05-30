import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="bg-white text-neutral-500">
            <Image src="/assets/logo.png" alt="" width={100}/>
            <ul>
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Causes</Link>
                <Link href="/">Event</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Contact</Link>
            </ul>
        </nav>
    )
}