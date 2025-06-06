import { useEffect, useState } from "react";
import "./App.css";
import ThumbnailBar from "./components/ThumbnailBar";
import MainDisplay from "./components/MainDisplay";

export default function App() {
  const [imageSet, setImageSet] = useState([]);
  const [currentID, setCurrentID] = useState(1);

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
    // This comment placed here so Prettier stops hating me.
    <>
      <ThumbnailBar imageSet={imageSet} setCurrentID={setCurrentID} />
      <MainDisplay imageSet={imageSet} currentID={currentID} />
    </>
  );
}
