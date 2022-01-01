import { Fragment, useEffect, useState, useContext } from "react";
import classes from "./Home.module.css";
import JobPost from "../Components/JobPost";
import SearchFilter from "../Components/SearchFilter";
import Button from "../Components/UI/Button";
import { Context } from "../store/context";
import Backdrop from "../Components/UI/Backdrop";
import FilterModal from "../Components/UI/FilterModal";

function Home() {
  const [jobs, setJobs] = useState<[]>();
  const { isModalOpen } = useContext(Context);

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
      {isModalOpen && <Backdrop />}
      {isModalOpen && <FilterModal />}
    </Fragment>
  );
}

export default Home;
