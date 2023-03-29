import { NavLink } from "react-router-dom";
import styles from "./navbar.module.scss";
import { HiShoppingCart } from "react-icons/hi";
import { SiShopify } from "react-icons/si";


const Navbar = () => {
  const activeStyle = {
    color: "red",
  };

  return (
    <nav className={styles.container}>
      <NavLink
        to="/home"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <SiShopify fontSize={50}/>
      </NavLink>
      <NavLink
        to="/products/category/electronics"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Electronics</p>
      </NavLink>
      <NavLink
        to="/products/category/jewelery"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Jewelery</p>
      </NavLink>
      <NavLink
        to="/products/category/men's clothing"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Men's clothing</p>
      </NavLink>
      <NavLink
        to="/products/category/women's clothing"
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
      >
        <p>Women's clothing</p>
      </NavLink>
      <NavLink>
        <HiShoppingCart fontSize={50}/>
      </NavLink>
    </nav>
  );
};

export default Navbar;