import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Gifting from "./pages/Gifting"
import BestSellers from "./pages/BestSellers"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Navbarsec from "./components/Navbarsec"
import SingleProductPage from "./pages/SingleProductPage"
import CartPage from "./pages/CartPage"
import OrderSuccessPage from "./pages/OrderSuccessPage"
import Login from "./pages/Login"
import Register from "./pages/Register"
import AdminLayout from "./admin/AdminLayout";
import Dashboard from "./admin/pages/Dashboard";
import Products from "./admin/pages/Products";
import AddProduct from "./admin/pages/AddProduct";
import EditProduct from "./admin/pages/EditProduct";
import Orders from "./admin/pages/Orders";
import AdminLogin from "./admin/pages/AdminLogin";
import Footer from "./components/Footer"
import Accounts from "./pages/Accounts"

function App() {
  return (<>
    <Navbarsec />
    <Routes>

      <Route path="/" element={<Home />} />

      {/* <Route
        path="/collections"
        element={<Collection />}
      /> */}

      <Route path="/collection" element={<Collection />} />

      <Route
        path="/gifting"                             
        element={<Gifting />}
      />

      <Route
        path="/best-sellers"
        element={<BestSellers />}
      />

      <Route
        path="/about"
        element={<About />}
      />

      <Route
        path="/contact"
        element={<Contact />}
      />
<Route
        path="/SingleProductPage"
        element={<SingleProductPage />}
      />
      <Route
        path="/cart"
        element={<CartPage />}
      />

     
      <Route
        path="/success"
        element={<OrderSuccessPage />}
      />
        <Route
        path="/login"
        element={<Login />}
      />
       <Route
        path="/register"
        element={<Register />}/>
         <Route
        path="/account"
        element={<Accounts  />}
      />
{/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout><Dashboard /></AdminLayout>} />
<Route path="/admin/products" element={<AdminLayout><Products /></AdminLayout>} />
<Route path="/admin/add-product" element={<AdminLayout><AddProduct /></AdminLayout>} />
<Route path="/admin/edit-product/:id" element={<AdminLayout><EditProduct /></AdminLayout>} />
<Route path="/admin/orders" element={<AdminLayout><Orders /></AdminLayout>} />
<Route path="/admin-login" element={<AdminLayout><AdminLogin /></AdminLayout>} />
    </Routes>
    <Footer />
    </>
  )
}

export default App