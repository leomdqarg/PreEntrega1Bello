import NavBar from './components/Navbar/Navbar.js'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js'
import AboutUs from './components/AboutUs/AboutUs.js'
import './App.css'
import 'bootstrap'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div id="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/nosotros' element={<AboutUs />} />
          <Route path='/' element={<ItemListContainer greetings={`próximamente listado de los productos`} />} />
          <Route path='/category' element={<ItemListContainer greetings={`próximamente listado de los productos`} />} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
