import React, { ReactNode, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const jobsInitialState = [
  {
    id: 0,
    company: "",
    logo: "",
    logoBackground: "",
    position: "",
    postedAt: "",
    contract: "",
    location: "",
    website: "",
    apply: "",
    description: "",
    requirements: {
      content: "",
      items: [""],
    },
    role: {
      content: "",
      items: [""],
    },
  },
];

const Context = React.createContext({
  isModalOpen: false,
  modalHandler: (): void => {},
  jobDetailHandler: (id: number): void => {},
  jobs: jobsInitialState,
  selectedFilters: { title: "", location: "", fulltime: false },
  jobFiltersHandler: (filters: {
    title: string;
    location: string;
    fulltime: boolean;
  }): void => {},
});

const ContextProvider = (props: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState(jobsInitialState);
  const [selectedFilters, setSelectedFilters] = useState({
    title: "",
    location: "",
    fulltime: false,
  });
  const navigate = useNavigate();

  useEffect(() => {
    fetch("./data.json")
      .then((Response) => Response.json())
      .then(async (data) => {
        setJobs(data);
      });
  }, []);

  const modalHandler = () => {
    setIsModalOpen((state) => !state);
  };

  const jobDetailHandler = (id: number) => {
    navigate(`/job-detail/${id}`);
  };

  const jobFiltersHandler = (filters: {
    title: string;
    location: string;
    fulltime: boolean;
  }) => {
    setSelectedFilters(filters);
  };

  return (
    <Context.Provider
      value={{
        isModalOpen,
        modalHandler,
        jobDetailHandler,
        jobs,
        selectedFilters,
        jobFiltersHandler,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
