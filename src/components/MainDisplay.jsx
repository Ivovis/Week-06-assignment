// import "./MainDisplay.css";

export default function MainDisplay(props) {
  //
  //

  console.log("MainDisplay:", props.currentID);

  //TODO: fixme
  // use map? and set when the props.currentID
  //TODO: fixme - temp local frog to check is rendered
  return (
    <img className="MainDisplay" src={"../public/Cartoon-Frog.svg"} alt="" />
  );
}
