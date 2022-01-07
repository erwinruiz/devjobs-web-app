import classes from "./Detail.module.css";
import { useContext, Fragment } from "react";
import { Context } from "../store/context";
import Button from "../Components/UI/Button";
import { useParams } from "react-router-dom";

function Detail() {
  const { jobs } = useContext(Context);
  const { jobId } = useParams();

  const selectedJob = jobs.find((job) => job.id === parseInt(jobId!));

  if (!selectedJob)
    return <h2 className={classes["job-not-found"]}>Job not found</h2>;

  const {
    logoBackground,
    logo,
    company,
    postedAt,
    contract,
    position,
    location,
    description,
    requirements,
    role,
  } = selectedJob!;

  return (
    <Fragment>
      <div className={classes["company-container"]}>
        <div
          className={classes["company-logo-container"]}
          style={{ backgroundColor: `${logoBackground}` }}
        >
          <img src={logo} alt="company logo" />
        </div>
        <div className={classes["company-name-website"]}>
          <h3 className={classes["company-name"]}>{company}</h3>
          <p className={classes["company-website"]}>
            {`${company}`.replace(/ +/g, "").toLowerCase()}.com
          </p>
        </div>
        <Button text="Company Site" />
      </div>
      <div className={classes["job-description-container"]}>
        <div className={classes["first-part"]}>
          <div>
            <div className={classes["post-time-job-type"]}>
              <p>{postedAt}</p>
              <div className={classes.point}></div>
              <p>{contract}</p>
            </div>
            <h1 className={classes["position-name"]}>{position}</h1>
            <h4 className={classes["country-name"]}>{location}</h4>
          </div>
          <Button text="Apply Now" />
        </div>
        <div className={classes["second-part"]}>
          <p className={classes["job-description"]}>{description}</p>
          <div className={classes["job-requirements"]}>
            <h3>Requirements</h3>
            <p>{requirements.content}</p>
            <ul>
              {requirements.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div className={classes["job-activities"]}>
            <h3>What You Will Do</h3>
            <p>{role.content}</p>
            <ul>
              {role.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={classes["button-container"]}>
        <div className={classes['button-inside-container']}>
          <div className={classes["bottom-company-information"]}>
            <h3>{position}</h3>
            <p>{company}</p>
          </div>
          <Button text="Apply Now" />
        </div>
      </div>
    </Fragment>
  );
}

export default Detail;
