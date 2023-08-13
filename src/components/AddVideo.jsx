import "./AddVideo.css";
import { useState } from "react";

// ----------------------------------------------------------------

const InitialValue = {
  channel: "Coder Dost",
  time: "9 month ago",
  verified: false,
  title: "",
  views: "",
};

function AddVideo({ addVideos }) {
  const [video, setVideo] = useState(InitialValue);

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  function handleSubmit(element) {
    element.preventDefault();
    addVideos(video);
    setVideo(InitialValue);
  }

  return (
    <>
      <div className="form_container">
        <form>
          <input
            type="text"
            name="title"
            onChange={handleChange}
            autoComplete="off"
            placeholder="Title"
            value={video.title}
          />
          <input
            type="text"
            name="views"
            onChange={handleChange}
            autoComplete="off"
            placeholder="views"
            value={video.views}
          />

          <button onClick={handleSubmit}>Add</button>
        </form>
      </div>
    </>
  );
}

export default AddVideo;
