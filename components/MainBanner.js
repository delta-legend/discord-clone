import styles from "../styles/MainBanner.module.css";
import Image from "next/image";

export default function MainBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.gridText}>
        <h1 className={styles.h1Text}>
          GET DISCORD <br />
          FOR ANY <br />
          DEVICE
        </h1>
        <div className={styles.description}>
          An adventure awaits. Hang out with your friends on our desktop app and
          keep the conversation going on mobile.
        </div>
        <div className={styles.downloadButtons}>
          <a className={styles.downloadWindows}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className={styles.downloadLogo}
            >
              <g fill="currentColor">
                <path d="M17.707 10.708L16.293 9.29398L13 12.587V2.00098H11V12.587L7.70697 9.29398L6.29297 10.708L12 16.415L17.707 10.708Z"></path>
                <path d="M18 18.001V20.001H6V18.001H4V20.001C4 21.103 4.897 22.001 6 22.001H18C19.104 22.001 20 21.103 20 20.001V18.001H18Z"></path>
              </g>
            </svg>
            Download for Windows
          </a>
        </div>
      </div>
      <div>
        <img className={styles.laptopImage} src="laptop.svg" alt="me"></img>
      </div>
    </div>
  );
}
