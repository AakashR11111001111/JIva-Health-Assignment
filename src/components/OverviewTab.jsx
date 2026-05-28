import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUser, addUserAddress } from "../redux/userSlice";
import OverviewAddressCard from "./OverviewAddressCard";
const OverviewTab = ({ user }) => {

    const [isEditOpen, setIsEditOpen] = useState(false);
    const [isAddOpen, setIsAddOpen] = useState(false);

    const [newAddress, setNewAddress] = useState({
        type: "",
        addressLine: "",
        city: "",
        state: "",
        pincode: "",
        isDefault: false,
    });

    const dispatch = useDispatch();



    const [formData, setFormData] = useState({
        email: user.email || "",
        phone: user.phone || "",
        dob: user.dob || "",
        gender: user.gender || "",
        bloodGroup: user.bloodGroup || "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleAddChange = (e) => {
        const { name, value, type, checked } = e.target;

        setNewAddress((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };


    const handleSave = () => {

        dispatch(
            updateUser({
                id: user.id,

                updatedData: {
                    email: formData.email,
                    phone: formData.phone,
                    dob: formData.dob,
                    gender: formData.gender,
                    bloodGroup: formData.bloodGroup,
                },
            })
        );
        setIsEditOpen(false);
    };

    return (
        <div className=" flex justify-between gap-10  items-start">
            <div className="bg-white rounded-2xl w-1/2 p-6">
                <div className="flex justify-between items-center">

                    <h1 className="text-md font-medium">
                        Personal Information
                    </h1>

                    <div
                        onClick={() => setIsEditOpen(true)}
                        className="group flex items-center gap-2 border border-[#0000001A] px-3 py-1 rounded-lg cursor-pointer hover:border-[#00000050] transition-all duration-200"
                    >
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-400 group-hover:text-black transition-colors duration-200"
                        >
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>

                        <h1 className="text-sm text-gray-500 group-hover:text-black transition-colors duration-200">
                            Edit
                        </h1>
                    </div>
                </div>
                <div>
                    <div className="my-4">
                        <div className="flex items-center gap-1">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_608)">
                                    <path d="M13.3333 2.66663H2.66668C1.9303 2.66663 1.33334 3.26358 1.33334 3.99996V12C1.33334 12.7363 1.9303 13.3333 2.66668 13.3333H13.3333C14.0697 13.3333 14.6667 12.7363 14.6667 12V3.99996C14.6667 3.26358 14.0697 2.66663 13.3333 2.66663Z" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.6667 4.66663L8.68668 8.46663C8.48086 8.59558 8.24289 8.66397 8.00001 8.66397C7.75713 8.66397 7.51916 8.59558 7.31334 8.46663L1.33334 4.66663" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_608">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h1 className="text-md ml-1.5 text-[#72AC9C]">Email: </h1>
                            <h1 className="text-md ml-1 text-[#263238]">{user.email}</h1>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_616)">
                                    <path d="M14.6667 11.28V13.28C14.6674 13.4657 14.6294 13.6494 14.555 13.8195C14.4806 13.9897 14.3715 14.1424 14.2347 14.2679C14.0979 14.3934 13.9364 14.489 13.7605 14.5485C13.5846 14.6079 13.3983 14.63 13.2133 14.6133C11.1619 14.3904 9.19134 13.6894 7.46001 12.5667C5.84923 11.5431 4.48356 10.1774 3.46001 8.56665C2.33333 6.82745 1.63217 4.84731 1.41334 2.78665C1.39668 2.60229 1.41859 2.41649 1.47767 2.24107C1.53676 2.06564 1.63172 1.90444 1.75652 1.76773C1.88131 1.63102 2.03321 1.52179 2.20253 1.447C2.37186 1.37221 2.5549 1.33349 2.74001 1.33332H4.74001C5.06354 1.33013 5.3772 1.4447 5.62251 1.65567C5.86783 1.86664 6.02806 2.15961 6.07334 2.47998C6.15775 3.12003 6.31431 3.74847 6.54001 4.35332C6.6297 4.59193 6.64911 4.85126 6.59594 5.10057C6.54277 5.34988 6.41925 5.57872 6.24001 5.75998L5.39334 6.60665C6.34238 8.27568 7.72431 9.65761 9.39334 10.6067L10.24 9.75998C10.4213 9.58074 10.6501 9.45722 10.8994 9.40405C11.1487 9.35088 11.4081 9.37029 11.6467 9.45998C12.2515 9.68568 12.88 9.84224 13.52 9.92665C13.8439 9.97234 14.1396 10.1355 14.351 10.385C14.5624 10.6345 14.6748 10.953 14.6667 11.28Z" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_616">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <h1 className="text-md ml-1.5 text-[#72AC9C]">Phone: </h1>
                            <h1 className="text-md ml-1 text-[#263238]">+91 {user.phone}</h1>
                        </div>

                        <div className="flex items-center gap-1">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_623)">
                                    <path d="M5.33334 1.33337V4.00004" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.6667 1.33337V4.00004" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 6.66663H14" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_623">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <h1 className="text-md ml-1.5 text-[#72AC9C]">Date of Birth: </h1>
                            <h1 className="text-md ml-1 text-[#263238]">{user.dob.split("-").join("/")}</h1>
                        </div>

                        <div className="flex items-center gap-1">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_623)">
                                    <path d="M5.33334 1.33337V4.00004" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.6667 1.33337V4.00004" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 6.66663H14" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_623">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <h1 className="text-md ml-1.5 text-[#72AC9C]">Gender: </h1>
                            <h1 className="text-md ml-1 text-[#263238]">{user.gender}</h1>
                        </div>

                        <div className="flex items-center gap-1">
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1_623)">
                                    <path d="M5.33334 1.33337V4.00004" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.6667 1.33337V4.00004" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M12.6667 2.66663H3.33333C2.59695 2.66663 2 3.26358 2 3.99996V13.3333C2 14.0697 2.59695 14.6666 3.33333 14.6666H12.6667C13.403 14.6666 14 14.0697 14 13.3333V3.99996C14 3.26358 13.403 2.66663 12.6667 2.66663Z" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M2 6.66663H14" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_623">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

                            <h1 className="text-md ml-1.5 text-[#72AC9C]">Blood Group: </h1>
                            <h1 className="text-md ml-1 text-[#263238]">{user.bloodGroup}</h1>
                        </div>
                    </div>
                </div>
            </div>

            {isEditOpen && (

                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    {/* BACKDROP */}
                    <div
                        onClick={() => setIsEditOpen(false)}
                        className="absolute inset-0 bg-black/30 backdrop-blur-sm"
                    />

                    {/* MODAL */}
                    <div className="relative z-10 w-125 bg-white rounded-3xl p-6 shadow-2xl animate-fadeUp">

                        {/* HEADER */}
                        <div className="flex items-center justify-between mb-6">

                            <h1 className="text-xl font-semibold">
                                Edit Personal Information
                            </h1>

                            <button
                                onClick={() => setIsEditOpen(false)}
                                className="text-2xl text-gray-400 hover:text-black transition-colors"
                            >

                            </button>
                        </div>

                        {/* FORM */}
                        <div className="flex flex-col gap-4">

                            <div>
                                <label className="text-sm text-[#72AC9C]">
                                    Email
                                </label>

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-1 border border-[#E5E7EB] rounded-xl px-4 py-3 outline-none focus:border-black"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-[#72AC9C]">
                                    Phone
                                </label>

                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full mt-1 border border-[#E5E7EB] rounded-xl px-4 py-3 outline-none focus:border-black"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-[#72AC9C]">
                                    Date of Birth
                                </label>

                                <input
                                    type="date"
                                    name="dob"
                                    value={formData.dob}
                                    onChange={handleChange}
                                    className="w-full mt-1 border border-[#E5E7EB] rounded-xl px-4 py-3 outline-none focus:border-black"
                                />
                            </div>

                            <div>
                                <label className="text-sm text-[#72AC9C]">
                                    Gender
                                </label>

                                <select
                                    name="gender"
                                    value={formData.gender}
                                    onChange={handleChange}
                                    className="w-full mt-1 border border-[#E5E7EB] rounded-xl px-4 py-3 outline-none focus:border-black"
                                >
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="text-sm text-[#72AC9C]">
                                    Blood Group
                                </label>

                                <input
                                    type="text"
                                    name="bloodGroup"
                                    value={formData.bloodGroup}
                                    onChange={handleChange}
                                    className="w-full mt-1 border border-[#E5E7EB] rounded-xl px-4 py-3 outline-none focus:border-black"
                                />
                            </div>

                        </div>

                        {/* ACTIONS */}
                        <div className="flex justify-end gap-3 mt-7">

                            <button
                                onClick={() => setIsEditOpen(false)}
                                className="px-5 py-2.5 rounded-xl border border-[#E5E7EB]"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={handleSave}
                                className="px-5 py-2.5 rounded-xl bg-black text-white"
                            >
                                Save Changes
                            </button>

                        </div>

                    </div>
                </div>
            )}
            <div className="bg-white rounded-2xl w-1/2 max-h-100 hide-scrollbar overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
                <div className="sticky top-0 z-10 bg-white px-6 pt-6 pb-4 flex justify-between items-center">
                    <h1 className="text-md font-medium">
                        Addresses
                    </h1>

                    <div
                        onClick={() => setIsAddOpen(true)}
                        className="group flex items-center gap-2 border border-[#0000001A] px-3 py-1 rounded-lg cursor-pointer hover:border-[#00000050] transition-all duration-200">

                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="text-gray-400 group-hover:text-black transition-colors duration-200"
                        >
                            <line x1="12" y1="5" x2="12" y2="19" />
                            <line x1="5" y1="12" x2="19" y2="12" />
                        </svg>

                        <h1

                            className="text-sm text-gray-500 group-hover:text-black transition-colors duration-200">
                            Add
                        </h1>
                    </div>
                </div>
                <div className="my-4">

                    {user.addresses?.length > 0 ? (

                        user.addresses.map((address, index) => (
                            <OverviewAddressCard
                                key={`${address.addressLine}-${index}`}
                                address={address}
                                userId={user.id}
                                addressIndex={index}
                            />
                        ))

                    ) : (

                        <div className="flex flex-col items-center justify-center  text-center">

                            <h1 className="mt-4 text-lg font-medium text-gray-600">
                                No Addresses Found
                            </h1>

                        </div>
                    )}
                </div>
            </div>
            {isAddOpen && (

                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    <div
                        onClick={() => setIsAddOpen(false)}
                        className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fadeIn"
                    />

                    <div className="relative z-10 w-130 bg-white rounded-3xl p-6 shadow-2xl animate-fadeUp">

                        <div className="flex items-center justify-between mb-6">

                            <h1 className="text-xl font-semibold">
                                Add Address
                            </h1>

                            <button
                                onClick={() => setIsAddOpen(false)}
                                className="text-2xl text-gray-400 hover:text-black transition"
                            >
                                ×
                            </button>
                        </div>

                        <div className="flex flex-col gap-4">

                            <input
                                name="type"
                                value={newAddress.type}
                                onChange={handleAddChange}
                                className="border rounded-xl px-4 py-3 hover:border-black transition"
                                placeholder="Type (Home / Office)"
                            />

                            <input
                                name="addressLine"
                                value={newAddress.addressLine}
                                onChange={handleAddChange}
                                className="border rounded-xl px-4 py-3 hover:border-black transition"
                                placeholder="Address Line"
                            />

                            <div className="flex gap-3">

                                <input
                                    name="city"
                                    value={newAddress.city}
                                    onChange={handleAddChange}
                                    className="border rounded-xl px-4 py-3 w-full hover:border-black transition"
                                    placeholder="City"
                                />

                                <input
                                    name="state"
                                    value={newAddress.state}
                                    onChange={handleAddChange}
                                    className="border rounded-xl px-4 py-3 w-full hover:border-black transition"
                                    placeholder="State"
                                />

                            </div>

                            <input
                                name="pincode"
                                value={newAddress.pincode}
                                onChange={handleAddChange}
                                className="border rounded-xl px-4 py-3 hover:border-black transition"
                                placeholder="Pincode"
                            />

                            <label className="flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer hover:border-black transition">

                                <span className="text-sm text-gray-600">
                                    Set as Default Address
                                </span>

                                <input
                                    type="checkbox"
                                    name="isDefault"
                                    checked={newAddress.isDefault}
                                    onChange={handleAddChange}
                                    className="w-5 h-5 accent-black"
                                />
                            </label>
                        </div>

                        <div className="flex justify-end gap-3 mt-6">

                            <button
                                onClick={() => setIsAddOpen(false)}
                                className="px-5 py-2.5 border rounded-xl hover:bg-gray-100 transition"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => {

                                    dispatch(addUserAddress({
                                        userId: user.id,
                                        address: newAddress
                                    }));

                                    setNewAddress({
                                        type: "",
                                        addressLine: "",
                                        city: "",
                                        state: "",
                                        pincode: "",
                                        isDefault: false,
                                    });

                                    setIsAddOpen(false);
                                }}
                                className="px-5 py-2.5 bg-black text-white rounded-xl hover:scale-105 transition"
                            >
                                Save Address
                            </button>

                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
export default OverviewTab