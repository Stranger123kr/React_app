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
  dispatch,
  editableVideos,
  setEditableVideos,
  setTheme,
  theme,
}) {
  const [video, setVideo] = useState(InitialValue);

  function handleSubmit(element) {
    element.preventDefault();

    if (editableVideos) {
      dispatch({ type: "Update", payload: video });
      setEditableVideos(null);
    } else {
      dispatch({ type: "Add", payload: video });
    }
    setVideo(InitialValue);
  }

  function handleChange(e) {
    setVideo({ ...video, [e.target.name]: e.target.value });
  }

  const handleTheme = (e) => {
    e.preventDefault();
    theme !== "DarkMode"
      ? (setTheme("DarkMode"), localStorage.setItem("themeMode", "DarkMode"))
      : (setTheme("LightMode"), localStorage.setItem("themeMode", "LightMode"));
  };

  useEffect(() => {
    if (editableVideos) {
      setVideo(editableVideos);
    }
  }, [editableVideos]);

  return (
    <>
      <div className={`form_container ${theme}`}>
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
          <button
            style={{ marginLeft: "0.8rem", width: "50%" }}
            onClick={handleTheme}
          >
            {theme === "DarkMode" ? "Light Mode" : "Dark Mode"}
          </button>
        </form>
      </div>
    </>
  );
}

export default AddVideo;
