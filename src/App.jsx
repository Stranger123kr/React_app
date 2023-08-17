import "./App.css";
import { useState } from "react";
import VideoDB from "./data/Video_data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";

function App() {
  const [videos, setVideos] = useState(VideoDB);
  const [editableVideos, setEditableVideos] = useState(null);

  const addVideos = (video) => {
    setVideos([...videos, { ...video, id: videos.length + 1 - 1 }]);
    console.log(videos.length);
  };

  const DeleteVideo = (id) => {
    setVideos(videos.filter((vide) => vide.id !== id));
  };

  const EditedVideo = (id) => {
    setEditableVideos(videos.find((vide) => vide.id === id));
    console.log(id);
    console.log(videos);
  };

  const updateVideo = (video) => {
    const index = videos.findIndex((v) => v.id === video.id);
    const newVideos = [...videos];
    newVideos.splice(index, 1, video);
    setVideos(newVideos);
    console.log(index);
    console.log(video);
  };

  return (
    <>
      <div className="flex">
        <VideoList
          videos={videos}
          DeleteVideo={DeleteVideo}
          EditedVideo={EditedVideo}
        />
        <AddVideo
          updateVideo={updateVideo}
          addVideos={addVideos}
          editableVideos={editableVideos}
          setEditableVideos={setEditableVideos}
        ></AddVideo>
      </div>
    </>
  );
}

export default App;
