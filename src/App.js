import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from './components/Navbar/Navbar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import 'bootstrap'
import './App.css'
function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={ <ItemListContainer greetings={`próximamente listado de los productos`} />} />
          <Route path="product/:productId" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
