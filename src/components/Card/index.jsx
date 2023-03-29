import { Link } from "react-router-dom";
import styles from "./card.module.scss";

const Card = ({ producto }) => {
  console.log(producto?.id);
  return (
      <div className={styles.Card}>
        <h3 style={producto.title.length > 15 ? {fontSize:"15px"} : {fontSize:"25px"}}>{producto.title}</h3>
        <img
          src={producto.image}
          alt={producto.title}
          width="200"
          height="250"
        />
        <p>$ {producto.price}</p>
        <Link to={`/products/${producto.id}`}>
          <button>Ir a detalle</button>
        </Link>
      </div>
  );
};

export default Card;
