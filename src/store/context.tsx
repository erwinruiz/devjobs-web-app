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
});

const ContextProvider = (props: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [jobs, setJobs] = useState(jobsInitialState);
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

  return (
    <Context.Provider
      value={{
        isModalOpen,
        modalHandler,
        jobDetailHandler,
        jobs,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
