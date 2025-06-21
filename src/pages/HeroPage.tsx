import React, { useEffect, useState } from "react";
import Slider, { type Settings } from "react-slick";
import { format, parse } from "date-fns";

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

  const formatDurationString = (timeStr: string): string => {
    // timeStr: "HH:mm:ss"
    const parsed = parse(timeStr, "HH:mm:ss", new Date());
    const hours = parsed.getHours();
    const minutes = parsed.getMinutes();

    const hrPart = hours > 0 ? `${hours}hr` : "";
    const minPart = minutes > 0 ? `${minutes} minutes` : "";

    return [hrPart, minPart].filter(Boolean).join(" ");
  };

  const settings: Settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    centerMode: true,
    className: "center",
    centerPadding: "350px",
    autoplay: true,
    dotsClass: "slick-dots custom-dot-class",
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          centerPadding: "350px",
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "250px",
          nextArrow: <NextArrow />,
          prevArrow: <PrevArrow />,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          centerPadding: "200px",
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerPadding: "80px",
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],

    appendDots: (dots: any[]) => {
      // Find the active index
      const activeIndex = dots.findIndex((dot) =>
        dot.props.className?.includes("slick-active")
      );

      return (
        <ul>
          {dots.map((dot, i) => {
            let liClass = "dot-visible";

            if (i === activeIndex) {
              liClass += " pill-active slick-active";
            } else if (Math.abs(i - activeIndex) === 1) {
              liClass += "";
            } else if (Math.abs(i - activeIndex) === 2) {
              liClass += " dot-small";
            } else {
              return null; // hide far dots
            }

            return (
              <li key={i} className={liClass}>
                {dot.props.children}
              </li>
            );
          })}
        </ul>
      );
    },
    customPaging: (i) => (
      <button>
        {i} {/* or format however you want */}
      </button>
    ),
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
                  const filteredImages = item.images.values.find(
                    (img) => img.profile === "xxhdpi"
                  );
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
                                  src={filteredImages?.link}
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
                                    objectFit: "cover",
                                  }}
                                />
                                <noscript></noscript>
                              </span>

                              {!item.generalInfo.isSellable && (
                                <div className="freebadge">
                                  <span
                                    style={{
                                      boxSizing: "border-box",
                                      display: "inline-block",
                                      overflow: "hidden",
                                      width: "initial",
                                      height: "initial",
                                      background: "none",
                                      opacity: 1,
                                      border: "0px",
                                      margin: "0px",
                                      padding: "0px",
                                      position: "relative",
                                      maxWidth: "100%",
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
                                        padding: "0px",
                                        maxWidth: "100%",
                                      }}
                                    >
                                      <img
                                        alt=""
                                        aria-hidden="true"
                                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%2775%27%20height=%2733%27/%3e"
                                        style={{
                                          display: "block",
                                          maxWidth: "100%",
                                          width: "initial",
                                          height: "initial",
                                          background: "none",
                                          opacity: 1,
                                          border: "0px",
                                          margin: "0px",
                                          padding: "0px",
                                        }}
                                      />
                                    </span>
                                    <img
                                      alt="free_image"
                                      src="/sun-nxt-clone/images/icons/free_badge.png"
                                      decoding="async"
                                      data-nimg="intrinsic"
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
                                  </span>
                                </div>
                              )}
                            </a>
                            <a href="/tamil-movie-saguni-2012/detail/6943">
                              <div className="banner_description">
                                <div className="carousels_description__7U0Di">
                                  <img
                                    id="title_img"
                                    src={item.images.values[2].link}
                                    style={{ display: "none" }}
                                    alt="img"
                                  />
                                  <div className="carousels_description_data__Lc29a">
                                    <ul>
                                      <li>{item.content.language.join(" ")}</li>
                                      <li>
                                        {item.content.genre.map(
                                          (item) => item.name + ", "
                                        )}
                                      </li>
                                      <li>
                                        {formatDurationString(
                                          item.content.duration
                                        )}
                                      </li>
                                      <li>
                                        {format(
                                          item.content.releaseDate,
                                          "yyyy"
                                        )}
                                      </li>
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
                                          src="images/icons/play_icon.png"
                                          alt="play_icon"
                                        />
                                        <button className="carousels_play_button__lYX5N">
                                          Play
                                        </button>
                                      </div>
                                      <div className="carousels_watchlist_data__hoXIV">
                                        <img
                                          className="carousels_watchlist__MAGic"
                                          src="/sun-nxt-clone/images/icons/watchlist.cf949b25.png"
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

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <>
      <button
        type="button"
        data-role="none"
        className={`slick-arrow slick-next ${className}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        Next
      </button>
    </>
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <>
      <button
        type="button"
        data-role="none"
        className={`slick-arrow slick-prev ${className}`}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      >
        Previous
      </button>
    </>
  );
}

export default HeroPage;
