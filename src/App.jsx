import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import ItemListDetail from "./components/ItemListDetail";
import Navbar from "./components/Navbar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<ItemListContainer  />} />
        <Route
          path="/products/category/:name"
          element={<ItemListContainer />}
        />
        <Route path="/products/:id" element={<ItemListDetail />} />
        <Route path="/cart" element={<h3>Cart</h3>} />
        <Route path="/404" element={<h2>404 Not Found</h2>} />
        <Route path="*" element={<Navigate to="/404" />} />
      </Routes>
    </div>
  );
}

export default App;
