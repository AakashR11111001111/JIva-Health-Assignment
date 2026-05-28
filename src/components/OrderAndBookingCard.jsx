import { useDispatch } from "react-redux";
import { updateOrderStatus, deleteOrder } from "../redux/userSlice";

const OrderAndBookingCard = ({ user, order }) => {

    const dispatch = useDispatch();

    return (
        <div className="bg-[#F3F4F6] px-5 my-4 rounded-2xl flex justify-between">

            <div className="flex gap-2 my-5">

                <div>
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 10C0 4.47715 4.47715 0 10 0H34C39.5228 0 44 4.47715 44 10V34C44 39.5228 39.5228 44 34 44H10C4.47715 44 0 39.5228 0 34V10Z" fill="#B3D9CE" />
                        <path d="M17 13.6667L14.5 17V28.6667C14.5 29.1087 14.6756 29.5326 14.9882 29.8452C15.3007 30.1577 15.7246 30.3333 16.1667 30.3333H27.8333C28.2754 30.3333 28.6993 30.1577 29.0118 29.8452C29.3244 29.5326 29.5 29.1087 29.5 28.6667V17L27 13.6667H17Z" stroke="#016A4D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M14.5 17H29.5" stroke="#016A4D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M25.3333 20.3333C25.3333 21.2174 24.9821 22.0652 24.357 22.6904C23.7319 23.3155 22.884 23.6667 22 23.6667C21.1159 23.6667 20.2681 23.3155 19.643 22.6904C19.0178 22.0652 18.6667 21.2174 18.6667 20.3333" stroke="#016A4D" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>

                <div>

                    <div className="flex gap-3 items-center">

                        <h1 className="text-sm font-light">
                            #{order.orderId}
                        </h1>

                        <div
                            className={`px-3 py-1 rounded-full text-xs font-medium capitalize
                                ${order.status === "Delivered"
                                    ? "bg-[#DCFCE7] text-[#016630]"
                                    : order.status === "Cancelled"
                                        ? "bg-[#FEE2E2] text-[#B91C1C]"
                                        : "bg-[#FEF3C7] text-[#B45309]"
                                }
                            `}
                        >
                            {order.status}
                        </div>

                    </div>

                    <h1 className="text-md text-[#4A5565]">
                        {order.item}
                    </h1>

                    <div className="flex gap-6">

                        <h1 className="text-[#6A7282] text-sm">
                            {order.date}
                        </h1>

                        <h1 className="text-[#101828] font-medium text-sm">
                            {Number(order.amount).toLocaleString("en-IN", {
                                style: "currency",
                                currency: "INR",
                                minimumFractionDigits: 2,
                            })}
                        </h1>

                    </div>
                </div>
            </div>

            <div className="flex items-center gap-3">

                <select
                    value={order.status}
                    onChange={(e) =>
                        dispatch(
                            updateOrderStatus({
                                userId: user.id,
                                orderId: order.orderId,
                                status: e.target.value,
                            })
                        )
                    }
                    className="border border-[#00000010] hover:border-[#00000050] bg-white rounded-xl px-3 py-2 text-sm outline-none transition duration-300 cursor-pointer"
                >
                    <option value="Pending">Pending</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Cancelled">Cancelled</option>
                </select>

                <div
                    onClick={() =>
                        dispatch(
                            deleteOrder({
                                userId: user.id,
                                orderId: order.orderId,
                            })
                        )
                    }
                    className="border border-[#00000010] hover:border-[#00000050] rounded-xl p-2 transition duration-300 cursor-pointer"
                >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_891)">
                            <path d="M2 4H14" stroke="#E7000B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M12.6666 4V13.3333C12.6666 14 12 14.6667 11.3333 14.6667H4.66665C3.99998 14.6667 3.33331 14 3.33331 13.3333V4" stroke="#E7000B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.33331 4.00001V2.66668C5.33331 2.00001 5.99998 1.33334 6.66665 1.33334H9.33331C9.99998 1.33334 10.6666 2.00001 10.6666 2.66668V4.00001" stroke="#E7000B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M6.66669 7.33334V11.3333" stroke="#E7000B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M9.33331 7.33334V11.3333" stroke="#E7000B" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                        </g>

                        <defs>
                            <clipPath id="clip0_1_891">
                                <rect width="16" height="16" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default OrderAndBookingCard;