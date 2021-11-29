import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productodestacado from './components/Productodestacado';
import ItemCount from './components/ItemCount'
import customFetch from './components/ItemDetail';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';




function App() {

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    customFetch()
      .then(result => setDatos(result))
      .catch(err => console.log(err))
  }, []);


  return (
    <BrowserRouter>

      <Navbar />
      

      <Routes>
      <Route path='/Home' element={Home}/>
      <Route path='/productosdestacados' element={
      <>
      <h3>Productos Destacados:</h3>
      
      <hr />
      < Productodestacado nombre="Dama del armiño" que="Recreacion La Dama del armiño de Leonardo Da vinci" autor="Gonzalo Dolar"  /> <ItemCount max={6} initial={1} />
      <hr />
      < Productodestacado nombre="Leonel Messi" que="Lionel Messi en Copa America" autor="Goy Dolar" /> <ItemCount max={6} initial={1} />
      <hr />
      < Productodestacado nombre="Catedral" que="Representacion Catedral Cordoba" autor="Gonzalo Dolar" /> <ItemCount max={6} initial={1} />
      <hr />
      </>
      }/>
      <Route path='/productos' element={
      <>
      <h2>Productos: </h2>
      <ol>
    {
      datos.map((dato) => <li key={dato.id}>{dato.name}, {dato.description} <img src={dato.image[0]} /> <ItemCount max={6} initial={1} /> </li>)
    }
      </ol>
      </>
      }/>
      </Routes>
    </BrowserRouter>

  );
};

export default App;

