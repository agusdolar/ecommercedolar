import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productodestacado from './components/Productodestacado';
import ItemCount from './components/ItemCount'
import customFetch from './components/ItemDetail';
import { useEffect, useState } from 'react';




function App() {

  const [datos, setDatos] = useState([]);

  useEffect(() => {
    customFetch()
    .then(result => setDatos(result))
    .catch(err => console.log(err))
  }, []);
  

  return (
    <>
     
    <Navbar/>
    
    <h3>Productos Destacados</h3>
    <ItemCount max={6} initial={1} />
    <hr />
    < Productodestacado nombre="Dama del armiño" que="Recreacion La Dama del armiño de Leonardo Da vinci" autor="Gonzalo Dolar"/>
    <hr />
    < Productodestacado nombre="Leonel Messi" que="Lionel Messi en Copa America" autor="Goy Dolar" />
    <hr />
    < Productodestacado nombre="Catedral" que="Representacion Catedral Cordoba" autor="Gonzalo Dolar" />
    <hr />
    <h2>Productos:</h2>
    <ol>
      {
      datos.map((dato) => <li key={dato.id}>{dato.name}, {dato.description} <img src={dato.image[0]}/> </li> )
      }
    </ol>
    
    </>
    
  );
}

export default App;

