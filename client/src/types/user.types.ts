export type User = {
  agentCode: string;
  fullName: string;
  role: "admin" | "agent";
};

export type UsersState = {
  users: User[];
  fetchUsers: () => Promise<void>;
  addUser: (user: User) => Promise<void>;
};

export type createUserInputs = {
  agentCode: string;
  fullName: string;
  role: "admin" | "agent";
  password: string;
};
