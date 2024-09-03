import "../styles/project.css";
import project from '../types/project';
export default function Project({ title, body, img, link, time }: project) {
  return (
    <div className="project">
      <div className="post__image">
        <img src={img}></img>
      </div>
      <div className="post__content">
        <h2>
          {title}
          <span style={{ color: "rgb(255, 181, 24)" }}>{"{"}</span>
        </h2>

        <span className="post__time">
          <time>{time}</time>
        </span>
        <p className="post__summary">{body}</p>
        {{ link }.link != null && <a href={link}>Link</a>}
        <h2>
          <span style={{ color: "rgb(255, 181, 24)" }}>{"}"}</span>
        </h2>
      </div>
    </div>
  );
}
