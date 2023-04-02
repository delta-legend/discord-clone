// Functional components
import styles from "../styles/Navbar.module.css";

export default function Navbar({ name }) {
  return <div className={styles.bold}>Company name is {name}</div>;
}
