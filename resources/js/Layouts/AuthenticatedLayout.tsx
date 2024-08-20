import { useState, PropsWithChildren, ReactNode } from "react";
import { User } from "@/types";
import { Sidebar, SidebarBody, SidebarLink } from "@/Components/ui/sidebar";
import {
    IconArrowLeft,
    IconBrandTabler,
    IconSettings,
    IconUserBolt,
} from "@tabler/icons-react";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Link, usePage } from "@inertiajs/react";
import { Navbar } from "@/Components/Navbar";
import ResponsiveNavLink from "@/Components/ResponsiveNavLink";
import ApplicationLogo from "@/Components/ApplicationLogo";
import NavLink from "@/Components/NavLink";
import Dropdown from "@/Components/Dropdown";
import { ModeToggle } from "@/Components/mode-toggle";
import { ThemeProvider } from "@/Components/theme-provider";
import Breadcrumb from "@/Components/Breadcrumb";
import { AdminLinks, StudentLinks, TutorLinks } from "@/lib/data";

export default function Authenticated({
    user,
    header,
    children,
}: PropsWithChildren<{ user: User; header?: ReactNode }>) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    const [open, setOpen] = useState(false);

    const { url } = usePage();

    let links;
    if (user.role === "tutor") {
        links = TutorLinks;
    } else if (user.role === "admin") {
        links = AdminLinks;
    } else {
        links = StudentLinks;
    }

    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <div className="min-h-screen bg-gray-100">
                <nav className="bg-white dark:bg-neutral-800 border-b border-gray-100 dark:border-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between h-16">
                            <div className="flex justify-around items-center ">
                                <div className="shrink-0 flex items-center">
                                    <Link
                                        href="/"
                                        className="flex items-center gap-x-4 text-2xl font-semibold text-gray-700 dark:text-gray-300"
                                    >
                                        <ApplicationLogo className="block h-9 w-auto fill-current text-gray-800" />
                                        PerfectGrader
                                    </Link>
                                </div>
                            </div>
                            <div className="flex ml-auto justify-center items-center">
                                <ModeToggle />
                            </div>

                            <div className="hidden sm:flex sm:items-center sm:ms-6 max-w-max ">
                                <div className="ms-3 relative ">
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-white bg-white dark:bg-neutral-800 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="ms-2 -me-0.5 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route("profile.edit")}
                                            >
                                                Profile
                                            </Dropdown.Link>
                                            <Dropdown.Link
                                                href={route("logout")}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="-me-2 flex items-center sm:hidden">
                                <button
                                    onClick={() =>
                                        setShowingNavigationDropdown(
                                            (previousState) => !previousState
                                        )
                                    }
                                    className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        stroke="currentColor"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            className={
                                                !showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                        <path
                                            className={
                                                showingNavigationDropdown
                                                    ? "inline-flex"
                                                    : "hidden"
                                            }
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div
                        className={
                            (showingNavigationDropdown
                                ? "block absolute text-gray-500 bg-white dark:bg-neutral-800 dark:text-white right-0 w-[80%] z-30"
                                : "hidden") + " sm:hidden"
                        }
                    >
                        <div className="pt-4 pb-1 border-t  border-gray-200 dark:border-gray-900 ">
                            <div className="px-4">
                                <div className="font-medium text-base ">
                                    {user.name}
                                </div>
                                <div className="font-medium text-sm ">
                                    {user.email}
                                </div>
                            </div>

                            <div className="mt-3 space-y-1">
                                <ResponsiveNavLink href={route("profile.edit")}>
                                    Profile
                                </ResponsiveNavLink>
                                <ResponsiveNavLink
                                    method="post"
                                    href={route("logout")}
                                    as="button"
                                >
                                    Log Out
                                </ResponsiveNavLink>
                            </div>
                        </div>
                    </div>
                </nav>

                <div
                    className={cn(
                        "rounded-md flex flex-col sm:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-x-hidden overflow-y-auto",
                        "h-[89.7vh]" // for your use case, use `h-screen` instead of `h-[60vh]`
                    )}
                >
                    <Sidebar open={open} setOpen={setOpen} animate={false}>
                        <SidebarBody className="justify-between gap-5">
                            <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
                                <div className="flex flex-col gap-2">
                                    {links.map((link, idx) => (
                                        <SidebarLink
                                            key={idx}
                                            link={link}
                                            className={
                                                route().current(link.href) ||
                                                route().current(
                                                    link.href + ".*"
                                                )
                                                    ? "border-b dark:border-neutral-500"
                                                    : ""
                                            }
                                        />
                                    ))}
                                </div>
                            </div>
                            <div>
                                <SidebarLink
                                    link={{
                                        label: user.name,
                                        href: "#",
                                        icon: (
                                            <img
                                                src="https://assets.aceternity.com/manu.png"
                                                className="h-7 w-7 flex-shrink-0 rounded-full"
                                                width={50}
                                                height={50}
                                                alt="Avatar"
                                            />
                                        ),
                                    }}
                                />
                            </div>
                        </SidebarBody>
                    </Sidebar>

                    <div className="flex flex-1 h-full overflow-y-auto">
                        <div className="p-2  bg-neutral-100 dark:bg-neutral-900 flex flex-col gap-2 flex-1 w-full h-full">
                            <div>
                                <div>
                                    <Breadcrumb path={url} />
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
