import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import AddProduct from "./Pages/AddProduct";
import ProductDetails from "./Pages/ProductDetails";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="row">
        <div className="col-2 sidebar">
          <Sidebar />
        </div>
        <div className="col-10 home">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={
              <>
              <Outlet/>
              </>
            } >
              <Route path="" element={<Products />}/>
                <Route path="add" element={<AddProduct />} />
                <Route path=":productID" element={<ProductDetails />} />`
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
