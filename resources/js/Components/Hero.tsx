import Mini from "@/Layouts/MiniSectionLayout";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import LoginForm from "./LoginForm";
import { Button } from "./ui/button";
import { SignupForm } from "./SignupForm";
import { CiLogin } from "react-icons/ci";
import { MdOutlinePlagiarism } from "react-icons/md";

export default function HeroSection() {
    return (
        <>
            <Mini className="min-h-[100vh] pt-5">
                <div className="text-center flex flex-col items-center space-y-7 ">
                    <span className="border text-xs font-thin border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 dark:bg-gray-950 bg-opacity-50 text-gray-700 dark:text-gray-300">
                        Welcome to PerfectGrader! <span className="text-green dark:text-yellow-800 font-semibold">Plagiarism & AI Free.</span>
                    </span>
                    <h1 className="text-4xl tracking-widest md:text-5xl lg:text-6xl/tight xl:text-7xl/tight text-gray-900 dark:text-white font-bold max-w-4xl capitalize">
                        Premier Online Paper Writing Service
                    </h1>
                    <p className="text-base text-gray-700 dark:text-gray-300 text-center max-w-xl">
                        Struggling to find the right place for top-quality
                        academic writing? Look no further. Our experienced team
                        is here to meet all your needs, whether it's essays,
                        research papers, dissertations, or anything in between.
                        We’re ready to support your academic success.
                    </p>
                    <div className="flex justify-center">
                        <Popover>
                            <PopoverTrigger>
                                <a
                                    href="#"
                                    className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80"
                                >
                                    Get Started
                                    <span>
                                        <CiLogin />
                                    </span>
                                </a>
                            </PopoverTrigger>
                            <PopoverContent>
                                <LoginForm />
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="text-left grid lg:grid-cols-3 p-6 my-12 rounded-2xl bg-gradient-to-tr from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 border border-gray-100 dark:border-gray-800 max-w-2xl lg:max-w-5xl mx-auto lg:divide-x divide-y lg:divide-y-0 divide-gray-300 dark:divide-gray-800">
                    <div className="flex items-start gap-6 lg:pr-6 pb-6 lg:pb-0">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                Pay after you get the result
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Pay only when you're completely satisfied
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 lg:px-6 py-6 lg:py-0">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                Unlimited revisions
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Unlimited revisions for complete satisfaction
                                guaranteed.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start gap-6 pt-6 lg:pt-0 lg:pl-6">
                        <div className="w-10">
                            <span className="p-3 rounded-xl bg-gray-200 dark:bg-gray-800 flex w-max text-gray-800 dark:text-gray-200">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z"
                                    />
                                </svg>
                            </span>
                        </div>
                        <div className="flex-1 space-y-1">
                            <h2 className="text-gray-900 dark:text-white font-semibold text-lg">
                                Free Plagiarism & AI report
                            </h2>
                            <p className="text-gray-700 dark:text-gray-300 text-sm">
                                Get a detailed plagiarism report instantly
                                online.
                            </p>
                        </div>
                    </div>
                </div>
            </Mini>
        </>
    );
}
