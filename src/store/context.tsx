import React, { ReactNode, useState } from "react";

const Context = React.createContext({
  isModalOpen: false,
  modalHandler: (): void => {},
});

const ContextProvider = (props: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalHandler = () => {
    setIsModalOpen((state) => !state);
  };

  return (
    <Context.Provider value={{ isModalOpen, modalHandler }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider };
