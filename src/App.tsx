import "./App.css";
import { Routes, Route } from "react-router-dom";
import Main from "./components/main/Main";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
