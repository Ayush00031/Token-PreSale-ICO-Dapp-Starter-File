import React from "react";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialGithub,
} from "react-icons/ti";
import { IoCloudDownload } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      className="site-footer footer__ico pos-rel"
      data-background="assets/img/bg/footer_bg.png"
    >
      <div className="container">
        <div className="row mt-none-30">
          <div className="col-lg-4 mt-30">
            <div className="footer__widget footer__subscribe">
              <h2>Subscribe newsletter</h2>
              <p>
                पत्र लेखन की परिभाषा एवं उनके और उदाहरण (हिन्दी व्याकरण) आम
                लोगों की यह धारणा है कि पत्र लिखने में किसी तरह का कोई प्रयास
              </p>
              <form action="">
                <input type="text" placeholder="rawatayush0031@gmail.com" />
                <button>
                  <IoIosSend />
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-8 mt-30">
            <div className="footer__widget text-lg-end">
              <h2>Download Document</h2>
              <div className="footer__document ul_li_right">
                <a href="#" className="footer__document-item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="" srcSet="" />
                  </div>
                  <span className="title">
                    <IoCloudDownload />
                    white paper
                  </span>
                </a>
                <a href="#" className="footer__document-item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="" srcSet="" />
                  </div>
                  <span className="title">
                    <IoCloudDownload />
                    One paper
                  </span>
                </a>
                <a href="#" className="footer__document-item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="" srcSet="" />
                  </div>
                  <span className="title">
                    <IoCloudDownload />
                    privacy policy
                  </span>
                </a>
                <a href="#" className="footer__document-item text-center">
                  <div className="icon">
                    <img src="assets/img/icon/pdf.svg" alt="" srcSet="" />
                  </div>
                  <span className="title">
                    <IoCloudDownload />
                    terms of sale
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom ul_li_between mt-50">
          <div className="footer__logo mt-20">
            <a href="#">
              <img src="assets/img/logo/logo.svg" alt="" srcSet="" />
            </a>
          </div>
          <ul className="footer__social ul_li mt-20">
            <li>
              <a href="#">
                <TiSocialFacebook />
              </a>
            </li>
            <li>
              <a href="#">
                <TiSocialInstagram />
              </a>
            </li>
            <li>
              <a href="#">
                <TiSocialLinkedin />
              </a>
            </li>
            <li>
              <a href="#">
                <TiSocialTwitter />
              </a>
            </li>
            <li>
              <a href="#">
                <TiSocialGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright mt-35">
        <div className="container">
          <div className="footer__copyright ul_li_between">
            <div className="footer__copyright-text mt-15">
              Copyright @ 2024 @theblockchaincoders. All rights reserved.
            </div>
            <ul className="footer__links ul_li_right mt-15">
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">Term</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer__icon-shape">
        <div className="icon icon--1">
          <div>
            <img src="assets/img/shape/f_icon1.png" alt="" srcSet="" />
          </div>
        </div>
        <div className="icon icon--2">
          <div>
            <img src="assets/img/shape/f_icon2.png" alt="" srcSet="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
