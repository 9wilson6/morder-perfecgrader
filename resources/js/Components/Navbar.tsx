import { PageProps } from "@/types";
import { Link } from "@inertiajs/react";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

const Navbar = ({ auth }: PageProps) => {
    const [openNavbar, setOpenNavbar] = useState(false);
    const toggleNavbar = () => {
        setOpenNavbar((openNavbar) => !openNavbar);
    };

    const navLinks = auth.user
        ? [
              { text: "dashboard", href: "/dashboard" },
              { text: "blog", href: "/blog" },
          ]
        : [
              { text: "guide", href: "/guide" },
              { text: "why us", href: "/why-us" },
              { text: "FAQ", href: "/faq" },
              { text: "blog", href: "/blog" },
          ];
    return (
        <header className="absolute top-0 inset-x-0 z-50 h-24 flex items-center">
            <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 h-full items-center">
                <nav className="flex justify-between items-center h-full">
                    <div className="flex min-w-max items-center">
                        <Link
                            href="/"
                            className="flex items-center gap-x-4 text-2xl font-semibold text-gray-700 dark:text-gray-300"
                        >
                            <div className="flex items-center -space-x-3 font-semibold">
                                <span className="h-6 aspect-square bg-emerald-600 dark:bg-emerald-400 rounded-full flex" />
                                <span className="h-6 aspect-square bg-gray-600 dark:bg-white rounded-full flex" />
                            </div>
                            PerfectGrader
                        </Link>
                    </div>
                    <div
                        className={`
            flex flex-col space-y-10 inset-0 fixed top-0  h-[100dvh] bg-white dark:bg-gray-950 lg:!bg-transparent py-20 px-5 sm:px-10 md:px-14
            transition-all ease-linear duration-300 lg:flex-row lg:flex-1 lg:py-0 lg:px-0 lg:space-y-0 lg:gap-x-10 lg:relative lg:top-0 lg:h-full lg:items-center lg:justify-between lg:w-max
            ${
                openNavbar
                    ? "visible opacity-100 translate-y-0"
                    : "-translate-y-9 opacity-0 invisible lg:translate-y-0 lg:visible lg:opacity-100"
            }
          `}
                    >
                        <ul className="flex flex-col gap-y-5 text-gray-700 dark:text-gray-300 lg:items-center lg:flex-row lg:gap-x-5 lg:h-full lg:justify-center lg:flex-1">
                            {navLinks.map((link) => (
                                <li key={link.text}>
                                    <Link
                                        href={link.href}
                                        className="transition ease-linear hover:text-gray-900 dark:hover:text-white"
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="w-full flex flex-col md:flex-row justify-start sm:w-max space-x-4 lg:min-w-max lg:items-center">
                            {auth.user ? (
                                <Link
                                    href={route("logout")}
                                    method="post"
                                    className="flex justify-center gap-x-3 items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white
                                border-b bg-gray-700 dark:border-blue-300 hover:border-b-gray-900 dark:hover:border-b-white bg-transparent"
                                >
                                    Logout
                                </Link>
                            ) : (
                                <div className="flex flex-col sm:flex-row sm:items-center gap-4  lg:min-w-max mt-10 lg:mt-0">
                                    <Link
                                        href={route('login')}
                                        className="h-10 flex items-center justify-center w-full sm:w-max rounded-full px-5 border-2 border-gray-300 dark:border-gray-800 text-purple-600 dark:text-gray-300"
                                    >
                                        Login
                                    </Link>
                                    <Link href={route('register')}>
                                        <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                                            Sign-up
                                        </button>
                                    </Link>
                                </div>
                            )}
                            <ModeToggle />
                        </div>
                    </div>
                    <div className="flex items-center justify-end relative z-60 lg:hidden">
                        <button
                            onClick={() => {
                                toggleNavbar();
                            }}
                            className="p-3 rounded-full bg-emerald-600 dark:bg-emerald-500 outline-none w-12 aspect-square flex flex-col relative justify-center items-center"
                        >
                            <span className="sr-only">toggle navbar</span>
                            <span
                                className={`
                w-6 h-0.5 rounded-full bg-gray-300 transition-transform duration-300 ease-linear
                ${openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""}
              `}
                            />
                            <span
                                className={`
                w-6 origin-center  mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                ${openNavbar ? "scale-x-0 opacity-0" : ""}
              `}
                            />
                            <span
                                className={`
                w-6 mt-1 h-0.5 rounded-full bg-gray-300 transition-all duration-300 ease-linear
                ${openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""}
              `}
                            />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export { Navbar };
