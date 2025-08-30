'use client'
import Image from "next/image";
import DevLogo from '/public/assets/images/dev_logo.svg'
import ThemeToggler from "./themeToggler";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "./link";
function Header() {
    const [isDrawerMenuOpen, setIsdrawerMenuOpen] = useState(false);
    return (
        <header style={{ transition: 'all 1s ease-out ' }} className=" w-full flex justify-between items-center text-white bg-bgTernary  py-1">
            <Image alt="dev logo" src={DevLogo} className="ml-4 w-[90px] h-[45px]" />

            <div className="hidden md:flex mr-4">
                <ul className="flex items-center gap-8 ">
                    <li>
                        <Link href={'#about'}>About</Link>
                    </li>
                    <li>
                        <Link href={'#work'}>Work</Link>
                    </li>
                    <li>
                        <Link href={'#contact'}>Contact</Link>
                    </li>
                    <ThemeToggler />
                </ul>

            </div>
            <button onClick={() => setIsdrawerMenuOpen((v) => !v)} className="md:hidden mr-4">
                {
                    !isDrawerMenuOpen ? <Menu color="white" width={24} height={24} /> : <X color="white" width={24} height={24} />
                }
            </button>
            <div className={`fixed right-0 z-50 md:hidden top-12 w-full h-full bg-bgTernary transition-all ${isDrawerMenuOpen ? '-translate-x-0 opacity-100' : '-translate-x-[-100%] '} duration-50`}
                style={{ transition: 'all 1s ease-out ' }}
            >
                <ul className="flex flex-col gap-6 text-lg pt-4 px-6">
                    <li className="list-none w-full">
                        <Link noCustomization href={'#about'}>About</Link>
                    </li>
                    <li className="list-none w-full">
                        <Link href={'#work'}>Work</Link>
                    </li>
                    <li className="list-none w-full">
                        <Link href={'#contact'}>Contact</Link>
                    </li>
                </ul>
                <div className="flex flex-row justify-between px-6 pt-6">
                    <span>Switch Theme</span>
                    <ThemeToggler />
                </div>

            </div>
        </header>
    );
}

export default Header;