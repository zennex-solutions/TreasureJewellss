import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Collection from "./pages/Collection"
import Gifting from "./pages/Gifting"
import BestSellers from "./pages/BestSellers"
import About from "./pages/About"
import Contact from "./pages/Contact"

function App() {
  return (
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

    </Routes>
  )
}

export default App