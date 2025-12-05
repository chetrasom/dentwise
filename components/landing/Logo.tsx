import Link from "next/link"
import Image from "next/image"

const Logo = () => {
    return (
        <Link href="/" className="inline-flex gap-2 items-center">
            <Image 
                src={"/logo.png"}
                alt="DentWise Logo"
                width={32}
                height={32}
                className="w-11 object-cover"
            />
            <span className="text-lg font-semibold">DentWise</span>
        </Link>
    )
}

export default Logo