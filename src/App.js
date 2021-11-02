import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Productodestacado from './components/Productodestacado';
import Itemlistcontainer from './components/Itemlistcontainer';

function App() {
  return (
    <>
    <h1 className="App">Bienvenidos a</h1>
    <h2 className="App">Galeria virtual</h2>
    <Navbar/>
    <Itemlistcontainer/>
    <h3>Productos Destacados</h3>
    <hr />
    < Productodestacado nombre="Dama del armiño" que="Recreacion La Dama del armiño de Leonardo Da vinci" autor="Gonzalo Dolar" />
    <hr />
    < Productodestacado nombre="Leonel Messi" que="Lionel Messi en Copa America" autor="Goy Dolar" />
    <hr />
    < Productodestacado nombre="Catedral" que="Representacion Catedral Cordoba" autor="Gonzalo Dolar" />
    </>
    
  );
}

export default App;

