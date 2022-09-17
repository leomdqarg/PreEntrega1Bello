import NavBar from './components/Navbar/Navbar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import './App.css'
import 'bootstrap'
function App() {
  return (
    <div id="App">
      <NavBar />
      <ItemListContainer greetings={`próximamente listado de los productos`} />
    </div>
  );
}

export default App;
