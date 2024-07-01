import styles from "../styles/components/Message.module.scss";

function Message({ children }) {
  return (
    <p className={styles.message}>
      <span role="img" title="Waving hand emoji">
        😯
      </span>{" "}
      {children}
    </p>
  );
}

export default Message;
