import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

function Root({ resetSearch }) {
  return (
    <>
      <Header resetSearch={resetSearch} />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
