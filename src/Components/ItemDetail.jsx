
import { useContext, useState } from "react";
import {toCapital} from "../helpers/toCapital";
import ItemCount from "./ItemCount";
import { CartContext } from "../context/CartContext";
import { set } from "react-hook-form";




const ItemDetail = ({ item }) => {

  const {carrito, agregarAlCarrito} = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setcantidad] = useState(1);

  const handleRestar = ()=> {
      cantidad > 1 && setcantidad(cantidad - 1);
  }

  const handleSumar = ()=> {
      cantidad < item.stock && setcantidad(cantidad + 1);
  }

  return (
    <div className="container">
      <div className="producto-detalle">
        <img src={item.imagen} alt={item.titulo} />
        <div>
          <h3 className="titulo">{item.titulo}</h3>
          <p className="descripcion">{item.descripcion}</p>
          <p className="categoria">Categoria: {toCapital(item.categoria)}</p>
          <p className="precio">${item.precio}</p>
                <ItemCount
                  cantidad={cantidad}
                  handleSumar={handleSumar}
                  handleRestar={handleRestar}
                  handleAgregar={()=>{agregarAlCarrito(item, cantidad) }}
                />

        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
