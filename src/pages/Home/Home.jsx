import React from "react";
import Nav from "../../layout/nav/Nav";
import girls from "../../assets/headerImg/qiz-bg.png";
import Footer from "../../layout/footer/Footer";
import SiderBar from "../../components/SideBar/SiderBar";
import Books from "../../components/Books/Books";
import Swipper from "../../components/Swipper/Swipper";

const Home = () => {
  return (
    <div>
      <Nav
        main_title={"read and add your insight"}
        text={"find your favorite book and read it here for free"}
        image={girls}
      />
      <div className="home_main">
        <SiderBar />
        <Books
          title={"Recommended"}
          className={"recommended"}
          className2={"all_books"}
          className3={"books"}
          limit={4}
          limitP={40}
          btn={"btn_home"}
        />
      </div>
      <Swipper />
      <Footer />
    </div>
  );
};

export default Home;
