import { Fragment } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";

function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Home />
      </main>
    </Fragment>
  );
}

export default App;
