import { useNavigate } from "react-router-dom";

const UserListCard = ({ user }) => {
    const navigate = useNavigate()
    const isActive = user.status === "Active";

    return (
        <div className="bg-white rounded-3xl my-6 px-6 py-5 grid grid-cols-5 items-center gap-6 hover:-translate-y-1.25 duration-100 hover:cursor-pointer"
            onClick={() =>
                navigate(`/user-management/${user.id}`)
            }
        >

            <div className="flex items-center gap-4 col-span-1">
                <img src={user.avatar} alt="" className="w-14 h-14 rounded-full" />
                <div className="flex flex-col gap-2">
                    <h1 className="text-lg font-light">{user.name}</h1>
                    <div className="flex items-center gap-2">
                        <div className="bg-[#F3F4F6] rounded-lg px-2 py-1 inline-flex">
                            <h1 className="text-xs text-[#8B9295]">{user.role}</h1>
                        </div>
                        <div className={`rounded-lg px-2 py-1 inline-flex ${isActive ? "bg-[#DCFCE7] text-[#016630]" : "bg-[#FEE2E2] text-[#B91C1C]"}`}>
                            <h1 className="text-xs font-medium">{user.status}</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2 text-sm text-[#8B9295]">

                <div className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" />
                        <path d="M22 6L12 13L2 6" />
                    </svg>
                    {user.email}
                </div>

                <div className="flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92V20C22 20.55 21.55 21 21 21H19C10.72 21 4 14.28 4 6V4C4 3.45 4.45 3 5 3H8.08C8.59 3 9.04 3.34 9.17 3.84L10.41 8.81C10.53 9.3 10.33 9.8 9.94 10.09L7.8 11.66C8.84 13.88 10.66 15.7 12.88 16.74L14.45 14.6C14.74 14.21 15.24 14.01 15.73 14.13L20.7 15.37C21.2 15.5 21.54 15.95 21.54 16.46C21.54 16.46 21.54 16.46 22 16.92Z" />
                    </svg>
                    {user.phone}
                </div>
            </div>
            <div className="flex flex-col gap-1 text-sm">
                <div className="flex items-center gap-2 text-[#6A7282]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                        <path d="M16 2v4M8 2v4M3 10h18" />
                    </svg>
                    Joined
                </div>

                <div className="font-medium">{user.joinedDate}</div>

                <div className="text-[#8B9295]">
                    <span className="text-black font-thin">Last: {user.lastActive}</span>
                </div>
            </div>

            <div className="text-left">
                <h1 className="text-sm text-[#6A7282] mb-1">Appointments</h1>
                <h1 className="text-lg font-medium">{user.metrics.totalAppointments}</h1>
            </div>

            <div className="flex gap-2 w-full justify-end">
                <button className="px-3 py-2 rounded-lg text-white flex items-center gap-1.5 text-xs font-medium bg-linear-to-r from-[#FE9A00] to-[#E17100]">
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

                <button className="flex items-center gap-1 border border-gray-200 px-3 py-2 rounded-lg text-xs hover:bg-gray-50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12C23 12 19 20 12 20C5 20 1 12 1 12Z" /><circle cx="12" cy="12" r="3" /></svg>
                    View
                </button>

                <button className="flex items-center gap-1 border border-gray-200 px-3 py-2 rounded-lg text-xs hover:bg-gray-50">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    Edit
                </button>
            </div>
        </div>
    );
};

export default UserListCard;