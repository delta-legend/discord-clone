import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        This is <a> Homepage !</a>
        <p> My name is Kartik tyagi</p>
      </h1>
      <a className={styles.a} href="/about">
        Go to About page
      </a>
    </div>
  );
}
