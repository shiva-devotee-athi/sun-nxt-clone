import React, { useEffect, useRef, useState } from "react";
import { format, parse } from "date-fns";

import Slider, { type Settings } from "react-slick";

const HorizontalPoster: React.FC<{ jsonFile: string }> = ({ jsonFile }) => {
  let sliderRef = useRef<Slider | null>(null);
  const [movieData, setMovieData] = useState<IMovieSectionData | null>(null);

  const nextSlide = () => {
    if (!sliderRef.current) {
      return;
    }
    sliderRef.current.slickNext();
  };

  const prevSlide = () => {
    if (!sliderRef.current) {
      return;
    }
    sliderRef.current.slickPrev();
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

  useEffect(() => {
    fetchHeroCarousels();
  }, []);

  const fetchHeroCarousels = async () => {
    try {
      const response = await fetch(jsonFile);
      const responseData = await response.json();
      setMovieData(responseData);
    } catch (error) {
      console.error(error);
    }
  };

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    centerMode: false,
    className: "center",
    autoplay: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1520,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  if (!movieData) {
    return null;
  }

  return (
    <div className="carousels_layout__Ng3hN">
      <div className="carousels_carousel_body__J6BxB">
        <div className="carousels_home_carosel_title__5Z0uK">
          <img
            className="carousels_elevation_strip__AykxV"
            src="/sun-nxt-clone/images/icons/elevationstrip.png"
            alt="elevation"
          />
          <a href="/tamil-telugu-malayalam-kannada-hindi-bengali-marathi-english-serial/inside/ThalapathyKondattamnewui3?title=Thalapathy%20Thiruvizha&amp;type=vod&amp;publishingHouseId=45">
            <h1>{movieData.title}</h1>
          </a>
          <div className="carousels_see_more_part__cjTFx">
            <a href="/tamil-telugu-malayalam-kannada-hindi-bengali-marathi-english-serial/inside/ThalapathyKondattamnewui3?title=Thalapathy%20Thiruvizha&amp;type=vod&amp;publishingHouseId=45">
              <div className="carousels_see_more_part__cjTFx">
                <img src="/sun-nxt-clone/images/icons/view_all.png" alt="viewall" />
                <button type="button">View All</button>
              </div>
            </a>
          </div>
          <div
            className="carousels_buttons_imgs__BlXCL"
            style={{ float: "right", cursor: "default" }}
          >
            <div
              className="carousels_arrows_left_section__3mZmr"
              onClick={prevSlide}
            >
              <img
                src="/sun-nxt-clone/images/icons/scroll_back_left.png"
                className="carousels_default_arrow_left__Q94Ko"
                alt="scroll_arrow_left"
              />
              <img
                src="/sun-nxt-clone/images/icons/scroll_back_hover.png"
                className="carousels_selected_arrow_left__cvJFR"
                alt="scroll_arrow_left"
              />
            </div>
            <div
              className="carousels_arrows_right_section__WWpso"
              onClick={nextSlide}
            >
              <img
                src="/sun-nxt-clone/images/icons/scroll_forwd_right.png"
                className="carousels_default_arrow_right__cLtn5"
                alt="scroll_arrow_right"
              />
              <img
                src="/sun-nxt-clone/images/icons/scroll_frwd_hover.png"
                className="carousels_selected_arrow_right__ZbT78"
                alt="scroll_arrow_right"
              />
            </div>
          </div>
        </div>

        <div className="carousels_carousel_data__dVbKV">
          <Slider {...settings} ref={sliderRef}>
            {movieData.results.map((item, idx) => {
              const filteredImages = item.images.values.find(
                (img) => img.resolution === "1920x1080"
              );
              // 1920x1080
              return (
                <div key={idx}>
                  <div
                    className="carousels_carousel__ulvaR"
                    tabIndex={-1}
                    style={{ width: "100%", display: "inline-block" }}
                  >
                    <div className="carousels_movie_banner__l9T8R">
                      <a href="/suntv-tamil-serial-non-stop-entertainment-episodeno22-Jun20-2025/detail/104459/167805">
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
                            alt={item.altGlobalServiceName}
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
                        <div className="carousels_continue_carousel_description__tNCw_">
                          <div className="carousels_carousel_description__50QBj">
                            <div className="carousels_carousel_detail_dec__B0Lma">
                              <div className="">
                                <div className="carousels_description__7U0Di">
                                  <span className="carousels_description_title__1tNiZ">
                                    {item.title}
                                  </span>
                                  <div className="carousels_description_data__Lc29a">
                                    <ul>
                                      <li>{item.content.language.join(" ")}</li>
                                      <li>
                                        {item.content.genre.map(
                                          (item) => item.name + ", "
                                        )}
                                      </li>
                                    </ul>
                                    <ul>
                                      <li>
                                        {formatDurationString(
                                          item.content.duration
                                        )}
                                      </li>
                                      <li>{item.content.videoQuality}</li>
                                      <li>
                                        {format(
                                          item.content.releaseDate,
                                          "yyyy"
                                        )}
                                      </li>
                                    </ul>
                                    <div className="carousels_player_button__8TMRt">
                                      <div className="carousels_player_data__4r_T9">
                                        <img
                                          className="carousels_play_icon__QhVTt"
                                          src="/sun-nxt-clone/images/icons/play_icon.png"
                                          alt="play_icon"
                                        />
                                        <button className="carousels_play_button__lYX5N">
                                          Play
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {!item.generalInfo.isSellable && (
                          <div className="freebadge_square">
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
                                alt="free_badge"
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
                              <noscript></noscript>
                            </span>
                          </div>
                        )}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default HorizontalPoster;
