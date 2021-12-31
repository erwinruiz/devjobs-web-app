import { Fragment, useEffect, useState } from "react";
import classes from "./Home.module.css";
import JobPost from "../Components/JobPost";
import SearchFilter from "../Components/SearchFilter";
import Button from "../Components/UI/Button";

function Home() {
  const [jobs, setJobs] = useState<[]>();

  useEffect(() => {
    fetch("./data.json")
      .then((Response) => Response.json())
      .then(async (data) => {
        setJobs(data);
      });
  }, []);

  return (
    <Fragment>
      <SearchFilter />
      <div className={classes["job-posts-container"]}>
        {jobs &&
          jobs.map((job) => {
            const {
              id,
              company,
              logo,
              logoBackground,
              position,
              postedAt,
              contract,
              location,
            } = job;
            return (
              <JobPost
                key={id}
                company={company}
                logo={logo}
                logoBackground={logoBackground}
                position={position}
                postedAt={postedAt}
                contract={contract}
                location={location}
              />
            );
          })}
      </div>
      <div className={classes["button-container"]}>
        <Button text="Load More" />
      </div>
    </Fragment>
  );
}

export default Home;
