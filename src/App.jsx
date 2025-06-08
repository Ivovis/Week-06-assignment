import { useEffect, useState } from "react";
import "./App.css";
import ThumbnailBar from "./components/ThumbnailBar";
import MainDisplay from "./components/MainDisplay";
import HideUI from "./components/HideUI";
import FullScreen from "./components/FullScreen";

export default function App() {
  const [imageSet, setImageSet] = useState([]);
  const [currentID, setCurrentID] = useState(1);
  const [hideState, setHideState] = useState(true);

  const toggleHideState = () => {
    setHideState(!hideState);
  };

  useEffect(() => {
    async function getImages() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      const resData = await response.json();
      //   console.log(resData);
      setImageSet(resData);
    }
    getImages();
  }, []);

  return (
    <>
      <ThumbnailBar
        className="thumbNails"
        imageSet={imageSet}
        setCurrentID={setCurrentID}
        hidden={hideState}
      />
      <MainDisplay imageSet={imageSet} currentID={currentID} />
      <HideUI hideState={hideState} toggleHideState={toggleHideState} />
      <FullScreen />
    </>
  );
}
