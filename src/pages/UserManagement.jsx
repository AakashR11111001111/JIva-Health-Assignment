import Analytics from "../components/Analytics";
import Filters from "../components/Filters";
import UserList from "../components/UserList";

const UserManagement = () => {
    return (
       <div className="h-[calc(100vh-120px)] overflow-y-auto hide-scrollbar mt-4">
            <div>
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-light">User Management</h1>
                    <button className="bg-[#263238] text-white px-3 py-1 flex gap-2 items-center rounded-lg">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 14 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7 2V12M2 7H12"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                        </svg>
                        Add User
                    </button>
                </div>
                <div>
                    <h6 className="text-[#6A7282] text-md font-thin">Manage User Accounts and Permissions</h6>
                </div>
            </div>
            <div>
                <Analytics />
            </div>
            <div className="sticky top-0 z-50 py-1 bg-[#F0F1F2]">
                <Filters />
            </div>
            <div className="flex-1">
                <UserList />
            </div>
        </div>
    )
}

export default UserManagement;