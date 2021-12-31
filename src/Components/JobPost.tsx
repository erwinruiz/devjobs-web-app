import classes from "./JobPost.module.css";

type JobPostProps = {
  key: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
};

function JobPost(props: JobPostProps) {
  const {
    company,
    logo,
    logoBackground,
    position,
    postedAt,
    contract,
    location,
  } = props;

  return (
    <div className={classes.container}>
      <div
        className={classes["company-logo-container"]}
        style={{ backgroundColor: `${logoBackground}` }}
      >
        <img src={logo} alt="company logo" />
      </div>
      <div className={classes["post-time-job-type"]}>
        <p>{postedAt}</p>
        <div className={classes.point}></div>
        <p>{contract}</p>
      </div>
      <h3 className={classes["position-name"]}>{position}</h3>
      <p className={classes["company-name"]}>{company}</p>
      <h4 className={classes["country-name"]}>{location}</h4>
    </div>
  );
}

export default JobPost;
