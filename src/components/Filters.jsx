import Customdd from "./Customdd";
import {
    useDispatch,
    useSelector,
} from "react-redux";

import {
    setSearchTerm,
    setStatusFilter,
} from "../redux/userSlice";

const Filters = () => {

    const dispatch = useDispatch();

    const { statusFilter } =
        useSelector(
            (state) => state.users
        );

    return (
        <div className="my-1 flex items-center gap-2">

            <div className="flex items-center w-4/6 gap-2 px-3 py-2 border border-gray-300 rounded-lg bg-white">

                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21L16.65 16.65" />
                </svg>

                <input
                    type="text"
                    placeholder="Search by name, Doctor, or Speciality"
                    onChange={(e) =>
                        dispatch(
                            setSearchTerm(
                                e.target.value
                            )
                        )
                    }
                    className="w-full bg-transparent outline-none"
                />
            </div>

            <Customdd
                statusFilter={
                    statusFilter
                }
                setStatusFilter={(
                    value
                ) =>
                    dispatch(
                        setStatusFilter(
                            value
                        )
                    )
                }
            />
        </div>
    );
};

export default Filters;