import "./AddVideo.css";
import { useEffect, useState } from "react";

// ----------------------------------------------------------------

const InitialValue = {
  channel: "Coder Dost",
  time: "9 month ago",
  verified: true,
  title: "",
  views: "",
};

function AddVideo({
  addVideos,
  updateVideo,
  editableVideos,
  setEditableVideos,
}) {
  const [video, setVideo] = useState(InitialValue);

  function handleSubmit(element) {
    element.preventDefault();
    console.log(editableVideos);

    if (editableVideos) {
      updateVideo(video);
      setEditableVideos(null);
    } else {
      addVideos(video);
    }
    setVideo(InitialValue);
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  useEffect(() => {
    if (editableVideos) {
      setVideo(editableVideos);
    }
  }, [editableVideos]);

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

          <button onClick={handleSubmit}>
            {editableVideos ? "Edit" : "Add"}
          </button>
        </form>
      </div>
    </>
  );
}

export default AddVideo;
