import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateUserAddress, deleteUserAddress } from "../redux/userSlice";
const OverviewAddressCard = ({ address, userId, addressIndex }) => {

    const dispatch = useDispatch();
    const [isEditOpen, setIsEditOpen] = useState(false);
    const [editAddress, setEditAddress] = useState(address);



    const handleChange = (e) => {
        const { name, value } = e.target;

        setEditAddress((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const addressLine = address.addressLine + ", " + address.city + ", " + address.state + ", " + address.pincode;

    return (
        <div className="bg-[#F9FAFA] flex py-5 my-5 items-center">
            <div className="w-1/4 flex justify-center items-start h-full">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 10C0 4.47715 4.47715 0 10 0H22C27.5228 0 32 4.47715 32 10V22C32 27.5228 27.5228 32 22 32H10C4.47715 32 0 27.5228 0 22V10Z" fill="#B3D9CE" />
                    <path d="M18 22V16.6667C18 16.4899 17.9298 16.3203 17.8047 16.1953C17.6797 16.0702 17.5101 16 17.3333 16H14.6667C14.4899 16 14.3203 16.0702 14.1953 16.1953C14.0702 16.3203 14 16.4899 14 16.6667V22" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 14.6667C9.99995 14.4728 10.0422 14.2811 10.1239 14.1052C10.2055 13.9293 10.3245 13.7733 10.4727 13.6481L15.1393 9.64873C15.38 9.44533 15.6849 9.33374 16 9.33374C16.3151 9.33374 16.62 9.44533 16.8607 9.64873L21.5273 13.6481C21.6755 13.7733 21.7945 13.9293 21.8761 14.1052C21.9578 14.2811 22 14.4728 22 14.6667V20.6667C22 21.0203 21.8595 21.3595 21.6095 21.6095C21.3594 21.8596 21.0203 22.0001 20.6667 22.0001H11.3333C10.9797 22.0001 10.6406 21.8596 10.3905 21.6095C10.1405 21.3595 10 21.0203 10 20.6667V14.6667Z" stroke="#016A4D" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="w-2/4">
                <div className="flex items-center">
                    <h1 className="text-[#263238] text-md ml-3">{address.type}</h1>
                    {address.isDefault === true &&
                        <div className="border-[#0000001A] ml-2 border px-3 py-1 flex gap-2 items-center rounded-lg">
                            <h1 className="text-xs">Default</h1>
                        </div>
                    }
                </div>
                <div>
                    <h1 className="text-[#263238] text-md ml-3">{addressLine}</h1>
                </div>
            </div>
            <div className="w-1/4 h-full flex items-center justify-evenly">
                <div
                    onClick={() => setIsEditOpen(true)}
                    className="flex justify-end items-center gap-1 border-[#0000001A] rounded-xl border px-3 py-2 cursor-pointer hover:border-[#00000050] transition duration-200"
                >    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_673)">
                            <path d="M8 2H3.33333C2.97971 2 2.64057 2.14048 2.39052 2.39052C2.14048 2.64057 2 2.97971 2 3.33333V12.6667C2 13.0203 2.14048 13.3594 2.39052 13.6095C2.64057 13.8595 2.97971 14 3.33333 14H12.6667C13.0203 14 13.3594 13.8595 13.6095 13.6095C13.8595 13.3594 14 13.0203 14 12.6667V8" stroke="#263238" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.25 1.75003C12.5152 1.48481 12.8749 1.33582 13.25 1.33582C13.6251 1.33582 13.9848 1.48481 14.25 1.75003C14.5152 2.01525 14.6642 2.37496 14.6642 2.75003C14.6642 3.1251 14.5152 3.48481 14.25 3.75003L8.24136 9.75936C8.08305 9.91753 7.88749 10.0333 7.67269 10.096L5.75735 10.656C5.69999 10.6728 5.63918 10.6738 5.58129 10.6589C5.52341 10.6441 5.47057 10.614 5.42832 10.5717C5.38607 10.5295 5.35595 10.4766 5.34112 10.4188C5.32629 10.3609 5.32729 10.3001 5.34402 10.2427L5.90402 8.32736C5.96704 8.11273 6.08304 7.9174 6.24136 7.75936L12.25 1.75003Z" stroke="#263238" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_673">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>

                <div onClick={() => {
                    dispatch(
                        deleteUserAddress({
                            userId,
                            addressIndex
                        })
                    );
                }} className="flex justify-end items-center gap-1 border-[#0000001A] rounded-xl border px-3 py-2 hover:cursor-pointer hover:border-[#00000050] transition duration-200">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_677)">
                            <path d="M2 4H14" stroke="#E7000B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.6666 4V13.3333C12.6666 14 12 14.6667 11.3333 14.6667H4.66665C3.99998 14.6667 3.33331 14 3.33331 13.3333V4" stroke="#E7000B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.33331 4.00004V2.66671C5.33331 2.00004 5.99998 1.33337 6.66665 1.33337H9.33331C9.99998 1.33337 10.6666 2.00004 10.6666 2.66671V4.00004" stroke="#E7000B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66669 7.33337V11.3334" stroke="#E7000B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.33331 7.33337V11.3334" stroke="#E7000B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_677">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
            {isEditOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">

                    <div
                        onClick={() => setIsEditOpen(false)}
                        className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
                    />

                    <div className="relative z-10 w-130 bg-white rounded-3xl p-6 shadow-2xl animate-fadeUp transition-all duration-300">

                        <div className="flex items-center justify-between mb-6">
                            <h1 className="text-xl font-semibold">Edit Address</h1>

                            <button
                                onClick={() => setIsEditOpen(false)}
                                className="text-2xl text-gray-400 hover:text-black transition"
                            >
                                ×
                            </button>
                        </div>

                        <div className="flex flex-col gap-4">

                            <input
                                name="type"
                                value={editAddress.type}
                                onChange={handleChange}
                                className="border rounded-xl px-4 py-3 hover:border-black transition"
                                placeholder="Type (Home/Office)"
                            />

                            <input
                                name="addressLine"
                                value={editAddress.addressLine}
                                onChange={handleChange}
                                className="border rounded-xl px-4 py-3 hover:border-black transition"
                                placeholder="Address Line"
                            />

                            <div className="flex gap-3">
                                <input
                                    name="city"
                                    value={editAddress.city}
                                    onChange={handleChange}
                                    className="border rounded-xl px-4 py-3 w-full hover:border-black transition"
                                    placeholder="City"
                                />

                                <input
                                    name="state"
                                    value={editAddress.state}
                                    onChange={handleChange}
                                    className="border rounded-xl px-4 py-3 w-full hover:border-black transition"
                                    placeholder="State"
                                />
                            </div>

                            <input
                                name="pincode"
                                value={editAddress.pincode}
                                onChange={handleChange}
                                className="border rounded-xl px-4 py-3 hover:border-black transition"
                                placeholder="Pincode"
                            />
                            <label className="flex items-center justify-between border rounded-xl px-4 py-3 cursor-pointer hover:border-black transition">

                                <span className="text-sm text-gray-600">
                                    Set as Default Address
                                </span>

                                <input
                                    type="checkbox"
                                    checked={editAddress.isDefault}
                                    onChange={(e) =>
                                        setEditAddress(prev => ({
                                            ...prev,
                                            isDefault: e.target.checked
                                        }))
                                    }
                                    className="w-5 h-5 accent-black"
                                />
                            </label>
                        </div>

                        <div className="flex justify-end gap-3 mt-6">

                            <button
                                onClick={() => setIsEditOpen(false)}
                                className="px-5 py-2.5 border rounded-xl hover:bg-gray-100 transition"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={() => {
                                    console.log(editAddress);
                                    dispatch(
                                        updateUserAddress({
                                            userId,
                                            addressIndex,
                                            updatedAddress: editAddress,
                                        })
                                    );
                                    setIsEditOpen(false);
                                }}
                                className="px-5 py-2.5 bg-black text-white rounded-xl hover:scale-105 transition"
                            >
                                Save
                            </button>

                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}
export default OverviewAddressCard;