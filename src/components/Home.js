import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Itemlistcontainer from "./Itemlistcontainer";
import Navbar from "./Navbar";

const Home = () => {

    return (


        <BrowserRouter>
            <Navbar />
            <Routes>
            <Route path='/' element={<Itemlistcontainer />} />
            <Route path='/' element={<ItemDetail />} />
    
            </Routes>
        </BrowserRouter>
    );
}

export default Home;