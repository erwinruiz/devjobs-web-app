import { Fragment } from "react";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Detail from "./Pages/Detail";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <Fragment>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job-detail/:jobId" element={<Detail />} />
        </Routes>
      </main>
    </Fragment>
  );
}

export default App;
