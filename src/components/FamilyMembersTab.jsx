import { useState } from "react";
import { useDispatch } from "react-redux";

import FamilyMemberCard from "./FamilyMemberCard";
import MemberFormModal from "./MemberFormModal";

import { addFamilyMember } from "../redux/userSlice";

const FamilyMembersTab = ({ user }) => {

    const dispatch = useDispatch();

    const [isAddOpen, setIsAddOpen] = useState(false);

    const familyMembers = user.familyMembers;

    return (
        <div className="p-6 bg-white w-full rounded-2xl">

            <div className="flex justify-between">

                <h1 className="text-lg">
                    Family Members
                </h1>

                <button
                    onClick={() => setIsAddOpen(true)}
                    className="flex gap-2 items-center justify-between bg-[#263238] px-3 py-2 rounded-xl transition-all duration-150 hover:bg-[#3B4A50] cursor-pointer"
                >
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M3.33331 8H12.6666"
                            stroke="white"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8 3.33337V12.6667"
                            stroke="white"
                            strokeWidth="1.33333"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>

                    <h1 className="text-white text-sm">
                        Add Member
                    </h1>
                </button>
            </div>

            <div className="p-6 max-h-96 overflow-y-auto hide-scrollbar">

                {
                    familyMembers?.length > 0 ? (

                        familyMembers.map((member, index) => (
                            <FamilyMemberCard
                                key={member.id || index}
                                member={member}
                                user={user}
                                memberIndex={index}
                            />
                        ))

                    ) : (

                        <div className="flex items-center justify-center h-40 border border-dashed border-[#D1D5DB] rounded-2xl bg-[#F9FAFB]">

                            <h1 className="text-sm text-[#6B7280]">
                                No Family Members Found
                            </h1>

                        </div>
                    )
                }

            </div>


            <MemberFormModal
                isOpen={isAddOpen}
                onClose={() => setIsAddOpen(false)}
                mode="add"
                initialData={{
                    name: "",
                    relation: "",
                    phone: "",
                    dob: "",
                }}
                onSave={(newMember) => {

                    dispatch(
                        addFamilyMember({
                            userId: user.id,
                            member: {
                                id: Date.now(),
                                ...newMember,
                            },
                        })
                    );
                }}
            />
        </div>
    );
};

export default FamilyMembersTab;