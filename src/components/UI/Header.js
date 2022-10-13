import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <label className={styles.info}>Info</label>
      <label className={styles.links}>Links</label>
      <label className={styles.projects}>Projects</label>

    </div>
  );
};

export default Header;
