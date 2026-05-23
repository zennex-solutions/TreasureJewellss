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
        element={<Register />}
      />
    </Routes>
    </>
  )
}

export default App