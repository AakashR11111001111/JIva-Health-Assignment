const UserMetric = ({ user }) => {

    return (
        <>
            <div className="w-full mt-5 flex gap-10 justify-between">
                <div className="w-1/4 border border-[#00000010] rounded-2xl bg-white p-4 flex justify-between items-center">
                    <div>
                        <h6 className="text-[#8B9295] text-lg font-md">Total Orders</h6>
                        <h1 className="text-2xl my-2 text-[#263238]">{user.metrics.totalOrders}</h1>
                    </div>
                    <div>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z" fill="#DBEAFE" />
                            <path d="M18 14L15 18V32C15 32.5304 15.2107 33.0391 15.5858 33.4142C15.9609 33.7893 16.4696 34 17 34H31C31.5304 34 32.0391 33.7893 32.4142 33.4142C32.7893 33.0391 33 32.5304 33 32V18L30 14H18Z" stroke="#155DFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M15 18H33" stroke="#155DFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M28 22C28 23.0609 27.5786 24.0783 26.8284 24.8284C26.0783 25.5786 25.0609 26 24 26C22.9391 26 21.9217 25.5786 21.1716 24.8284C20.4214 24.0783 20 23.0609 20 22" stroke="#155DFC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>

                </div>
                <div className="w-1/4 border border-[#00000010] rounded-2xl bg-white p-4 flex justify-between items-center">
                    <div>
                        <h6 className="text-[#8B9295] text-lg font-md">Total bookings & Appointments</h6>
                        <h1 className="text-2xl my-2 text-[#22BB33]">{user.metrics.totalOrders + user.metrics.totalAppointments}</h1>
                    </div>
                    <div>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z" fill="#B3D9CE" />
                            <path d="M23 14V16" stroke="#016A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 14V16" stroke="#016A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M17 15H16C15.4696 15 14.9609 15.2107 14.5858 15.5858C14.2107 15.9609 14 16.4696 14 17V21C14 22.5913 14.6321 24.1174 15.7574 25.2426C16.8826 26.3679 18.4087 27 20 27C21.5913 27 23.1174 26.3679 24.2426 25.2426C25.3679 24.1174 26 22.5913 26 21V17C26 16.4696 25.7893 15.9609 25.4142 15.5858C25.0391 15.2107 24.5304 15 24 15H23" stroke="#016A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M20 27C20 28.5913 20.6321 30.1174 21.7574 31.2426C22.8826 32.3679 24.4087 33 26 33C27.5913 33 29.1174 32.3679 30.2426 31.2426C31.3679 30.1174 32 28.5913 32 27V24" stroke="#016A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M32 24C33.1046 24 34 23.1046 34 22C34 20.8954 33.1046 20 32 20C30.8954 20 30 20.8954 30 22C30 23.1046 30.8954 24 32 24Z" stroke="#016A4D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                </div>
                <div className="w-1/4 border border-[#00000010] rounded-2xl bg-white p-4 flex justify-between items-center">
                    <div>
                        <h6 className="text-[#8B9295] text-lg font-md">Total Family Members</h6>
                        <h1 className="text-2xl text-[#016A4D] my-2">{user.familyMembers.length}</h1>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="w-1/4 border border-[#00000010] rounded-2xl bg-white p-4 flex justify-between items-center">
                    <div>
                        <h6 className="text-[#8B9295] text-lg font-medium">Total Spent</h6>
                        <h1 className="text-2xl text-[#016A4D] my-2">
                            {new Intl.NumberFormat('en-IN', {
                                style: 'currency',
                                currency: 'INR',
                                minimumFractionDigits: 2
                            }).format(user.metrics.totalSpent)}
                        </h1>
                    </div>
                    <div>
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z" fill="#DCFCE7" />
                            <path d="M32 17H16C14.8954 17 14 17.8954 14 19V29C14 30.1046 14.8954 31 16 31H32C33.1046 31 34 30.1046 34 29V19C34 17.8954 33.1046 17 32 17Z" stroke="#00A63E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M14 22H34" stroke="#00A63E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>

                    </div>
                </div>
            </div>
        </>
    )
}
export default UserMetric;