const iconRender = (val: string) => {
    switch (val) {
        case "star":
            return (
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
                        d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                    />
                </svg>
            );
        case "academic-cap":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                </svg>
            );
        case "clock":
            return (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-7 h-7"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                </svg>
            );
        case "phone":
            return (
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
                        d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
                    />
                </svg>
            );
        case "no-symbol":
            return (
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
                        d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636"
                    />
                </svg>
            );
        default:
            return <>No Icon</>;
    }
};

const FeatureItem = ({
    title,
    description,
    icon,
}: {
    title: string;
    description: string;
    icon: string;
}) => {
    return (
        <div className="p-3 rounded-md bg-white dark:bg-gray-950 shadow-lg dark:shadow-none hover:shadow-emerald-600/20 shadow-transparent transition-all ease-linear border border-gray-100 hover:border-gray-100 dark:border-gray-900 dark:hover:border-gray-600">
            <div className="flex gap-4">
                <div className="min-w-max">
                    <span className="flex text-emerald-600 dark:text-gray-100 aspect-square rounded bg-emerald-600/10 dark:bg-gray-900 p-3">
                        {iconRender(icon)}
                    </span>
                </div>
                <div className="space-y-0.5">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 line-clamp-2">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};
const features = [
    {
        id: 1,
        title: "First-class Quality",
        description:
            "PerfectGrader, an academic writing service with top writers and a decade-long reputation.",
        icon: "star",
    },
    {
        id: 2,
        title: "Expertly Crafted Papers by Skilled Writers.",
        description:
            "Unique papers written by skilled writers with advanced degrees. Checked for quality and originality.",
        icon: "academic-cap",
    },
    {
        id: 3,
        title: "No Missed Deadlines",
        description:
            "Timely delivery of quality work by native English-speaking experts with 24/7 support.",
        icon: "clock",
    },
    {
        id: 4,
        title: "24/7 support",
        description:
            "24/7 support via live chat, email, or phone for all inquiries.",
        icon: "phone",
    },
    {
        id: 5,
        title: "No Plagiarism or Writer's Copy",
        description:
            "Plagiarism-free, AI-free papers crafted by experts using authentic sources, ensuring originality and quality.",
        icon: "no-symbol",
    },
];

const WhyPerfectGrader = () => {
    return (
        <section className="py-20 bg-[#D8EFE9] dark:bg-black mx-auto px-6 sm:px-16 lg:px-24">
            <div className="max-w-7xl  flex flex-col md:flex-row gap-10 xl:gap-14">
                <div className="w-full md:h-auto object-cover  md:items-end justify-center md:w-1/2 xl:w-[45%] relative hidden lg:flex ">
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-tr from-gray-100 to-gray-300 dark:from-gray-900 dark:to-gray-700 rounded-3xl " />
                    <img
                        src="https://cdn.pixabay.com/photo/2017/10/07/10/43/professor-2826097_1280.png"
                        width={1001}
                        height={1001}
                        alt="woman with grocery"
                        className="wfull h-auto lg:w-[86%] relative"
                    />
                </div>
                <div className="flex flex-1 flex-col gap-5">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col">
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white">
                                Unlock Your Academic Success with PerfectGrader
                            </h2>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300">
                            Unlock your academic potential with PerfectGrader,
                            the ultimate tool for achieving academic success.
                        </p>
                    </div>
                    <div className="space-y-3">
                        {features.map((feature) => (
                            <FeatureItem key={feature.id} {...feature} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
export default WhyPerfectGrader;
