import Footer from "./footer";
import Navbar from "./navbar";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navbar />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
