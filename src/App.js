import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing/ProductListing";
import WishList from "./pages/WishList/WishList";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" exact element={<ProductListing />} />
            <Route path="/wishlist" element={<WishList />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
