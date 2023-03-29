import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import styles from "./itemdetail.module.scss";

const ItemListDetail = () => {
  const [productoActual, setProductoActual] = useState({});
  const [cargaProducto, setCargaProducto] = useState(true);
  const { id } = useParams();

  const obtenerProducto = async () => {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProductoActual(data);
      setCargaProducto(false);
    } catch (error) {
      console.error(error);
      setProductoActual(null);
      setCargaProducto(false);
    }
  };

  useEffect(() => {
    obtenerProducto();
  }, [id]);

  return (
    <>
      {!productoActual ? (
        <Navigate to="/404" />
      ) : cargaProducto ? (
        <h2>Cargando...</h2>
      ) : (
        <>
          <Link to={`/products/category/${productoActual.category}`}>
            <button style={{marginTop:"10px"}}>Volver atrás</button>
          </Link>
          <div className={styles.container}>
            <div className={styles.containerDetails}>
              <h3>{productoActual.title}</h3>
              <img
                src={productoActual.image}
                alt={productoActual.title}
                width="200"
                height="250"
              />
              <p>{productoActual.description}</p>
              <p>$ {productoActual.price}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ItemListDetail;
