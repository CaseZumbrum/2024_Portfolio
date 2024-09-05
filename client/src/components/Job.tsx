import "../styles/Job.css";
import job from "../types/job";
const Job = (job: job) => {
    return (
        <div className="job">
            <div className="job__image">
                <img src={job.image}></img>
            </div>
            <div className="job__content">
                <div className="content__time">
                    <span style={{ color: "#c9cbcc" }}>@</span><span style={{ color: "#64c8ab" }}>during</span><span style={{ color: "rgb(255, 181, 24)" }}>{"("}</span>

                    <span style={{ color: "#c7905b" }}>"{job.time}"</span>
                    <span style={{ color: "rgb(255, 181, 24)" }}>{")"}</span>
                </div>
                <div className="content__company">{job.company}<span style={{ color: "#c9cbcc" }}>:</span></div>
                <div className="content__description">{job.description}</div>
            </div>
        </div>
    );
};

export default Job;
