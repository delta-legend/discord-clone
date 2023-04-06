import styles from "../styles/platform.module.css";

export default function PlatformGrid() {
  return (
    <div>
      <div className={styles.container}>
        {/* iOS Box */}
        <div className={styles.item1}>
          <div className={styles.ios}>
            <div className={styles.iosText}> iOS</div>
            <br />
            <a className={styles.iosDownload}>Download</a>
            <div>
              <img
                className={styles.iosImage}
                src="ios.svg"
                alt="ios-image"
              ></img>
            </div>
          </div>
        </div>
        {/* Android box */}
        <div className={styles.item2}>
          <div className={styles.android}>
            <div className={styles.androidText}> Android</div>
            <br />
            <a className={styles.androidDownload}>Download</a>
            <div>
              <img
                className={styles.androidImage}
                src="android.svg"
                alt="android-image"
              ></img>
            </div>
          </div>
        </div>
        {/* Linux Section */}
        <div className={styles.item3}>
          <div className={styles.Lunix}>
            <div className={styles.androidText}> Linux</div>
            <br />
            <a className={styles.LunixDownload}>Download</a>
            <div>
              <img
                className={styles.LunixImage}
                src="lunix.svg"
                alt="lunix-image"
              ></img>
            </div>
          </div>
        </div>
        {/* Mac Section */}
        <div className={styles.item4}>
          <div className={styles.Mac}>
            <div className={styles.MacText}> Mac</div>
            <br />
            <a className={styles.MacDownload}>Download</a>
            <div>
              <img
                className={styles.MacImage}
                src="mac.svg"
                alt="Mac-image"
              ></img>
            </div>
          </div>
        </div>
        {/* Features Section */}
        <div className={styles.item5}>
          <div className={styles.features}>
            <div className={styles.featuresText}> Feeling experimental?</div>
            <div className={styles.featuresDescription}>
              {" "}
              Try our Public Test Build and test new features before they
              launch.
            </div>
            <br />
            <a className={styles.featuresDownload}>
              Download Public Test Build{" "}
              <svg
                width="24"
                height="24"
                viewBox="0 0 20 32"
                className={styles.featuresDownloadIcon}
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M22.2398 17.0778L11.8576 27.5689C11.2532 28.1437 10.3287 28.1437 9.75984 27.5689C9.19095 26.994 9.19095 26.0599 9.75984 25.4491L19.1109 16L9.75984 6.5509C9.19095 5.97605 9.19095 5.00599 9.75984 4.43114C10.3287 3.85629 11.2532 3.85629 11.8576 4.43114L22.2398 14.9581C22.8087 15.5329 22.8087 16.4671 22.2398 17.0778Z"
                  fill="currentColor"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
