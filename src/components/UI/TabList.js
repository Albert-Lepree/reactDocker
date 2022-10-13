import Tab from "./Tab";
import "./TabList.css";

const TabList = (props) => {
  const divClickHandler = (chngSrc) => {
    props.onDivClick(chngSrc);
  };

  return (
    <ul className="tabList">
      {props.tabs.map((box) => (
        <Tab title={box.title} key={box.id} src={box.src} onDivClick={divClickHandler} />
      ))}
    </ul>
  );
};

export default TabList;
