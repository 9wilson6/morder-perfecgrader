const BlogCard = ({
    cover,
    published_date,
    category,
    author,
    title,
}: {
    cover: string;
    published_date: { day: string; month: string };
    category?: string;
    author?: string;
    title?: string;
}) => {
    return (
        <div className="bg-white dark:bg-gray-950 shadow-lg shadow-gray-200/50 dark:shadow-transparent border border-gray-200/50 dark:border-gray-800/50">
            <img
                src={cover}
                alt="illustration"
                width={1300}
                className="w-full aspect-[5/3] object-cover bg-gray-100 dark:bg-gray-900"
            />
            <div className="relative p-4 pt-10">
                <div className="absolute right-4 -top-8 bg-blue-600 px-4 py-0.5 flex flex-col">
                    <p className="font-bold text-2xl text-white">
                        {published_date.day}
                    </p>
                    <p className="text-sm text-gray-200">
                        {published_date.month}
                    </p>
                </div>
                <div className="flex items-center text-gray-500 dark:text-gray-400">
                    {category && <span>{category}</span>}
                    {category && author && (
                        <span className="relative px-5 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1/2 before:-translate-x-1/2 before:h-3 before:w-px before:bg-gray-400" />
                    )}
                    {author && <span>{author}</span>}
                </div>
                {title && (
                    <h1 className="text-xl my-6 font-semibold text-gray-900 dark:text-white">
                        {title}
                    </h1>
                )}
                <a
                    href="#"
                    className="text-blue-600 dark:text-blue-500 transition hover:text-opacity-90 flex items-center gap-x-3 group"
                >
                    Read more
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-4 h-4 transition-all ease-linear group-hover:ml-1"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </a>
            </div>
        </div>
    );
};

const posts = [
    {
        id: 1,
        cover: "https://www.perfectgrader.com/storage/thumbnails/posts/7Q3bXTK6XuK0AcuLq6mVDC9GGTIPJHcYm0gyOwpg.jpg",
        published_date: {
            day: "10",
            month: "May",
        },
        category: "categoryName",
        author: "John Doe",
        title: "Here some good ways write type safe support attaque ",
    },
    {
        id: 2,
        cover: "https://cdn.pixabay.com/photo/2023/12/15/03/11/basket-to-the-sea-8449952_1280.jpg",
        published_date: {
            day: "10",
            month: "May",
        },
        category: "categoryName",
        author: "John Doe",
        title: "Here some good ways write type safe support attaque ",
    },
    {
        id: 3,
        cover: "https://flexiwind.vercel.app/prev/images/working-on-housing-project.jpg",
        published_date: {
            day: "10",
            month: "May",
        },
        category: "categoryName",
        author: "John Doe",
        title: "Here some good ways write type safe support attaque ",
    },
];

const BlogSection = () => {
    return (
        <>
            <section className="relative py-20 mx-auto px-6 sm:px-16 lg:px-24  dark:bg-black-200">
                <div className=" flex flex-col lg:flex-row ">
                    <div className="absolute w-full lg:w-1/2 inset-y-0 lg:right-0 hidden lg:block">
                        <span className="absolute -left-6 md:left-4 top-24 lg:top-28 w-24 h-24 rotate-90 skew-x-12 rounded-3xl bg-green-400 blur-xl opacity-60 lg:opacity-95 lg:block hidden" />
                        <span className="absolute -left-[20%] top-[10%] w-64 h-64 rounded-full bg-purple/[0.4] dark:bg-[#1D544B] blur-xl opacity-80" />
                        <span className="absolute right-4 bottom-12 w-24 h-24 rounded-3xl bg-blue-600 blur-xl opacity-80" />
                    </div>
                    <span className="w-4/12 lg:w-2/12 aspect-square bg-gradient-to-tr from-blue-600 to-green-400 absolute -top-5 lg:left-0 rounded-full skew-y-12 blur-2xl opacity-40 skew-x-12 rotate-90" />
                    <div className="relative space-y-10">
                        <div className="text-center space-y-6 max-w-2xl mx-auto">
                            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white capitalize">
                                Our most recent Articles
                            </h1>
                            <p className="text-gray-700 dark:text-gray-300">
                                Explore the latest insights and trends from our
                                blog, featuring expert opinions, industry news,
                                and thought-provoking discussions on various
                                topics.
                            </p>
                        </div>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {posts
                                .filter(
                                    (post) =>
                                        post.cover &&
                                        post.published_date &&
                                        post.category &&
                                        post.author &&
                                        post.title
                                )
                                .slice(0, 3)
                                .map((post) => (
                                    <BlogCard key={post.id} {...post} />
                                ))}
                        </div>
                        <div className="flex justify-center">
                            <a
                                href="#"
                                className="px-5 py-2.5 border border-gray-100 dark:border-gray-900 text-blue-600 dark:text-gray-300 flex items-center gap-x-3"
                            >
                                See More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogSection;
