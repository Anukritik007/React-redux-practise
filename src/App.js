import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import ProductListing from "./pages/ProductListing/ProductListing";
import WishList from "./pages/WishList/WishList";
import Cart from "./pages/Cart/Cart";
import Header from "./components/Header/Header";

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
