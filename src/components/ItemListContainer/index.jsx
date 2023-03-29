import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const { name } = useParams();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${name}`)
      .then((response) => response.json())
      .then((data) => {
        setProductos(data);
      });
  }, [name]);
  console.log(productos);
  console.log(name);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {Object.keys(productos).length ? (
        productos.map((producto) => (
          <Card key={producto.id} producto={producto} />
        ))
      ) : (
        <div>
          <h2>Bienvenidos a E-Store</h2>;
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNUILZPd3RgLv0aBeCV9J86r2kS-0nvB_nJQ&usqp=CAU"
            alt=""
            srcset=""
          />{" "}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
