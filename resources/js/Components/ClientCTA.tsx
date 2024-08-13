import { Link } from "@inertiajs/react";
import React from "react";

const GetStarted = () => {
    return (
        <div className="py-20 px-6 sm:px-16 lg:px-24  bg-white dark:bg-gray-800 overflow-hidden relative lg:flex lg:items-center">
            <div className="hidden lg:flex">
                <img
                    src="https://cdn.pixabay.com/photo/2017/07/31/11/21/people-2557396_1280.jpg"
                    className="rounded-2xl"
                    alt="Tree"
                />
            </div>

            <div className="w-full  px-4 sm:px-6 lg:px-8 lg:py-16 py-12  z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                        Get Only A-Grades for all Your Papers!
                    </span>
                </h2>
                <p className="text-md mt-4 text-gray-400">
                    You can choose our writing company and get only A-grades for
                    all your papers! We're the right choice if you want the best
                    grades on your papers. We know that no student wants to
                    study for tests or essays.
                </p>
                <p className="text-md mt-4 text-gray-400">
                    So instead of spending hours trying to do it yourself, let
                    us write them for you. We'll make sure that every word is
                    perfect and every sentence flows smoothly so that readers
                    can understand what's being said without having any trouble
                    following along with it.
                </p>
                <div className="lg:mt-0 lg:flex-shrink-0">
                    <div className="mt-12 inline-flex rounded-md shadow">
                        <Link href={route("register")}>
                            <button className="px-8 py-0.5  border-2 border-black dark:border-white uppercase bg-white text-black transition duration-200 text-sm shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)] ">
                                Get Free Account
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
