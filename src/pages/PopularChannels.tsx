import React, { useEffect, useState } from "react";
import Slider from "react-slick";

const HeroPage: React.FC = () => {
  const [movieData, setMovieData] = useState<IMovieSectionData | null>(null);
  useEffect(() => {
    fetchHeroCarousels();
  }, []);

  const fetchHeroCarousels = async () => {
    try {
      const response = await fetch("/sun-nxt-clone/carousel/portalWatchNow.json");
      const responseData = await response.json();
      setMovieData(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  if (!movieData) {
    return null;
  }
  return (
    <div className="LazyLoad is-visible">
      <div className="layout_center_banner">
        <div className="carousels_banner__G_NMX">
          <div className="carousels_carousel_body__J6BxB">
            <div className="carousels_carousel_data__dVbKV">
              <Slider {...settings}>
                {movieData.results.map((item, idx) => {
                  return (
                    <div key={idx}>
                      <div
                        className="carousels_carousel__ulvaR"
                        tabIndex={-1}
                        style={{ width: "100%", display: "inline-block" }}
                      >
                        <div className="banner_carousel">
                          <div className="carousels_movie_banner__l9T8R">
                            <a href="/tamil-movie-saguni-2012/detail/6943">
                              <span
                                style={{
                                  boxSizing: "border-box",
                                  display: "block",
                                  overflow: "hidden",
                                  width: "initial",
                                  height: "initial",
                                  background: "none",
                                  opacity: 1,
                                  border: "0px",
                                  margin: "0px",
                                  padding: "0px",
                                  position: "relative",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    display: "block",
                                    width: "initial",
                                    height: "initial",
                                    background: "none",
                                    opacity: 1,
                                    border: "0px",
                                    margin: "0px",
                                    padding: "56.25% 0px 0px",
                                  }}
                                ></span>
                                <img
                                  alt={item.generalInfo.altDisplayTitle}
                                  src={item.images.values[0].link}
                                  decoding="async"
                                  data-nimg="responsive"
                                  style={{
                                    position: "absolute",
                                    inset: "0px",
                                    boxSizing: "border-box",
                                    padding: "0px",
                                    border: "none",
                                    margin: "auto",
                                    display: "block",
                                    width: "0px",
                                    height: "0px",
                                    minWidth: "100%",
                                    maxWidth: "100%",
                                    minHeight: "100%",
                                    maxHeight: "100%",
                                  }}
                                />
                                <noscript></noscript>
                              </span>
                            </a>
                            <a href="/tamil-movie-saguni-2012/detail/6943">
                              <div className="banner_description">
                                <div className="carousels_description__7U0Di">
                                  <img
                                    id="title_img"
                                    src={item.images.values[2].link}
                                    alt="img"
                                  />
                                  <div className="carousels_description_data__Lc29a">
                                    <ul>
                                      <li>{item.content.language.join(" ")}</li>
                                      <li>Comedy,Drama,Political</li>
                                      <li>{item.content.duration}</li>
                                      <li>{item.content.releaseDate}</li>
                                      {/* <li>2 hr 18 min</li> */}
                                      {/* <li>2012</li> */}
                                    </ul>
                                    <ul className="carousels_video__Jm0E6">
                                      <li>{item.content.categoryType}</li>
                                      <li>{item.content.videoQuality}</li>
                                      <li className="carousels_videoqualityimg__iaYyd">
                                        {item.content.isDolbyvision &&
                                          "Dolby Audio"}
                                      </li>
                                    </ul>
                                    <div className="carousels_player_button__8TMRt">
                                      <div className="carousels_player_data__4r_T9">
                                        <img
                                          className="carousels_play_icon__QhVTt"
                                          src="images/play_icon.png"
                                          alt="play_icon"
                                        />
                                        <button className="carousels_play_button__lYX5N">
                                          Play
                                        </button>
                                      </div>
                                      <div className="carousels_watchlist_data__hoXIV">
                                        <img
                                          className="carousels_watchlist__MAGic"
                                          src="/_next/static/media/watchlist.cf949b25.png"
                                          alt="watchlist"
                                        />
                                        <button className="carousels_watchlist_button__u6rTZ">
                                          Watchlist
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
                {/* {movieData.  .map((item, idx) => {
                  const grouped = images.reduce((acc, img) => {
                    if (!acc[img.type]) acc[img.type] = [];
                    acc[img.type].push(img);
                    return acc;
                  }, {});

                  const coverImages = grouped["coverposter"] || [];

                  const srcSet = coverImages
                    .filter((i) => i.profile === item.profile)
                    .map((i) => `${i.link} ${i.resolution.split("x")[0]}w`)
                    .join(", ");

                  return (
                    <picture key={idx}>
                      <img
                        src={item.link}
                        srcSet={srcSet}
                        alt={`carousel-${item.profile}`}
                        style={{ width: "100%", height: "auto" }}
                        loading="lazy"
                      />
                    </picture>
                  );
                })} */}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
