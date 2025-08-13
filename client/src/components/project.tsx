import "../styles/project.css";
import project from "../types/project";
export default function Project({
  title,
  body,
  img,
  link,
  demo,
  time,
}: project) {
  return (
    <div className="project">
      <div className="post__image">
        <img src={img}></img>
      </div>
      <div className="post__content">
        <div className="content__links">
          <span style={{ color: "#c9cbcc" }}>@</span>
          <span style={{ color: "#64c8ab" }}>links</span>
          <span style={{ color: "rgb(255, 181, 24)" }}>{"("}</span>

          {link && (
            <a
              href={link}
              style={{ color: "rgb(71, 156, 214)" }}
              target="_blank"
            >
              Source
            </a>
          )}
          {demo && link && <span style={{ color: "#c9cbcc" }}>{", "}</span>}
          {demo && (
            <a
              href={demo}
              style={{ color: "rgb(71, 156, 214)" }}
              target="_blank"
            >
              Demo
            </a>
          )}
          {!link && !demo && (
            <span style={{ color: "rgb(71, 156, 214)" }}>None</span>
          )}
          <span style={{ color: "rgb(255, 181, 24)" }}>{")"}</span>
        </div>
        <h2>
          {title}
          <span style={{ color: "rgb(255, 181, 24)" }}>{"{"}</span>
        </h2>

        <span className="post__time">
          <time>{time}</time>
        </span>
        <p
          className="post__summary"
          style={{ fontSize: 0.85 + 10 / body.length + "rem" }}
        >
          {body}
        </p>
        <h2>
          <span style={{ color: "rgb(255, 181, 24)" }}>{"}"}</span>
        </h2>
      </div>
    </div>
  );
}
