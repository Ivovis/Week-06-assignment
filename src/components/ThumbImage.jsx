import "./ThumbImage.css";

export default function ThumbImage(props) {
  function doClick() {
    props.setCurrentID(props.pic.id);
    console.log("doClick called");
  }
  //TODO: this is not working as expected
  function doKey(event) {
    if (event.key === "Enter" || event.key === " ") {
      doClick();
    }
    console.log(event.key);
  }

  return (
    <>
      <img
        className="ThumbImage"
        src={props.pic.url}
        alt={props.pic.alt}
        onClick={doClick}
        onKeyDown={doKey}
        tabIndex="0"
        role="img"
      />
    </>
  );
}
