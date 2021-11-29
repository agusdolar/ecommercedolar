import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./Cart";
import ItemDetail from "./ItemDetail";
import Itemlistcontainer from "./Itemlistcontainer";
import Navbar from "./Navbar";

const Home = () => {

    return (


        <BrowserRouter>
            <Navbar />
            <Routes>
            <Route path='/category/:idCategory' element={<Itemlistcontainer />} />
            <Route path='/item/:idItem' element={<ItemDetail />} />
            <Route path='/cart' element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Home;