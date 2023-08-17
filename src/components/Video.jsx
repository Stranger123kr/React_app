import "./Video.css";
import { AiOutlineDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";

function Video({
  title,
  id,
  channel,
  views,
  time,
  verified,
  children,
  DeleteVideo,
  EditedVideo,
}) {
  return (
    <>
      <div className="container">
        <div className="card">
          <div className="pic">
            <img src={`https://picsum.photos/id/${id}/0/0`} alt="random_img" />
          </div>
          <h1 className="title">{title}</h1>
          <div className="channel">
            {channel}
            {verified && <span>✅</span>}
          </div>
          <div className="views">
            <span className="view">{views} views</span>
            <span className="time">{time}</span>
          </div>
          <div className="btn">{children}</div>
          <div className="delete">
            <AiOutlineDelete className="" onClick={() => DeleteVideo(id)} />
            <BiEdit className="Edited" onClick={() => EditedVideo(id)} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Video;
