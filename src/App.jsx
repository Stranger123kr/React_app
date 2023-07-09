import "./App.css";
import Video from "./components/Video";
import videos from "./data/Video_data";
import Play_Button from "./components/PlayButton";

function App() {
  return (
    <>
      <div className="flex">
        {videos.map((video_data, index) => (
          <Video
            key={index}
            title={video_data.title}
            id={index}
            channel={video_data.channel}
            views={video_data.views}
            time={video_data.time}
            verified={video_data.verified}
          >
            <Play_Button
              onPlay={() => console.log("play")}
              onPause={() => console.log("pause")}
            >
              Play
            </Play_Button>
          </Video>
        ))}
      </div>
    </>
  );
}

export default App;
