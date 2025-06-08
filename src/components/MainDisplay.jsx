import "./MainDisplay.css";

export default function MainDisplay(props) {
  // loop through the imageSet and get values when the currentID and id match.
  // in the past I would have just converted the key to an array index.
  // this seems a little more robust.
  let nUrl = null;
  let nAlt = null;

  props.imageSet.map((pic) => {
    if (pic.id === props.currentID) {
      nUrl = pic.url;
      nAlt = pic.alt;
    }
  });

  // This is my first attempt, but using the style background attribute was better
  // return nUrl != null && nAlt != null ? (
  //   <img className="MainDisplay" src={nUrl} alt={nAlt} />
  // ) : null;

  // the above works but styling the image seems counter productive, if the style were applied here I may be able to style the background better

  // This works way better
  return nUrl != null && nAlt != null ? (
    <div className="MainDisplay" style={{ backgroundImage: `url(${nUrl})` }} />
  ) : null;
}
