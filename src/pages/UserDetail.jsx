import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Customdd from "../components/Customdd";
import { updateUserStatus } from "../redux/userSlice";
import UserMetric from "../components/UserMetric";
import OverviewTab from "../components/OverviewTab";
import OrdersAndBookingTab from "../components/OrdersAndBookingTab";
import Payments from "../components/PaymentsTab";
import FamilyMembersTab from "../components/FamilyMembersTab";

const UserDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [statusFilter, setStatusFilter] = useState("");
    const [activeTab, setActiveTab] = useState("Overview");

    const users = useSelector((state) => state.users.users);

    const user = users.find((u) => u.id.toString() === id);

    const tabs = [
        "Overview",
        "Orders & Bookings",
        "Payments",
        "Family Members",
    ];

    const [lineStyle, setLineStyle] = useState({
        width: 0,
        left: 0,
    });

    const tabRefs = useRef({});

    useEffect(() => {
        if (user?.status) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setStatusFilter(user.status);
        }
    }, [user]);

    useEffect(() => {
        const currentTab =
            tabRefs.current[activeTab];

        if (currentTab) {
            setLineStyle({
                width: currentTab.offsetWidth,
                left: currentTab.offsetLeft,
            });
        }
    }, [activeTab]);


    return (
        <div className="h-[calc(100vh-120px)] overflow-y-auto hide-scrollbar mt-4">
            <div
                className="flex gap-2 items-center cursor-pointer group w-fit"
                onClick={() => navigate(-1)}
            >
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400 group-hover:text-black transition-colors"
                >
                    <path d="M15 18L9 12L15 6" />
                </svg>
                <h1 className="text-[#4A5565] text-md group-hover:text-black group-hover:font-bold transition-all">
                    Back to User Management
                </h1>
            </div>
            <div className="flex justify-between px-2">
                <div className="mt-5 rounded-full flex gap-4">
                    <div><img src={user.avatar} className="rounded-full h-35 w-35" alt="" /></div>
                    <div className="flex flex-col gap-3">
                        <div>
                            <h1 className="text-2xl">{user.name}</h1>
                        </div>
                        <div className="flex gap-2">
                            <div
                                className={`px-3 py-1 rounded-full text-sm font-medium w-fit
                                    ${user.status === "Active"
                                        ? "bg-green-100 text-green-700"
                                        : user.status === "Inactive"
                                            ? "bg-red-100 text-red-700"
                                            : "bg-yellow-100 text-yellow-700"
                                    }
                                `}
                            >
                                {user.status}
                            </div>
                            <div className="text-[#0A0A0A] border-[#0000001A] border px-3 py-1 rounded-xl">
                                <h1 className="text-sm">{user.role}</h1>
                            </div>
                            <div className="text-[#4A5565] border-[#0000001A] border px-3 py-1 rounded-xl">
                                <h1 className="text-sm">{user.role === 'Patient' ? 'Normal User' : 'Support Staff'}</h1>
                            </div>
                            <div className="text-[#4A5565] px-3 py-1">
                                <h1 className="text-sm">ID: #{user.id}</h1>
                            </div>
                        </div>
                        <div className="flex gap-5 text-sm text-[#4A5565]">
                            <div className="flex items-center gap-1">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                    <line x1="16" y1="2" x2="16" y2="6" />
                                    <line x1="8" y1="2" x2="8" y2="6" />
                                    <line x1="3" y1="10" x2="21" y2="10" />
                                </svg>
                                <span className=" text-gray-700">Joined:</span>
                                <span>{user.joinedDate}</span>
                            </div>

                            <div className="flex items-center gap-1">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                                </svg>
                                <span className=" text-[#4A5565]">Last Active:</span>
                                <span>{user.lastActive}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-5 flex gap-2 items-center">
                    <button className="px-4 py-3 rounded-lg text-white flex items-center gap-1.5 text-xs font-medium bg-linear-to-r from-[#FE9A00] to-[#E17100]">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_1_248)">
                                <path d="M7.70796 2.17732C7.73673 2.12506 7.77901 2.08148 7.83037 2.05113C7.88173 2.02077 7.9403 2.00476 7.99996 2.00476C8.05962 2.00476 8.11819 2.02077 8.16955 2.05113C8.22091 2.08148 8.26318 2.12506 8.29196 2.17732L10.26 5.91332C10.3069 5.99983 10.3724 6.07488 10.4518 6.13307C10.5311 6.19126 10.6224 6.23116 10.719 6.2499C10.8156 6.26863 10.9152 6.26575 11.0106 6.24144C11.106 6.21714 11.1948 6.17202 11.2706 6.10932L14.122 3.66666C14.1767 3.62214 14.2441 3.59614 14.3146 3.59239C14.3851 3.58865 14.4549 3.60735 14.514 3.64582C14.5732 3.68429 14.6186 3.74053 14.6437 3.80645C14.6689 3.87237 14.6725 3.94457 14.654 4.01266L12.7646 10.8433C12.7261 10.9831 12.643 11.1065 12.528 11.1948C12.413 11.2831 12.2723 11.3315 12.1273 11.3327H3.87329C3.72818 11.3316 3.58736 11.2833 3.47222 11.195C3.35707 11.1067 3.27389 10.9832 3.23529 10.8433L1.34662 4.01332C1.32812 3.94524 1.3317 3.87304 1.35685 3.80712C1.382 3.7412 1.42741 3.68495 1.48656 3.64649C1.5457 3.60802 1.61553 3.58931 1.68598 3.59306C1.75644 3.5968 1.82389 3.6228 1.87862 3.66732L4.72929 6.10999C4.80516 6.17268 4.89396 6.2178 4.98933 6.24211C5.0847 6.26641 5.18427 6.2693 5.28089 6.25056C5.37751 6.23183 5.46878 6.19193 5.54815 6.13374C5.62752 6.07554 5.69303 6.0005 5.73996 5.91399L7.70796 2.17732Z" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M3.33337 14H12.6667" stroke="white" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_248">
                                    <rect width="16" height="16" fill="white" />
                                </clipPath>
                            </defs>
                        </svg>

                        <span className="whitespace-nowrap">Upgrade to Premium</span>
                    </button>
                    <Customdd
                        statusFilter={statusFilter}
                        options={["Active", "Inactive"]}
                        setStatusFilter={(value) => {
                            setStatusFilter(value);

                            dispatch(
                                updateUserStatus({
                                    id: user.id,
                                    status: value,
                                })
                            );
                        }}
                    />
                </div>
            </div>
            <div>
                <UserMetric user={user} />
            </div>
            <div className="mt-6 border border-[#E5E7EB] rounded-2xl p-5">

                <div className="relative flex gap-8 border-b border-[#E5E7EB]">

                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            ref={(el) =>
                                (tabRefs.current[tab] = el)
                            }
                            onClick={() => setActiveTab(tab)}
                            className={`relative pb-4 text-sm font-medium transition-colors duration-300
                ${activeTab === tab
                                    ? "text-black"
                                    : "text-[#6B7280] hover:text-black"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}

                    <span
                        className="absolute bottom-0 h-0.75 bg-black rounded-full transition-all duration-300"
                        style={{
                            width: `${lineStyle.width}px`,
                            left: `${lineStyle.left}px`,
                        }}
                    />
                </div>

                <div className="mt-5">

                    {activeTab === "Overview" && (
                        <OverviewTab user={user} />
                    )}

                    {activeTab === "Orders & Bookings" && (
                        <OrdersAndBookingTab user={user} />
                    )}

                    {activeTab === "Payments" && (
                        <Payments user={user} />
                    )}

                    {activeTab === "Family Members" && (
                        <FamilyMembersTab user={user} />
                    )}
                </div>
            </div>
        </div>
    )
}
export default UserDetail;