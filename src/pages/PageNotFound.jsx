import styles from "../styles/pages/PageNotFound.module.scss";

import PageNav from "../components/PageNav";

export default function PageNotFound() {
  return (
    <div className={styles.notFound}>
      <PageNav></PageNav>
      <h1>Page not found 😢</h1>
    </div>
  );
}
