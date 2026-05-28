import { useEffect, useState } from "react";

const MemberFormModal = ({
    isOpen,
    onClose,
    onSave,
    initialData,
    mode = "add",
}) => {

    const [formData, setFormData] = useState({
        name: "",
        relation: "",
        phone: "",
        dob: "",
    });

    useEffect(() => {
        if (initialData) {
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setFormData(initialData);
        }
    }, [initialData]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            <div
                onClick={onClose}
                className="absolute inset-0 bg-black/30 backdrop-blur-sm animate-fadeIn"
            />

            <div className="relative z-10 w-120 bg-white rounded-3xl p-6 shadow-2xl animate-fadeUp">

                <div className="flex items-center justify-between mb-6">

                    <h1 className="text-xl font-semibold">
                        {mode === "edit"
                            ? "Edit Family Member"
                            : "Add Family Member"}
                    </h1>

                    <button
                        onClick={onClose}
                        className="text-2xl text-gray-400 hover:text-black transition"
                    >
                        ×
                    </button>
                </div>

                <div className="flex flex-col gap-4">

                    <div>
                        <label className="text-sm text-[#6A7282]">
                            Full Name
                        </label>

                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Enter full name"
                            className="w-full mt-1 border border-[#E5E7EB] rounded-xl px-4 py-3 outline-none focus:border-black transition"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-[#6A7282]">
                            Relation
                        </label>

                        <input
                            type="text"
                            name="relation"
                            value={formData.relation}
                            onChange={handleChange}
                            placeholder="Father / Mother / Brother"
                            className="w-full mt-1 border border-[#E5E7EB] rounded-xl px-4 py-3 outline-none focus:border-black transition"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-[#6A7282]">
                            Phone Number
                        </label>

                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="9876543210"
                            className="w-full mt-1 border border-[#E5E7EB] rounded-xl px-4 py-3 outline-none focus:border-black transition"
                        />
                    </div>

                    <div>
                        <label className="text-sm text-[#6A7282]">
                            Date of Birth
                        </label>

                        <input
                            type="date"
                            name="dob"
                            value={formData.dob}
                            onChange={handleChange}
                            className="w-full mt-1 border border-[#E5E7EB] rounded-xl px-4 py-3 outline-none focus:border-black transition"
                        />
                    </div>
                </div>

                <div className="flex justify-end gap-3 mt-7">

                    <button
                        onClick={onClose}
                        className="px-5 py-2.5 rounded-xl border border-[#E5E7EB] hover:border-[#acacac] transition cursor-pointer"
                    >
                        Cancel
                    </button>

                    <button
                        onClick={() => {
                            onSave(formData);
                            onClose();
                        }}
                        className="px-5 py-2.5 rounded-xl bg-black text-white hover:scale-105 transition"
                    >
                        {mode === "edit"
                            ? "Save Changes"
                            : "Add Member"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MemberFormModal;