import "./ThumbnailBar.css";
import ThumbImage from "./ThumbImage";

export default function ThumbnailBar(props) {
  return (
    <>
      {props.hidden ? (
        <div className="thumbBar">
          {props.imageSet.map((pic) => {
            return (
              <ThumbImage
                key={pic.id}
                pic={pic}
                setCurrentID={props.setCurrentID}
              />
            );
          })}
        </div>
      ) : null}
    </>
  );
}
