import "./App.css";
import { useState } from "react";
import VideoDB from "./data/Video_data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(VideoDB);

  const addVideos = (video) => {
    setVideos([...videos, video]);
  };

  return (
    <>
      <div className="flex">
        <VideoList videos={videos} />
        <AddVideo addVideos={addVideos}></AddVideo>
      </div>
    </>
  );
}

export default App;
