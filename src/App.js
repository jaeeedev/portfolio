import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import ProductListPage from "./pages/ProductListPage";
import Cart from "./pages/Cart";
import ProductPage from "./pages/ProductPage";
import NotFound from "./pages/NotFound";
import Result from "./pages/Result";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cups" element={<ProductListPage />}></Route>
        <Route path="/cups/:title" element={<ProductPage loca={"cups"} />} />
        <Route path="/tableware" element={<ProductListPage />}></Route>
        <Route
          path="/tableware/:title"
          element={<ProductPage loca={"tableware"} />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/search" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
