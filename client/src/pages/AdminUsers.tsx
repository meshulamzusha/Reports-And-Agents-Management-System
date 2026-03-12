import AdminNavbar from "../components/AdminNavbar/AdminNavbar";
import CreateUserForm from "../components/CreateUserForm/CreateUserForm";
import UsersTable from "../components/UsersTable/UsersTable";

const AdminUsers = () => {
  return (
    <div>
      <AdminNavbar />
      <UsersTable />
      <CreateUserForm />
    </div>
  );
};

export default AdminUsers;
