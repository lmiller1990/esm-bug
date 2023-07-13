import { defineStore } from "pinia";

export interface User {
  username: string;
}

interface UsersState {
  user?: User;
}

export const useUsers = defineStore("users", {
  state(): UsersState {
    return {
      user: undefined,
    };
  },

  actions: {
    updateUser(user: User) {
      this.user = user;
    },
  },
});
