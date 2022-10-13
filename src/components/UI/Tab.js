import styles from "./Tab.module.css";

const Tab = (props) => {
  const divClickHandler = () => {
    props.onDivClick(props.src);
  };

  return (
    <div
      className={styles.analytics_title}
      onClick={divClickHandler}
      key={props.id}
    >
      {props.title}
    </div>
  );
};

export default Tab;
