import { Container } from "@/components";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
    return (
        <header className="px-4 py-10 h-20 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
            <Container reverse>
                <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
                    {/* Logo */}
                    <div className="flex items-start">
                        <Link href="/" className="flex items-center gap-2">
                            {/* 2. Replace <Icons.logo /> with your image */}
                            <Image 
                                src="/icons/logo.png" 
                                alt="Logo" 
                                width={150} 
                                height={150} 
                                className="object-contain"
                            />
                        </Link>
                    </div>

                    {/* Navigation Links */}
                    <nav className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                        <ul className="flex items-center justify-center gap-16">
                            <Link href="#" className="hover:text-foreground/80 text-sm">Home</Link>
                            <Link href="#" className="hover:text-foreground/80 text-sm">About Us</Link>
                            <Link href="#" className="hover:text-foreground/80 text-sm">Services</Link>
                        </ul>
                    </nav>

                    {/* Right Side Buttons (Pure Frontend) */}
                    <div className="flex items-center gap-4">
                        <Link href="/contact" className={buttonVariants({ size: "sm", className: "hidden md:flex" })}>
                            Contact Us
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Navbar;