import { useSelector } from "react-redux";

const Analytics = () => {
    const users = useSelector(
        (state) => state.users.users
    );

    const totalUsers = users.length;

    const primeUsers = users.filter(
        (user) => user.prime
    ).length;

    const nonPrimeUsers = users.filter(
        (user) => !user.prime
    ).length;

    const totalFamilyMembers = users.reduce(
        (total, user) =>
            total +
            user.familyMembers.length,
        0
    );
    return (
        <div className="w-full mt-5 flex gap-10 justify-between">
            <div className="w-1/4 border h-26 border-[#00000010] rounded-2xl bg-white p-4">
                <h6 className="text-[#8B9295] text-lg font-md">Total Users</h6>
                <h1 className="text-2xl">{totalUsers}</h1>
            </div>
            <div className="w-1/4 border h-26 border-[#00000010] rounded-2xl bg-white p-4">
                <h6 className="text-[#8B9295] text-lg font-md">Prime User</h6>
                <h1 className="text-2xl text-[#22BB33]">{primeUsers}</h1>
            </div>
            <div className="w-1/4 border h-26 border-[#00000010] rounded-2xl bg-white p-4">
                <h6 className="text-[#8B9295] text-lg font-md">Non Prime User</h6>
                <h1 className="text-2xl text-[#016A4D]">{nonPrimeUsers}</h1>
            </div>
            <div className="w-1/4 border h-26 border-[#00000010] rounded-2xl bg-white p-4">
                <h6 className="text-[#8B9295] text-lg font-md">Total Family Members</h6>
                <h1 className="text-2xl text-[#22BB33]">{totalFamilyMembers}</h1>
            </div>
        </div>
    )
}
export default Analytics;