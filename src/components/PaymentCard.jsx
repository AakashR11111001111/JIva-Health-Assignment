const PaymentCard = ({ payment }) => {
    return (
        <div className="p-6 mx-5 bg-[#F3F4F6] rounded-2xl my-5 flex ">
            <div className="flex justify-between w-full">
                <div className="flex gap-2">
                    <div className="flex gap-2 justify-center items-center">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z" fill="#DCFCE7" />
                            <path d="M32 17H16C14.8954 17 14 17.8954 14 19V29C14 30.1046 14.8954 31 16 31H32C33.1046 31 34 30.1046 34 29V19C34 17.8954 33.1046 17 32 17Z" stroke="#00A63E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M14 22H34" stroke="#00A63E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-1">
                        <div className="flex gap-2 items-center">
                            <h1 className="text-sm text-[#101828]">#{payment.paymentId}</h1>
                            <div
                                className={` px-3 py-1 rounded-xl text-xs font-medium w-fit
                            ${payment.status === "Success"
                                        ? "bg-[#DCFCE7] text-[#016630]"
                                        : "bg-[#FEF3C7] text-[#B45309]"
                                    }
                        `}>
                                {payment.status}
                            </div>
                        </div>
                        <div className="inline-flex border-[#00000010] border rounded-2xl px-2 py-1">
                            <h1 className="text-[#101828] text-xs">
                                {payment.method}
                            </h1>
                        </div>
                        <div className="flex gap-2">
                            <svg
                                width="15"
                                height="15"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 2V6"
                                    stroke="#6A7282"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M16 2V6"
                                    stroke="#6A7282"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <rect
                                    x="3"
                                    y="4"
                                    width="18"
                                    height="18"
                                    rx="2"
                                    stroke="#6A7282"
                                    strokeWidth="2"
                                />
                                <path
                                    d="M3 10H21"
                                    stroke="#6A7282"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                            <h1 className="text-[#6A7282] text-xs">
                                {payment.date}
                            </h1>
                        </div>
                    </div>

                </div>
                <div className="text-lg font-semibold text-[#101828]">
                    {Number(payment.amount).toLocaleString("en-IN", {
                        style: "currency",
                        currency: "INR",
                        minimumFractionDigits: 2,
                    })}
                </div>
            </div>
        </div>
    )
}
export default PaymentCard;