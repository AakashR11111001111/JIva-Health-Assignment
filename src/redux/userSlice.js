import { createSlice } from "@reduxjs/toolkit";
import { users } from '../data/users'

const initialState = {
  users: users,
  searchTerm: "",
  statusFilter: "All"
};

const userSlice = createSlice({
  name: "users",

  initialState,

  reducers: {
    setSearchTerm: (state, action) => { state.searchTerm = action.payload; },

    setStatusFilter: (state, action) => { state.statusFilter = action.payload; },

    updateUserStatus: (state, action) => {
      const { id, status } = action.payload;

      const user = state.users.find(
        (u) => u.id.toString() === id.toString()
      );
      if (user) {
        user.status = status;
      }
    },

    updateUser: (state, action) => {

      const { id, updatedData } = action.payload;

      const user = state.users.find(
        (u) => u.id === id
      );

      if (user) {

        Object.assign(
          user,
          updatedData
        );
      }
    },
    updateUserAddress: (state, action) => {

      const {
        userId,
        addressIndex,
        updatedAddress
      } = action.payload;

      const user = state.users.find(
        (u) => u.id.toString() === userId.toString()
      );

      if (!user) return;

      user.addresses[addressIndex] = updatedAddress;
    },

    addUserAddress: (state, action) => {

      const { userId, address } = action.payload;

      const user = state.users.find(
        (u) => u.id.toString() === userId.toString()
      );

      if (!user) return;

      if (address.isDefault) {
        user.addresses = user.addresses.map((a) => ({
          ...a,
          isDefault: false,
        }));
      }

      user.addresses.push(address);
    },

    deleteUserAddress: (state, action) => {

      const { userId, addressIndex } = action.payload;

      const user = state.users.find(
        (u) => u.id.toString() === userId.toString()
      );

      if (!user) return;

      user.addresses.splice(addressIndex, 1);
    },

    updateOrderStatus: (state, action) => {

      const { userId, orderId, status } = action.payload;

      const user = state.users.find(
        (u) => u.id === userId
      );

      if (user) {

        const order = user.orders.find(
          (o) => o.orderId === orderId
        );

        if (order) {
          order.status = status;
        }
      }
    },

    deleteOrder: (state, action) => {

      const { userId, orderId } = action.payload;

      const user = state.users.find(
        (u) => u.id === userId
      );

      if (user) {
        user.orders = user.orders.filter(
          (o) => o.orderId !== orderId
        );
      }
    },

    editFamilyMember: (state, action) => {

      const { userId, memberIndex, updatedMember } = action.payload;

      const user = state.users.find(
        (u) => u.id === userId
      );

      if (user && user.familyMembers) {

        user.familyMembers[memberIndex] = {
          ...user.familyMembers[memberIndex],
          ...updatedMember,
        };
      }
    },

    deleteFamilyMember: (state, action) => {

      const { userId, memberIndex } = action.payload;

      const user = state.users.find(
        (u) => u.id === userId
      );

      if (user && user.familyMembers) {

        user.familyMembers.splice(memberIndex, 1);
      }
    },
    addFamilyMember: (state, action) => {

    const { userId, member } = action.payload;

    const user = state.users.find(
        (u) => u.id === userId
    );

    if (user) {

        if (!user.familyMembers) {
            user.familyMembers = [];
        }

        user.familyMembers.push(member);
    }
},
  },
});

export const { setSearchTerm, setStatusFilter, updateUserStatus, updateUser, updateUserAddress, addUserAddress, deleteUserAddress, updateOrderStatus, deleteOrder, editFamilyMember, deleteFamilyMember, addFamilyMember } = userSlice.actions;

export default userSlice.reducer;