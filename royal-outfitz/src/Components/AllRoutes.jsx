import {Route , Routes} from "react-router-dom";
import Product from "../Pages/Product";
import Home from "../Pages/Home";
import Bag from "../Pages/Bag";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import ProductCard from "../Pages/ProductCard";
import Search from "../Pages/Search";
import Register from "../Pages/Register";

function AllRoutes(){
  return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/bag" element={<Bag/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
        <Route path="/search" element={<Search/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/ProductCard/:id" element={<ProductCard/>}></Route>
    </Routes>
  ) 
}

export default AllRoutes;