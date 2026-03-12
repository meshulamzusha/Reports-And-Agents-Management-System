import { create } from "zustand";
import { User, UsersState } from "../types/user.types";
import { fetchUsers, createUser } from "../services/users.service";

export const useUsersStore = create<UsersState>((set) => ({
  users: [],

  fetchUsers: async () => {
    const users = await fetchUsers();
    set({ users: users });
  },

  addUser: async (user: User) => {
    const newUser = await createUser(user);
    set((state: UsersState) => ({
      users: [...state.users, newUser],
    }));
  },
}));
