import NavBar from './components/Navbar/Navbar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'

import './App.css'
import 'bootstrap'
import { BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <NavBar />
        <ItemListContainer greetings={`próximamente listado de los productos`} />
        <ItemDetailContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
