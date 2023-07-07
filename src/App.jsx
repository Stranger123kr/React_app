import "./App.css";
import Video from "./components/Video";
import videos from "./data/Video_data";

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
          ></Video>
        ))}
      </div>
    </>
  );
}

export default App;
