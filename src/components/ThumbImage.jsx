import "./ThumbImage.css";

export default function ThumbImage(props) {
  function doClick() {
    props.setCurrentID(props.pic.id);
  }
  function doKey(event) {
    if (event.key === "Enter" || event.key === " ") {
      doClick();
    }
  }

  return (
    <img
      className="ThumbImage"
      tabIndex="0"
      role="img"
      draggable="false"
      src={props.pic.url}
      alt={props.pic.alt}
      onClick={doClick}
      onKeyDown={doKey}
    />
  );
}
