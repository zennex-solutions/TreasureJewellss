import Sidebar from "./components/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        {children}
      </div>
    </div>
  );
};

export default AdminLayout;