import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productodestacado from './components/Productodestacado';
import Itemlistcontainer from './components/Itemlistcontainer';
import ItemCount from './components/ItemCount'



function App() {
  return (
    <>
     
    <Navbar/>
    <Itemlistcontainer/>
    <h3>Productos Destacados</h3>
    <ItemCount max={6} initial={1} />
    <hr />
    < Productodestacado nombre="Dama del armiño" que="Recreacion La Dama del armiño de Leonardo Da vinci" autor="Gonzalo Dolar"/>
    <hr />
    < Productodestacado nombre="Leonel Messi" que="Lionel Messi en Copa America" autor="Goy Dolar" />
    <hr />
    < Productodestacado nombre="Catedral" que="Representacion Catedral Cordoba" autor="Gonzalo Dolar" />
    <hr />
    
    </>
    
  );
}

export default App;

