import { useState } from "react";
import { useDispatch } from "react-redux";
import { editFamilyMember, deleteFamilyMember } from "../redux/userSlice";

import MemberFormModal from "./MemberFormModal";

const FamilyMemberCard = ({ member, user, memberIndex }) => {
    const FirstName = member.name.split(" ")[0];
    const LastName = member.name.split(" ")[1];

    const [isEditOpen, setIsEditOpen] = useState(false);

    console.log(FirstName, LastName);

    const dispatch = useDispatch();

    const avatar = `https://ui-avatars.com/api/?name=${FirstName}+${LastName}&background=155DFC&color=ffffff&font-size=0.3&size=16`;
    return (
        <div className="border border-[#0000001A] px-5 py-4 my-4 rounded-2xl flex justify-between select-none">
            <div className=" flex justify-between w-full" >
                <div className="flex gap-2 my-5">
                    <div>
                        <img src={avatar} className="w-14 h-14 rounded-full" alt="" />
                    </div>
                    <div className="flex flex-col gap-1.5 justify-start">
                        <h1 className="text-lg">{member.name}</h1>
                        <h1 className="text-sm bg-[#F3F4F6] text-[#8B9295] border border-[#00000010] rounded-xl px-3 py-1 w-fit">{member.relation}</h1>
                        <div className="flex gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6667 11.28V13.28C14.6674 13.4657 14.6294 13.6494 14.555 13.8195C14.4806 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5846 14.6079 13.3983 14.63 13.2133 14.6133C11.1619 14.3904 9.19134 13.6894 7.46001 12.5667C5.84923 11.5431 4.48356 10.1774 3.46001 8.56665C2.33333 6.82745 1.63217 4.84731 1.41334 2.78665C1.39668 2.60229 1.41859 2.41649 1.47767 2.24107C1.53676 2.06564 1.63172 1.90444 1.75652 1.76773C1.88131 1.63102 2.03321 1.52179 2.20253 1.447C2.37186 1.37221 2.5549 1.33349 2.74001 1.33332H4.74001C5.06354 1.33013 5.3772 1.4447 5.62251 1.65567C5.86783 1.86664 6.02806 2.15961 6.07334 2.47998C6.15775 3.12003 6.31431 3.74847 6.54001 4.35332C6.6297 4.59193 6.64911 4.85126 6.59594 5.10057C6.54277 5.34988 6.41925 5.57872 6.24001 5.75998L5.39334 6.60665C6.34238 8.27568 7.72431 9.65761 9.39334 10.6067L10.24 9.75998C10.4213 9.58074 10.6501 9.45722 10.8994 9.40405C11.1487 9.35088 11.4081 9.37029 11.6467 9.45998C12.2515 9.68568 12.88 9.84224 13.52 9.92665C13.8439 9.97234 14.1396 10.1355 14.351 10.385C14.5624 10.6345 14.6748 10.953 14.6667 11.28Z" stroke="#4A5565" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <h1 className="text-[#4A5565] text-sm">+91 {member.phone}</h1>
                        </div>
                        <div className="flex gap-2">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_1_1374)">
                                    <path d="M5.33333 1.33337V4.00004" stroke="#6A7282" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M10.6667 1.33337V4.00004" stroke="#6A7282" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z" stroke="#6A7282" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                    <path d="M2 6.66663H14" stroke="#6A7282" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_1374">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h1 className="text-[#6A7282] text-sm">
                                {member.dob.split("-").reverse().join("-")}
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => setIsEditOpen(true)}
                        className="cursor-pointer"
                    >
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_1_1381" fill="white">
                                <path d="M0 8C0 3.58172 3.58172 0 8 0H24C28.4183 0 32 3.58172 32 8V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V8Z" />
                            </mask>
                            <path d="M0 8C0 3.58172 3.58172 0 8 0H24C28.4183 0 32 3.58172 32 8V24C32 28.4183 28.4183 32 24 32H8C3.58172 32 0 28.4183 0 24V8Z" fill="white" />
                            <path d="M8 0V0.8H24V0V-0.8H8V0ZM32 8H31.2V24H32H32.8V8H32ZM24 32V31.2H8V32V32.8H24V32ZM0 24H0.8V8H0H-0.8V24H0ZM8 32V31.2C4.02355 31.2 0.8 27.9764 0.8 24H0H-0.8C-0.8 28.8601 3.13989 32.8 8 32.8V32ZM32 24H31.2C31.2 27.9764 27.9764 31.2 24 31.2V32V32.8C28.8601 32.8 32.8 28.8601 32.8 24H32ZM24 0V0.8C27.9764 0.8 31.2 4.02355 31.2 8H32H32.8C32.8 3.13989 28.8601 -0.8 24 -0.8V0ZM8 0V-0.8C3.13989 -0.8 -0.8 3.13989 -0.8 8H0H0.8C0.8 4.02355 4.02355 0.8 8 0.8V0Z" fill="black" fill-opacity="0.1" mask="url(#path-1-inside-1_1_1381)" />
                            <g clip-path="url(#clip0_1_1381)">
                                <path d="M16 10H11.3333C10.9797 10 10.6406 10.1405 10.3905 10.3905C10.1405 10.6406 10 10.9797 10 11.3333V20.6667C10 21.0203 10.1405 21.3594 10.3905 21.6095C10.6406 21.8595 10.9797 22 11.3333 22H20.6667C21.0203 22 21.3594 21.8595 21.6095 21.6095C21.8595 21.3594 22 21.0203 22 20.6667V16" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M20.25 9.75003C20.5152 9.48481 20.8749 9.33582 21.25 9.33582C21.6251 9.33582 21.9848 9.48481 22.25 9.75003C22.5152 10.0152 22.6642 10.375 22.6642 10.75C22.6642 11.1251 22.5152 11.4848 22.25 11.75L16.2414 17.7594C16.0831 17.9175 15.8875 18.0333 15.6727 18.096L13.7574 18.656C13.7 18.6728 13.6392 18.6738 13.5813 18.6589C13.5234 18.6441 13.4706 18.614 13.4283 18.5717C13.3861 18.5295 13.3559 18.4766 13.3411 18.4188C13.3263 18.3609 13.3273 18.3001 13.344 18.2427L13.904 16.3274C13.967 16.1127 14.083 15.9174 14.2414 15.7594L20.25 9.75003Z" stroke="#0A0A0A" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            </g>
                            <defs>
                                <clipPath id="clip0_1_1381">
                                    <rect width="16" height="16" fill="white" transform="translate(8 8)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                    <button
                        onClick={() => {

                            dispatch(
                                deleteFamilyMember({
                                    userId: user.id,
                                    memberIndex,
                                })
                            );
                        }}
                        className="cursor-pointer"
                    >
                        <svg width="38" height="32" viewBox="0 0 38 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="path-1-inside-1_1_1385" fill="white">
                                <path d="M0 8C0 3.58172 3.58172 0 8 0H29.6C34.0183 0 37.6 3.58172 37.6 8V24C37.6 28.4183 34.0183 32 29.6 32H8.00001C3.58173 32 0 28.4183 0 24V8Z" />
                            </mask>
                            <path d="M0 8C0 3.58172 3.58172 0 8 0H29.6C34.0183 0 37.6 3.58172 37.6 8V24C37.6 28.4183 34.0183 32 29.6 32H8.00001C3.58173 32 0 28.4183 0 24V8Z" fill="white" />
                            <path d="M8 0V0.8H29.6V0V-0.8H8V0ZM37.6 8H36.8V24H37.6H38.4V8H37.6ZM29.6 32V31.2H8.00001V32V32.8H29.6V32ZM0 24H0.8V8H0H-0.8V24H0ZM8.00001 32V31.2C4.02356 31.2 0.8 27.9764 0.8 24H0H-0.8C-0.8 28.8601 3.1399 32.8 8.00001 32.8V32ZM37.6 24H36.8C36.8 27.9764 33.5765 31.2 29.6 31.2V32V32.8C34.4601 32.8 38.4 28.8601 38.4 24H37.6ZM29.6 0V0.8C33.5764 0.8 36.8 4.02355 36.8 8H37.6H38.4C38.4 3.13989 34.4601 -0.8 29.6 -0.8V0ZM8 0V-0.8C3.13989 -0.8 -0.8 3.13989 -0.8 8H0H0.8C0.8 4.02355 4.02355 0.8 8 0.8V0Z" fill="black" fill-opacity="0.1" mask="url(#path-1-inside-1_1_1385)" />
                            <path d="M12.8 12H24.8" stroke="#E7000B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M23.4667 12V21.3333C23.4667 22 22.8 22.6667 22.1334 22.6667H15.4667C14.8 22.6667 14.1334 22 14.1334 21.3333V12" stroke="#E7000B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M16.1334 12V10.6667C16.1334 10 16.8 9.33337 17.4667 9.33337H20.1334C20.8 9.33337 21.4667 10 21.4667 10.6667V12" stroke="#E7000B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.4667 15.3334V19.3334" stroke="#E7000B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M20.1334 15.3334V19.3334" stroke="#E7000B" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                    </button>
                </div>
            </div>
            <MemberFormModal
                isOpen={isEditOpen}
                onClose={() => setIsEditOpen(false)}
                initialData={member}
                mode="edit"
                onSave={(updatedMember) => {

                    dispatch(
                        editFamilyMember({
                            userId: user.id,
                            memberIndex,
                            updatedMember,
                        })
                    );
                }}
            />
        </div>
    )
}
export default FamilyMemberCard;