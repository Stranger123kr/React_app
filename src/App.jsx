import "./App.css";
import { useState, useReducer, useContext } from "react";
import VideoDB from "./data/Video_data";
import AddVideo from "./components/AddVideo";
import VideoList from "./components/VideoList";
import ThemeContext from "./Context/ThemeContext";

function App() {
  const videosReducer = (videos, action) => {
    switch (action.type) {
      case "Add":
        return [...videos, { ...action.payload, id: videos.length + 1 - 1 }];

      case "Delete":
        return videos.filter((vide, index) => index !== action.payload);

      case "Update":
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        return newVideos;

      default:
        return videos;
    }
  };

  const [videos, dispatch] = useReducer(videosReducer, VideoDB);

  const [theme, setTheme] = useState(
    localStorage.getItem("themeMode") === null
      ? "DarkMode"
      : localStorage.getItem("themeMode")
  );

  const [editableVideos, setEditableVideos] = useState(null);

  const EditedVideo = (id) => {
    setEditableVideos(videos.find((vide) => vide.id === id));
  };

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <div className={`flex ${theme}`}>
          <VideoList
            videos={videos}
            dispatch={dispatch}
            EditedVideo={EditedVideo}
          />
          <AddVideo
            dispatch={dispatch}
            setTheme={setTheme}
            theme={theme}
            editableVideos={editableVideos}
            setEditableVideos={setEditableVideos}
          ></AddVideo>
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
