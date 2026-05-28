const Header = () => {
    return (
        <>
            <div className="h-16 w-full flex items-center justify-between border-b-2 border-[#00000010]">
                <div className="h-full flex items-center p-3">
                    <div className="p-2 rounded-2xl transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                        <img
                            src="/images/sidebar.svg"
                            alt="Logo"
                            className="h-4 w-4"
                        />
                    </div>
                </div>
                <div className="w-1/2">
                    <div className="flex-1 mx-6">
                        <div className="flex items-center w-full  gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-white focus-within:ring-2 focus-within:ring-[#00000050] focus-within:border-transparent transition-all">
                            <svg width="16" height="16" viewBox="0 0 14 14" fill="none" className="text-gray-400">
                                <path d="M12.6668 12.6668L9.77143 9.77143M9.77143 9.77143C10.2667 9.27617 10.6595 8.68821 10.9276 8.04113C11.1956 7.39404 11.3336 6.7005 11.3336 6.0001C11.3336 5.2997 11.1956 4.60615 10.9276 3.95907C10.6596 3.31198 10.2667 2.72402 9.77143 2.22876C9.27617 1.7335 8.68821 1.34064 8.04113 1.07261C7.39404 0.80458 6.7005 0.666626 6.0001 0.666626C5.2997 0.666626 4.60615 0.80458 3.95907 1.07261C3.31198 1.34064 2.72402 1.7335 2.22876 2.22876C1.22854 3.22898 0.666626 4.58557 0.666626 6.0001C0.666626 7.41462 1.22854 8.77121 2.22876 9.77143C3.22898 10.7716 4.58557 11.3336 6.0001 11.3336C7.41462 11.3336 8.77121 10.7716 9.77143 9.77143Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400 pl-1.5"
                            />
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex items-center gap-2 p-3">
                        <div className="p-2 rounded-lg outline-1 outline-[#00000010] transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.80004 13.3428C9.82004 13.3428 12.4334 11.4028 13.3067 8.51611C13.3419 8.40032 13.3449 8.27715 13.3156 8.15975C13.2862 8.04236 13.2255 7.93515 13.1399 7.84958C13.0543 7.76401 12.9471 7.70329 12.8297 7.67391C12.7123 7.64453 12.5892 7.64759 12.4734 7.68277C11.9534 7.83611 11.42 7.9161 10.8867 7.9161C7.87337 7.9161 5.42004 5.46277 5.42004 2.44944C5.42004 1.9161 5.50004 1.38277 5.65337 0.862772C5.7267 0.629438 5.66004 0.369438 5.4867 0.196105C5.31337 0.0227716 5.06004 -0.0438951 4.82004 0.0294383C3.42246 0.451468 2.19844 1.31334 1.33001 2.48686C0.461574 3.66038 -0.00487225 5.08287 3.83792e-05 6.54277C3.83792e-05 10.2894 3.0467 13.3428 6.80004 13.3428ZM4.12004 1.7761C4.10004 2.00277 4.08671 2.22944 4.08671 2.4561C4.08671 6.20277 7.13337 9.25611 10.8867 9.25611C11.1134 9.25611 11.34 9.24277 11.5667 9.22277C10.62 10.9294 8.82004 12.0094 6.80004 12.0094C3.7867 12.0094 1.33337 9.55611 1.33337 6.54277C1.32953 5.57172 1.58599 4.61739 2.07608 3.77907C2.56617 2.94076 3.27197 2.24912 4.12004 1.7761Z" fill="#263238" />
                            </svg>

                        </div>
                        <div className="p-2 rounded-lg outline-1 outline-[#00000010] transition-all duration-200 hover:bg-gray-200 cursor-pointer">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.51153 13.3333C5.62856 13.536 5.79688 13.7043 5.99956 13.8213C6.20225 13.9383 6.43216 13.9999 6.6662 13.9999C6.90024 13.9999 7.13015 13.9383 7.33284 13.8213C7.53552 13.7043 7.70384 13.536 7.82087 13.3333M0.840867 9.55063C0.753776 9.64608 0.696303 9.76479 0.675437 9.89231C0.654571 10.0198 0.671213 10.1507 0.723338 10.2689C0.775462 10.3871 0.860823 10.4877 0.969037 10.5583C1.07725 10.6289 1.20365 10.6665 1.33287 10.6666H11.9995C12.1287 10.6667 12.2552 10.6292 12.3634 10.5587C12.4717 10.4882 12.5572 10.3878 12.6095 10.2696C12.6617 10.1515 12.6785 10.0207 12.6578 9.89315C12.6371 9.76562 12.5798 9.64685 12.4929 9.55129C11.6062 8.63729 10.6662 7.66596 10.6662 4.66663C10.6662 3.60576 10.2448 2.58834 9.49463 1.8382C8.74448 1.08805 7.72707 0.666626 6.6662 0.666626C5.60533 0.666626 4.58792 1.08805 3.83777 1.8382C3.08763 2.58834 2.6662 3.60576 2.6662 4.66663C2.6662 7.66596 1.72553 8.63729 0.840867 9.55063Z" stroke="#263238" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                        <div>
                            <div className="w-9 h-9 outline-1 outline-[#00000010] rounded-lg p-1 overflow-hidden">
                                <img src="https://i.pravatar.cc/300" alt="" className="rounded-full"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Header;