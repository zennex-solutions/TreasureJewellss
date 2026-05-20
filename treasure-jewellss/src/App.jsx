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

function App() {
  return (<>
    <Navbarsec />
    <Routes>

      <Route path="/" element={<Home />} />

      <Route
        path="/collections"
        element={<Collection />}
      />

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
        path="/cartPage"
        element={<CartPage />}
      />

      <Route
        path="/cartPage"
        element={<CartPage />}
      />
      <Route
        path="/success"
        element={<OrderSuccessPage />}
      />
    </Routes>
    </>
  )
}

export default App