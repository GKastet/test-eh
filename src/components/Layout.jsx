//import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
//import Header from "./Header/Header";
//import Footer from "./Footer/Footer";

const Layout = () => {
  return (
    <>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </>
  );
};

// Layout.propTypes = {
//   lang: PropTypes.string,
//   changeLanguage: PropTypes.func,
// };

export default Layout;
