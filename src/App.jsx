
import ItemDetailContainer from "./Components/ItemDetailContainer";
import ItemListContainer from "./Components/ItemListContainer";
import Nosotros from "./Components/Nosotros"
import Navbar from "./Components/NavBar";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contacto from "./Components/Contacto";
import { CartProvider } from "./context/CartContext";
import Carrito from "./Components/Carrito";
import Checkout from "./Components/Checkout";


function App() {


  
  return (
  <div>
    <CartProvider>
      <BrowserRouter>
      
      <Navbar />

      <Routes>
        <Route path="/" element = {<ItemListContainer />} />
        <Route path="item/:id" element={<ItemDetailContainer />}/>
        <Route path="/productos" element = {<ItemListContainer />} />
        <Route path="/productos/:categoria" element = {<ItemListContainer />} />
        <Route path="/nosotros" element={<Nosotros />}/>
        <Route path="/contacto" element={<Contacto />}/>
        <Route path="/carrito" element={<Carrito />}/>
        <Route path="/checkout" element={<Checkout />}/>

      </Routes>

      </BrowserRouter>
    </CartProvider>
  </div>
  );
}

export default App;