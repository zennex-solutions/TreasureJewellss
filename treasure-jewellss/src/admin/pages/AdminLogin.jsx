import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/admin");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow rounded">
        <h2 className="mb-4">Admin Login</h2>

        <input placeholder="Email" className="block mb-2 border p-2" />
        <input placeholder="Password" type="password" className="block mb-2 border p-2" />

        <button className="bg-black text-white px-4 py-2">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;