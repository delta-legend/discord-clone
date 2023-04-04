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
                src="ios.svg"
                alt="ios-image"
              ></img>
            </div>
          </div>
        </div>
        {/* Linux Section */}
        <div className={styles.item3}>
          <div className={styles.android}>
            <div className={styles.androidText}> Android</div>
            <br />
            <a className={styles.androidDownload}>Download</a>
            <div>
              <img
                className={styles.androidImage}
                src="ios.svg"
                alt="ios-image"
              ></img>
            </div>
          </div>
        </div>
        <div className={styles.item4}>Box 4</div>
      </div>
    </div>
  );
}
