import React from "react";

const Header: React.FC = () => {
  return (
    <div>
      <div className="header_nav__JpY1D">
        <div className="header_headermenu__BjsXA">
          <img
            className="header_logo__6wvZ3"
            src="/sun-nxt-clone/images/logo/logo.png"
            alt="logo"
          />
          <div>
            <div className="header_mobile_menu__GMFZO">
              <ul className="header_menu__cfTtF">
                <li className="header_active__z_yDL">Home</li>
                <li className="header_disabled__E9wP_">Movies</li>
                <li className="">TV Shows</li>
                <li className="">Live TV</li>
                <li className="">Shorts</li>
                <li className="">Music Videos</li>
                <li className="">Comedy</li>
              </ul>
              <div className="header_scroll_right_arrow__EwwHQ">
                <img src="/sun-nxt-clone/images/icons/view_all.png" alt="view_all" />
              </div>
            </div>
            <div className="header_right_content__yUA4F">
              <div className="header_languages__xpje_">
                <div className="Toastify"></div>
                <button className="header_btn__A5Dou">Languages</button>
                <img
                  className="header_language_icon__ZLX3G"
                  src="/sun-nxt-clone/images/icons/language_icon.png"
                  alt="language"
                />
                <span>
                  <img
                    className="header_caret__vfeUE"
                    src="/sun-nxt-clone/images/icons/caret-down.png"
                    alt="caret"
                  />
                  <img
                    className="header_up_arrow__1yK6O"
                    src="/sun-nxt-clone/images/icons/up_arrow.png"
                    alt="uparrow"
                  />
                </span>
                <div className="header_languages_list__gaALr">
                  <ul>
                    <li className="langauge_selected">
                      <label htmlFor="tamil">TAMIL</label>
                      <div className="header_squarecheckbox___FkeU">
                        <input
                          type="checkbox"
                          id="tamil"
                          checked={true}
                          onChange={() => !true}
                        />
                        <label htmlFor="tamil"></label>
                      </div>
                    </li>
                    <li className="langauge_selected">
                      <label htmlFor="telugu">TELUGU</label>
                      <div className="header_squarecheckbox___FkeU">
                        <input
                          type="checkbox"
                          id="telugu"
                          checked={false}
                          onChange={() => !true}
                        />
                        <label htmlFor="telugu"></label>
                      </div>
                    </li>
                    <li className="langauge_selected">
                      <label htmlFor="malayalam">MALAYALAM</label>
                      <div className="header_squarecheckbox___FkeU">
                        <input
                          type="checkbox"
                          id="malayalam"
                          checked={false}
                          onChange={() => !true}
                        />
                        <label htmlFor="malayalam"></label>
                      </div>
                    </li>
                    <li className="langauge_selected">
                      <label htmlFor="kannada">KANNADA</label>
                      <div className="header_squarecheckbox___FkeU">
                        <input
                          type="checkbox"
                          id="kannada"
                          checked={false}
                          onChange={() => !true}
                        />
                        <label htmlFor="kannada"></label>
                      </div>
                    </li>
                    <li className="langauge_selected">
                      <label htmlFor="hindi">HINDI</label>
                      <div className="header_squarecheckbox___FkeU">
                        <input
                          type="checkbox"
                          id="hindi"
                          checked={false}
                          onChange={() => !true}
                        />
                        <label htmlFor="hindi"></label>
                      </div>
                    </li>
                    <li className="langauge_selected">
                      <label htmlFor="bengali">BENGALI</label>
                      <div className="header_squarecheckbox___FkeU">
                        <input
                          type="checkbox"
                          id="bengali"
                          checked={false}
                          onChange={() => !true}
                        />
                        <label htmlFor="bengali"></label>
                      </div>
                    </li>
                    <li className="langauge_selected">
                      <label htmlFor="marathi">MARATHI</label>
                      <div className="header_squarecheckbox___FkeU">
                        <input
                          type="checkbox"
                          id="marathi"
                          checked={false}
                          onChange={() => !true}
                        />
                        <label htmlFor="marathi"></label>
                      </div>
                    </li>
                    <li className="langauge_selected">
                      <label htmlFor="english">ENGLISH</label>
                      <div className="header_squarecheckbox___FkeU">
                        <input
                          type="checkbox"
                          id="english"
                          checked={false}
                          onChange={() => !true}
                        />
                        <label htmlFor="english"></label>
                      </div>
                    </li>
                  </ul>
                  <button type="submit" className="header_apply_button__qRdfr">
                    Apply
                  </button>
                </div>
              </div>
              <a href="/searchcontents">
                <div className="header_search__c2rgI">
                  <button className="header_background_img__nvqOn">
                    <img src="/sun-nxt-clone/images/icons/search.svg" alt="search" />
                  </button>
                </div>
              </a>
              <div className="upgradeSubscription">
                <button
                  type="button"
                  className="header_sunscription_button__shqYE btn btn-primary"
                >
                  Subscribe
                </button>
              </div>
              <div className="header_myaccount__XYM8A">
                <div className="header_myaccount_logo__LnEUB">
                  <img src="/sun-nxt-clone/images/icons/profile.png" alt="myaccount" />
                </div>
                <div className="header_dropdown_myaccount__MOK2h">
                  <div className="profile_signin">
                    <ul>
                      <a href="/signin">
                        <li>Sign In</li>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
