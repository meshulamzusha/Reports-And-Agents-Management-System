import { useEffect } from "react";
import { useUsersStore } from "../../stores/usersStore";

const UsersTable = () => {
  const users = useUsersStore((state) => state.users);
  const fetchUsers = useUsersStore((state) => state.fetchUsers);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Agent Code</td>
            <td>Full Name</td>
            <td>Role</td>
            <td>Created At</td>
          </tr>
        </thead>
        {users.map((u) => (
          <tbody key={u.agentCode}>
            <tr>
              {Object.entries(u).map(([key, value]) => {
                if (key !== "createdAt") {
                  return <td key={value}>{value}</td>;
                }
                return <td key={value}>{new Date(value).toLocaleString()}</td>
              })}
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default UsersTable;
