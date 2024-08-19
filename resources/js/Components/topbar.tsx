import React, { useState } from "react";

interface NavbarProps {
    onToggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onToggleSidebar }) => {
    // State for managing dropdown visibility
    const [isSearchDropdownOpen, setSearchDropdownOpen] =
        useState<boolean>(false);
    const [isNotificationDropdownOpen, setNotificationDropdownOpen] =
        useState<boolean>(false);
    const [activeTab, setActiveTab] = useState<"notifications" | "messages">(
        "notifications"
    );
    const [isProfileDropdownOpen, setProfileDropdownOpen] =
        useState<boolean>(false);

    const toggleSearchDropdown = () =>
        setSearchDropdownOpen(!isSearchDropdownOpen);

    const toggleNotificationDropdown = () =>
        setNotificationDropdownOpen(!isNotificationDropdownOpen);

    const handleTabChange = (tab: "notifications" | "messages") =>
        setActiveTab(tab);

    const toggleProfileDropdown = () =>
        setProfileDropdownOpen(!isProfileDropdownOpen);

    const toggleFullscreen = () => {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            document.documentElement.requestFullscreen();
        }
    };

    return (
        <div className="py-2 px-6 bg-[#f8f4f3] flex items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
            <button
                type="button"
                className="text-lg text-gray-900 font-semibold sidebar-toggle"
                onClick={onToggleSidebar}
            >
                <i className="ri-menu-line"></i>
            </button>

            <ul className="ml-auto flex items-center">
                <li className="mr-1 dropdown">
                    <button
                        type="button"
                        className="dropdown-toggle text-gray-400 mr-4 w-8 h-8 rounded flex items-center justify-center hover:text-gray-600"
                        onClick={toggleSearchDropdown}
                    >
                        <span>search ico</span>
                    </button>
                    {isSearchDropdownOpen && (
                        <div className="dropdown-menu shadow-md shadow-black/5 z-30 max-w-xs w-full bg-white rounded-md border border-gray-100">
                            <form className="p-4 border-b border-b-gray-100">
                                <div className="relative w-full">
                                    <input
                                        type="text"
                                        className="py-2 pr-4 pl-10 bg-gray-50 w-full outline-none border border-gray-100 rounded-md text-sm focus:border-blue-500"
                                        placeholder="Search..."
                                    />
                                    <i className="ri-search-line absolute top-1/2 left-4 -translate-y-1/2 text-gray-900"></i>
                                </div>
                            </form>
                        </div>
                    )}
                </li>

                <li className="dropdown">
                    <button
                        type="button"
                        className="dropdown-toggle text-gray-400 mr-4 w-8 h-8 rounded flex items-center justify-center hover:text-gray-600"
                        onClick={toggleNotificationDropdown}
                    >
                        <span>msg-ico</span>
                    </button>
                    {isNotificationDropdownOpen && (
                        <div className="dropdown-menu shadow-md shadow-black/5 z-30 max-w-xs w-full bg-white rounded-md border border-gray-100">
                            <div className="flex items-center px-4 pt-4 border-b border-b-gray-100 notification-tab">
                                <button
                                    type="button"
                                    className={`text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 pb-1 mr-4 ${
                                        activeTab === "notifications"
                                            ? "border-blue-500"
                                            : "border-transparent"
                                    }`}
                                    onClick={() =>
                                        handleTabChange("notifications")
                                    }
                                >
                                    Notifications
                                </button>
                                <button
                                    type="button"
                                    className={`text-gray-400 font-medium text-[13px] hover:text-gray-600 border-b-2 pb-1 mr-4 ${
                                        activeTab === "messages"
                                            ? "border-blue-500"
                                            : "border-transparent"
                                    }`}
                                    onClick={() => handleTabChange("messages")}
                                >
                                    Messages
                                </button>
                            </div>
                            <div className="my-2">
                                <ul
                                    className={`max-h-64 overflow-y-auto ${
                                        activeTab === "notifications"
                                            ? "block"
                                            : "hidden"
                                    }`}
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                                        >
                                            <img
                                                src="https://placehold.co/32x32"
                                                alt=""
                                                className="w-8 h-8 rounded block object-cover align-middle"
                                            />
                                            <div className="ml-2">
                                                <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                                                    New order
                                                </div>
                                                <div className="text-[11px] text-gray-400">
                                                    from a user
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    {/* Add more notifications here */}
                                </ul>
                                <ul
                                    className={`max-h-64 overflow-y-auto ${
                                        activeTab === "messages"
                                            ? "block"
                                            : "hidden"
                                    }`}
                                >
                                    <li>
                                        <a
                                            href="#"
                                            className="py-2 px-4 flex items-center hover:bg-gray-50 group"
                                        >
                                            <img
                                                src="https://placehold.co/32x32"
                                                alt=""
                                                className="w-8 h-8 rounded block object-cover align-middle"
                                            />
                                            <div className="ml-2">
                                                <div className="text-[13px] text-gray-600 font-medium truncate group-hover:text-blue-500">
                                                    John Doe
                                                </div>
                                                <div className="text-[11px] text-gray-400">
                                                    Hello there!
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    {/* Add more messages here */}
                                </ul>
                            </div>
                        </div>
                    )}
                </li>

                <button id="fullscreen-button" onClick={toggleFullscreen}>
                    <span>fs-toggle</span>
                </button>

                <li className="dropdown ml-3">
                    <button
                        type="button"
                        className="dropdown-toggle flex items-center"
                        onClick={toggleProfileDropdown}
                    >
                        <div className="flex-shrink-0 w-10 h-10 relative">
                            <div className="p-1 bg-white rounded-full focus:outline-none focus:ring">
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="https://laravelui.spruko.com/tailwind/ynex/build/assets/images/faces/9.jpg"
                                    alt="User"
                                />
                                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-400 border-2 border-white rounded-full animate-ping"></div>
                                <div className="top-0 left-7 absolute w-3 h-3 bg-lime-500 border-2 border-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="p-2 md:block text-left">
                            <h2 className="text-sm font-semibold text-gray-800">
                                John Doe
                            </h2>
                            <p className="text-xs text-gray-500">
                                Administrator
                            </p>
                        </div>
                    </button>
                    {isProfileDropdownOpen && (
                        <ul className="dropdown-menu shadow-md shadow-black/5 z-30 py-1.5 rounded-md bg-white border border-gray-100 w-full max-w-[140px]">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
                                >
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50"
                                >
                                    Settings
                                </a>
                            </li>
                            <li>
                                <form method="POST" action="">
                                    <a
                                        role="menuitem"
                                        className="flex items-center text-[13px] py-1.5 px-4 text-gray-600 hover:text-[#f84525] hover:bg-gray-50 cursor-pointer"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            // Add logout logic here
                                        }}
                                    >
                                        Log Out
                                    </a>
                                </form>
                            </li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
