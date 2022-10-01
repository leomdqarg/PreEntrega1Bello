import NavBar from './components/Navbar/Navbar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemCount from './components/ItemCount/ItemCount.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import './App.css'
import 'bootstrap'
function App() {
  return (
    <div id="App">
      <NavBar />
      <ItemListContainer greetings={`próximamente listado de los productos`} />
      <ItemDetailContainer />
      <ItemCount initial={1} stock={5} />
    </div>
  );
}

export default App;
