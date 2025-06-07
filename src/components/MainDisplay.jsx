import "./MainDisplay.css";

export default function MainDisplay(props) {
  // loop through the imageSet and get values when the currentID and id match, if nothing found we return an img with empty attributes, this causes no errors.
  let nUrl = null;
  let nAlt = null;

  props.imageSet.map((pic) => {
    if (pic.id === props.currentID) {
      nUrl = pic.url;
      nAlt = pic.alt;
    }
  });

  // not sure the alt text should be placed here

  // return nUrl != null && nAlt != null ? (
  //   <img className="MainDisplay" src={nUrl} alt={nAlt} />
  // ) : null;

  // the above works but styling the image seems counter productive, if the style were applied here I may be able to style the background better

  return nUrl != null && nAlt != null ? (
    <div className="MainDisplay" style={{ backgroundImage: `url(${nUrl})` }} />
  ) : null;
}
