import Header from "./Header";
import Footer from "./Footer";
import HeroPage from "./HeroPage";
import HorizontalPoster from "./category/HorizontalPoster";
import VerticalPoster from "./category/VerticalPoster";

const HomePage = () => {
  return (
    <div>
      <Header />
      <div></div>
      <main className="header_home__hNAJD">
        <HeroPage />
        <HorizontalPoster jsonFile="/sun-nxt-clone/carousel/portalWatchNow.json" />
        <HorizontalPoster jsonFile="/sun-nxt-clone/carousel/liveChannelsPortalB.json" />
        <HorizontalPoster jsonFile="/sun-nxt-clone/carousel/portalHomeTvshowsLatestEpisodes.json" />
        <VerticalPoster jsonFile="/sun-nxt-clone/carousel/recentlyaddedmoviesprtl.json"/>
        <HorizontalPoster jsonFile="/sun-nxt-clone/carousel/tvShowsV21.json" />
        <HorizontalPoster jsonFile="/sun-nxt-clone/carousel/decadeMoviesPortal.json" />
        <HorizontalPoster jsonFile="/sun-nxt-clone/carousel/courtroomchroniclesprtl.json" />
        <VerticalPoster jsonFile="/sun-nxt-clone/carousel/besthistoricaldramaprtl.json" />
        <VerticalPoster jsonFile="/sun-nxt-clone/carousel/blockbustersensationprtl.json" />
        <HorizontalPoster jsonFile="/sun-nxt-clone/carousel/evergreenSerialsSmartTv.json" />
        <VerticalPoster jsonFile="/sun-nxt-clone/carousel/bestofsouthernstarsprtlmovies1.json" />
        <HorizontalPoster jsonFile="/sun-nxt-clone/carousel/popularactressportal.json" />
        <HorizontalPoster jsonFile="/sun-nxt-clone/carousel/romanceComedyd.json" />
        <VerticalPoster jsonFile="/sun-nxt-clone/carousel/moviesbasedonhorrorprtl.json" />
        <VerticalPoster jsonFile="/sun-nxt-clone/carousel/sportsmoviesprtl.json" />
        <VerticalPoster jsonFile="/sun-nxt-clone/carousel/familyflicksprtl.json" />
        <HorizontalPoster jsonFile="/sun-nxt-clone/carousel/latestsongs111.json" />
        <HorizontalPoster jsonFile="/sun-nxt-clone/carousel/unstoppablesequelsprtl.json" />
        <HorizontalPoster jsonFile="/sun-nxt-clone/carousel/portalHomeTvshowsLatestEpisodes.json" />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
