import "./ThumbnailBar.css";
import { useEffect, useState } from "react";

export default function ThumbnailBar() {
  const [pics, setPics] = useState([]);

  useEffect(() => {
    async function getPics() {
      const response = await fetch("https://week-6-api.vercel.app/api/images");
      const resData = await response.json();
      //   console.log(resData);
      setPics(resData);
    }
    getPics();
  }, []);

  //   console.log("pics:", pics);

  return (
    <div className="thumbBar">
      {/* <p>The Pic Bar</p> */}
      {pics.map((pic) => {
        return (
          <div key={pic.id}>
            {/* <p className="title">{pic.title}</p> */}
            <img className="thumb" src={pic.url} alt={pic.alt} />
          </div>
        );
      })}
    </div>
  );
}
