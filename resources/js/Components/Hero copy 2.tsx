import Mini from "@/Layouts/MiniSectionLayout";

export default function HeroSection() {
    return (
        <>
            <Mini className="h-[100vh]">
                <div className="text-center flex flex-col items-center space-y-10 ">
                    <span className="border text-xs font-thin border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 dark:bg-gray-950 bg-opacity-50 text-gray-700 dark:text-gray-300">
                        Welcome to PerfectGrader! We're excited to have you
                        here.
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
                        <a
                            href="#"
                            className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80"
                        >
                            Let's talk
                            <span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </Mini>
        </>
    );
}
