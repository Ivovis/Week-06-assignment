import "./HideUI.css";

export default function HideUI(props) {
  return (
    <img
      className="hideButton"
      src={
        props.hideState ? "/eye-hide-svgrepo-com.svg" : "/eye-svgrepo-com.svg"
      }
      alt={
        props.hideState
          ? "press to hide thumbnail bar"
          : "press to show thumbnail bar"
      }
      onClick={props.toggleHideState}
    />
  );
}
