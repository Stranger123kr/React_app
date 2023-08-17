import Video from "./Video";
import Play_Button from "./PlayButton";
const VideoList = ({ videos, DeleteVideo, EditedVideo }) => {
  return (
    <>
      {videos.map((video_data, index) => (
        <Video
          key={index}
          title={video_data.title}
          id={index}
          channel={video_data.channel}
          views={video_data.views}
          time={video_data.time}
          verified={video_data.verified}
          DeleteVideo={DeleteVideo}
          EditedVideo={EditedVideo}
        >
          <Play_Button
            onPlay={() => console.log("play")}
            onPause={() => console.log("pause")}
          >
            Play
          </Play_Button>
        </Video>
      ))}
    </>
  );
};

export default VideoList;
