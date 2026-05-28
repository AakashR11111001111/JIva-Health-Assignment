import { useSelector } from "react-redux";
import UserListCard from "./UserListCard";

const UserList = () => {
    const {
        users,
        searchTerm,
        statusFilter,
    } = useSelector(
        (state) => state.users
    );

    const filteredUsers =
        users.filter((user) => {

            const matchesSearch =
                user.name
                    .toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    ) ||

                user.email
                    .toLowerCase()
                    .includes(
                        searchTerm.toLowerCase()
                    ) ||

                user.phone.includes(
                    searchTerm
                );

            const matchesStatus =
                statusFilter === "All"
                    ? true
                    : user.status ===
                    statusFilter;

            return (
                matchesSearch &&
                matchesStatus
            );
        });
    return (
        <div className="select-none">
            {filteredUsers.map((user) => {
                return (
                    <UserListCard key={user.id} user={user} />
                );
            })}
        </div>
    )
}

export default UserList;