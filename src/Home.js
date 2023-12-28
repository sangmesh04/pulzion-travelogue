import HomeBody from "./home/Body";
import HomeFooter from "./home/Footer";
import HomeHeader from "./home/Header";

const Home = () => {
  return (
    <div className="home">
      <HomeHeader />
      <HomeBody />
      <HomeFooter />
    </div>
  );
};

export default Home;
