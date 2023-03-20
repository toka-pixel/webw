import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import About from "../../components/About/About";
import Solutions from "../../components/Solutions/Solutions";
import BestPlatform from "../../components/BestPlatform/BestPlatform";
import PlatformOverview from "../../components/PlatformOverview/PlatformOverview";
import GrowProcess from "../../components/GrowProcess/GrowProcess";
import Statistics from "../../components/Statistics/Statistics";
import HappyUsers from "../../components/HappyUsers/HappyUsers";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <About />
      <Solutions />
      <BestPlatform leftImg={true} />
      <PlatformOverview />
      <BestPlatform leftImg={false} />
      <GrowProcess />
      <Statistics />
      <HappyUsers />
      <Footer />
    </div>
  );
};

export default Home;
