import "./Footer.css";

import { MdOutlineEmail } from "react-icons/md";
import { FaRegCalendarAlt, FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaLongArrowAltRight, FaApple } from "react-icons/fa";
import { IoMdArrowDropright } from "react-icons/io";
import { SlSocialVkontakte } from "react-icons/sl";
import { ImAndroid } from "react-icons/im";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import logo_img from "../../Asset/Images/logo.png";
import footer_img_one from "../../Asset/Images/f1.jpg";
import footer_img_two from "../../Asset/Images/f2.jpg";
import footer_img_three from "../../Asset/Images/f3.jpg";
import Form from 'react-bootstrap/Form';

function Footer() {

    return (
      <div className="blue-bg">

        {/* footer-one */}
        <div className="subscribe-footer px-3">
          <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="sub-title">
                        <h3>Subscribe For a <span>Newsletter</span></h3>
                        <p>Whant to be notified about new locations ?  Just sign up.</p>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="sub-title-input position-relative">
                        <input className="w-100" type="email" placeholder="Enter Your Email" />
                        <button  type="submit"><MdOutlineEmail /></button>
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* footer-two */}
        <div className="container footer-logo-list px-3">
          <div className="row">
            <div className="col-lg-4 col-12 mt-lg-0 mt-3">
              <div className="footer-logo">
                <img src={logo_img} alt="" />
              </div>
              <div className="footer-contact">
                <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida.</p>
                <ul className="m-0 list-unstyled">
                  <li><MdOutlineEmail className="contact-icon"  /> Mail : <a href="http://#">yourmail@domain.com</a></li>
                  <li><CiLocationOn  className="contact-icon" /> Address :<a href="http://#">USA 27TH Brooklyn NY</a></li>
                  <li><FiPhone  className="contact-icon" /> Phone :<a href="http://#">+7(111)123456789</a></li>
                </ul>
              </div>
              <div className="social-footer d-flex align-items-center gap-2">
                <h4 className="m-0">Find  us on: </h4>
                <FaFacebookF className="social-icon" />
                <FaTwitter className="social-icon"  />
                <FaInstagram className="social-icon" />
                <SlSocialVkontakte className="social-icon" />
                <FaWhatsapp className="social-icon" />
              </div>
            </div>
            <div className="col-lg-4 col-12 mt-lg-0 mt-3">
              <div className="our-last-news">
                <h3 className="position-relative">Our Last News</h3>
                <div className="row">
                  <div className="col-md-3 col-sm-4 col-4 mt-2">
                      <div className="footer-card">
                        <img className="rounded img-fluid" src={footer_img_one} alt="" />
                      </div>
                  </div>
                  <div className="col-md-9 col-sm-8 col-8 mt-2">
                    <div className="footer-card-title">
                      <h4 className="m-0">Vivamus dapibus rutrum</h4>
                      <p className="d-flex gap-2 m-0"> <FaRegCalendarAlt className="cal-icon" /> 21 Mar 09.05 </p>
                      <hr />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-4 mt-2">
                      <div className="footer-card">
                        <img className="rounded img-fluid" src={footer_img_two} alt="" />
                      </div>
                  </div>
                  <div className="col-md-9 col-sm-8 col-8 mt-2">
                    <div className="footer-card-title">
                      <h4 className="m-0"> In hac habitasse platea</h4>
                      <p className="d-flex gap-2 m-0"> <FaRegCalendarAlt className="cal-icon" /> 7 Mar 18.21 </p>
                      <hr />
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-4 col-4 mt-2">
                      <div className="footer-card">
                        <img className="rounded img-fluid" src={footer_img_three} alt="" />
                      </div>
                  </div>
                  <div className="col-md-9 col-sm-8 col-8 mt-2">
                    <div className="footer-card-title">
                      <h4 className="m-0">Tortor tempor in porta</h4>
                      <p className="d-flex gap-2 m-0"> <FaRegCalendarAlt className="cal-icon" /> 7 Mar 16.42 </p>
                      <hr />
                    </div>
                  </div>
                </div>
                <div className="read-title">
                  <span className="d-flex align-items-center gap-2">Read All <FaLongArrowAltRight className="arro-right" /></span>
               </div>          
              </div>
              
            </div>
            <div className="col-lg-4 col-12 mt-lg-0 mt-3">
                <div className="our-last-news">
                  <h3 className="position-relative">Our Last News</h3>
                </div>
                <div className="footer-list-two">
                  <ul className="m-0 list-unstyled">
                    <li className="d-flex align-items-center gap-3"><IoMdArrowDropright className="arrow-icon" />About Our Company</li>
                    <li className="d-flex align-items-center gap-3"><IoMdArrowDropright className="arrow-icon" />Our last News</li>
                    <li className="d-flex align-items-center gap-3"><IoMdArrowDropright className="arrow-icon" />Pricing Plans</li>
                    <li className="d-flex align-items-center gap-3"><IoMdArrowDropright className="arrow-icon" />Help Center</li>
                  </ul>
                </div>
                <div className="app-link d-flex flex-column">
                  <a className="download-btn w-100 text-center position-relative" href="http://#"><FaApple  className="download-icon  position-absolute"/>Apple Store</a>
                  <a className="download-btn w-100 text-center position-relative" href="http://#"><ImAndroid className="download-icon position-absolute" />Play Store</a>
                </div>
            </div>
          </div>
        </div>

      {/* footer-three */}
      <div className="copy-right">
        <div className="container copy-section d-flex justify-content-between align-items-center">
          <div className="copy-title">
            <p> © Townhub 2019 .  All rights reserved.</p>
          </div>
          <div className="right-section d-flex align-items-center gap-3">
              <div className="copy-list-menu">
                <ul className="m-0 list-unstyled d-flex align-items-center gap-3">
                  <li><a href="http://#">Terms of use</a></li>
                  <li><a href="http://#">Privacy Policy</a></li>
                  <li><a href="http://#">Blog</a></li>
                </ul>
              </div>
              <div className="lang-select">
                <Form.Select aria-label="Default select example">
                  <option>En</option>
                  <option value="1">Fr</option>
                  <option value="2">Sp</option>
                  <option value="3">De</option>
                </Form.Select>

              </div>
          </div>

        </div>

      </div>

      </div>
    );
  }
  
  export default Footer;
  