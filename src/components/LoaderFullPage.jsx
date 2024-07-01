import styles from "../styles/components/SpinnerFullPage.module.scss";
import Loader from "./Loader";

function LoaderFullPage() {
  return (
    <div className={styles.loaderFullPage}>
      <Loader />
    </div>
  );
}

export default LoaderFullPage;
