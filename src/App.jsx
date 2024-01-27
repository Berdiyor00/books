import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./sass/main.scss";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Blog from "./pages/Blog/Blog";
import Shop from "./pages/Shop/Shop";
import BooksDetail from "./pages/BooksDetail/BooksDetail";
import Login from "./pages/Login";
import Profel from "./pages/Profel";
import Welcom from "./pages/Welcom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/"element={<Welcom/>}/>
          <Route path="/Home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/home/:id" element={<BooksDetail />} />
          <Route path="/login"element={<Login/>}/>
          <Route path="/profel" element={<Profel/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
