// Node modules
import Link from "next/link";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

// Components
import Logo from "@/components/landing/Logo";
import { Button } from "../ui/button"

// Types
type Menu = {
    label: string;
    path: string;
}

// Constants
const menusData: Menu[] = [
    { label: 'How it works', path: '#'},
    { label: 'Pricing', path: '#'},
    { label: 'About', path: '#'},
];

const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-50 w-full h-16 px-6 py-2 border-b border-border/50 bg-background/80 backdrop-blur-md">
            {/* bg-background/80 */}
            <nav className="max-w-6xl mx-auto h-full flex items-center justify-between">
                <Logo />

                <div className="max-md:hidden">
                    <ul className="flex gap-x-8">
                        {menusData.map((menu) => (
                            <li key={menu.label}>
                                <Link href={menu.path} className="text-muted-foreground hover:text-foreground transition-colors duration-300">
                                    {menu.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="space-x-4">
                    <SignInButton mode="modal">
                        <Button variant={"ghost"}>
                            Login
                        </Button>
                    </SignInButton>

                    <SignUpButton mode="modal">
                        <Button>
                            Sign Up
                        </Button>
                    </SignUpButton>
                </div>
            </nav>
        </header>
    )
}

export default Header;