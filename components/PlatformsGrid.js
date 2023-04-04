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
            <div className={styles.androidText}> Lunix</div>
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
                src="Mac.svg"
                alt="Mac-image"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// Features Section//
<div className={styles.item5}>
  <div className={styles.Features}>
    <div className={styles.FeaturesText}> Mac</div>
    <br />
    <a className={styles.FeaturesDownload}>Download</a>
  </div>
</div>;
