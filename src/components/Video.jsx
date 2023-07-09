import "./Video.css";

function Video({ title, id, channel, views, time, verified, children }) {
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
        </div>
      </div>
    </>
  );
}

export default Video;
