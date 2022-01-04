import { Fragment, useContext } from "react";
import classes from "./Home.module.css";
import JobPost from "../Components/JobPost";
import SearchFilter from "../Components/SearchFilter";
import Button from "../Components/UI/Button";
import { Context } from "../store/context";
import Backdrop from "../Components/UI/Backdrop";
import FilterModal from "../Components/UI/FilterModal";
import JobsProps from "../Types/Jobs";

function Home() {
  const { jobs, isModalOpen, selectedFilters, jobFiltersHandler } =
    useContext(Context);

  let filteredJobs: JobsProps[] | null = null;

  if (selectedFilters.title !== "") {
    filteredJobs = jobs.filter((job) =>
      job.position.toLowerCase().includes(selectedFilters.title.toLowerCase())
    );
  }
  if (selectedFilters.location !== "") {
    if (filteredJobs) {
      filteredJobs = filteredJobs.filter((job) =>
        job.location
          .toLowerCase()
          .includes(selectedFilters.location.toLowerCase())
      );
    } else {
      filteredJobs = jobs.filter((job) =>
        job.location
          .toLowerCase()
          .includes(selectedFilters.location.toLowerCase())
      );
    }
  }
  if (selectedFilters.fulltime === true) {
    if (filteredJobs) {
      filteredJobs = filteredJobs.filter((job) => job.contract === "Full Time");
    } else {
      filteredJobs = jobs.filter((job) => job.contract === "Full Time");
    }
  }

  const resetFiltersHandler = () => {
    jobFiltersHandler({ title: "", location: "", fulltime: false });
    window.scrollTo(0, 0);
  };

  return (
    <Fragment>
      <SearchFilter />
      <div className={classes["job-posts-container"]}>
        {jobs &&
          !filteredJobs &&
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
                id={id}
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
        {filteredJobs &&
          filteredJobs.map((job) => {
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
                id={id}
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
        {!filteredJobs && <Button text="Load More" />}
        {filteredJobs && (
          <Button text="Reset filters" onClick={resetFiltersHandler} />
        )}
      </div>
      {isModalOpen && <Backdrop />}
      {isModalOpen && <FilterModal />}
    </Fragment>
  );
}

export default Home;
