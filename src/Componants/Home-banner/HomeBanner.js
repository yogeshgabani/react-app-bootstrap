import "./Homebanner.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import { FaKeyboard, FaSearch, FaHamburger, FaUserFriends, FaDollyFlatbed, FaCocktail, FaDumbbell, FaStar, FaBed, FaCheck, FaSmokingBan, FaWifi, FaPhone, FaPlayCircle, FaAngleUp } from "react-icons/fa";
import { MdEditLocation, MdMenu, MdDateRange, MdOutlineFireplace, MdOutlineShoppingBag, MdKeyboardDoubleArrowDown, MdLocationPin, MdFavorite, MdOutlineMail, MdOutlineLocationOn, MdZoomIn } from "react-icons/md";
import { TbParking } from "react-icons/tb";
import { LiaDogSolid, LiaMailBulkSolid } from "react-icons/lia";
import { IoLocationOutline, IoCloseCircleOutline, IoCheckmark, IoLogoApple } from "react-icons/io5";
import { TiArrowRightOutline } from "react-icons/ti";
import { BiCartDownload, BiLayerPlus } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { DiAndroid } from "react-icons/di";
import { RxLockOpen2 } from "react-icons/rx";
import img_one from '../../Asset/Images/29.jpg';
import author_one from '../../Asset/Images/3.jpg';
import img_two from '../../Asset/Images/48.jpg';
import author_two from '../../Asset/Images/4.jpg';
import img_three from '../../Asset/Images/25.jpg';
import author_three from '../../Asset/Images/6.jpg';
import img_four from '../../Asset/Images/42.jpg';
import author_four from '../../Asset/Images/5.jpg';
import explore_img_one from '../../Asset/Images/56.jpg';
import explore_img_two from '../../Asset/Images/57.jpg';
import explore_img_three from '../../Asset/Images/58.jpg';
import explore_img_four from '../../Asset/Images/60.jpg';
import explore_img_five from '../../Asset/Images/59.jpg';
import cate_image_one from '../../Asset/Images/1_1.jpg';
import img_avtar_one from '../../Asset/Images/avtar-1.jpg';
import mob_img from '../../Asset/Images/api.png';
import logo_img from '../../Asset/Images/logo.png';
import mobi_one from '../../Asset/Images/mob-1.jpg';
import mobi_two from '../../Asset/Images/mob-2.jpg';
import avtar_one from '../../Asset/Images/2.jpg';
import avtar_two from '../../Asset/Images/3.jpg';
import avtar_three from '../../Asset/Images/4.jpg';
import avtar_four from '../../Asset/Images/5.jpg';
import client_one from '../../Asset/Images/c1.png';
import client_two from '../../Asset/Images/c2.png';
import client_three from '../../Asset/Images/c3.png';



import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { Tooltip as ReactTooltip } from "react-tooltip";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { collectionData } from '../../Data';




function Homebanner() {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const setting = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            },
        ]
    };


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [activeId, setActiveId] = useState(null);

    const toggleActive = (id) => {
        if (activeId === id) {
            setActiveId(null); // Close the active div if it's clicked again
        } else {
            setActiveId(id);
        }
    };

    const [showTopBtn, setShowTopBtn] = useState(false);


    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);


    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const [showTopBtn1, setShowTopBtn1] = useState(true);

    const goTobottom = () => {
        window.scrollTo({
            top: 700,
            behavior: 'smooth',
        });
    };

    const [category, setCategory] = useState(collectionData);
    const [activeBtn, setActiveBtn] = useState("All"); 

    const handleBtns = (e) => {
        
        let word = e.target.value;

        if (word === "All") {
            setCategory(collectionData);
        } else {
            const filtered = collectionData.filter(item => item.kind === word);
            setCategory(filtered);
        }
        setActiveBtn(word);
    }
    return (
        <div>
            <div className="position-relative">
                <div className="hero-section ">
                    <div className="bg-wrap-image">
                        <div className="home-image ">
                            <div className="overlay">
                            </div>
                            <div className="container position-relative">
                                <div className="intro-item">
                                    <div>
                                        <span className="section-separator"></span>
                                    </div>
                                    <div className="bubbles text-center">
                                        <h1>Explore Best Places In City</h1>
                                    </div>
                                    <div className="my-3 text-center">
                                        <h3>Find some of the best tips from around the city from our partners and friends.</h3>
                                    </div>
                                </div>
                                <div className="main-tab-menu">
                                    <Tabs defaultActiveKey="place" id="uncontrolled-tab-example" className="mb-3">
                                        <Tab eventKey="place" title="PLACES">
                                            <div className="place-tab-one d-flex align-items-center">
                                                <div className="main-search-input position-relative">
                                                    <FaKeyboard className="input-icon" />
                                                    <input className="" type="text" placeholder="What are you looking for?"></input>
                                                </div>
                                                <div className="main-search-input position-relative">
                                                    <MdEditLocation className="input-icon" />
                                                    <input className="" type="text" placeholder="Location"></input>
                                                </div>
                                                <div className="main-search-input position-relative">
                                                    <MdMenu className="input-icon" />
                                                    <Form.Select aria-label="Default select example">
                                                        <option>All Categories</option>
                                                        <option value="1">Shops</option>
                                                        <option value="2">Hotels</option>
                                                        <option value="3">restaurants</option>
                                                        <option value="3">Events</option>
                                                        <option value="3">Fitness</option>
                                                    </Form.Select>
                                                </div>
                                                <div className="search-home-btn">
                                                    <button className="d-flex justify-content-center align-items-center gap-2" type="">Search<FaSearch className="search-icon-tab" /></button>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="events" title="EVENTS">
                                            <div className="place-tab-one d-flex align-items-center">
                                                <div className="main-search-input position-relative">
                                                    <MdOutlineFireplace className="input-icon" />
                                                    <input className="" type="text" placeholder="Event Name or Place"></input>
                                                </div>
                                                <div className="main-search-input position-relative">
                                                    <MdMenu className="input-icon" />
                                                    <Form.Select aria-label="Default select example">
                                                        <option>All Cities</option>
                                                        <option value="1">London</option>
                                                        <option value="2">New York</option>
                                                        <option value="3">Paris</option>
                                                        <option value="3">Moscow</option>
                                                        <option value="3">Dubai</option>
                                                        <option value="3">Sydney</option>
                                                        <option value="3">Mumbai</option>
                                                    </Form.Select>
                                                </div>
                                                <div className="main-search-input position-relative">
                                                    <MdDateRange className="input-icon" />
                                                    <input type="date" id="birthday" name="birthday" ></input>
                                                </div>
                                                <div className="search-home-btn">
                                                    <button className="d-flex justify-content-center align-items-center gap-2" type="">Search<FaSearch className="search-icon-tab" /></button>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="restaurant" title="RESTAURANTS" >
                                            <div className="place-tab-one d-flex align-items-center">
                                                <div className="main-search-input position-relative">
                                                    <FaHamburger className="input-icon" />
                                                    <input className="" type="text" placeholder="Restaurant Name"></input>
                                                </div>
                                                <div className="main-search-input position-relative">
                                                    <MdDateRange className="input-icon" />
                                                    <input type="datetime-local" id="birthdaytime" name="birthdaytime"></input>
                                                </div>
                                                <div className="main-search-input position-relative">
                                                    <FaUserFriends className="input-icon" />
                                                    <input type="number" id="quantity" placeholder="persons"></input>
                                                </div>

                                                <div className="search-home-btn">
                                                    <button className="d-flex justify-content-center align-items-center gap-2" type="">Search<FaSearch className="search-icon-tab" /></button>
                                                </div>
                                            </div>
                                        </Tab>
                                        <Tab eventKey="hotel" title="HOTELS" >
                                            <div className="place-tab-one d-flex align-items-center">
                                                <div className="main-search-input position-relative">
                                                    <FaHamburger className="input-icon" />
                                                    <input className="" type="text" placeholder="Hotel Name"></input>
                                                </div>
                                                <div className="main-search-input position-relative">
                                                    <FaUserFriends className="input-icon" />
                                                    <input type="number" id="quantity" placeholder="persons"></input>
                                                </div>
                                                <div className="main-search-input position-relative">
                                                    <MdDateRange className="input-icon" />
                                                    <input type="date" id="birthdaytime" name="birthdaytime" placeholder="Choose a Date"></input>
                                                </div>

                                                <div className="search-home-btn">
                                                    <button className="d-flex justify-content-center align-items-center gap-2" type="">Search<FaSearch className="search-icon-tab" /></button>
                                                </div>
                                            </div>
                                        </Tab>
                                    </Tabs>
                                </div>
                                <div className="hero-categories">
                                    <h4 className="hero-categories-title position-relative">Just looking around ? Use quick search by category :</h4>
                                    <ul className="list-unstyled d-flex justify-content-center align-items-center gap-5">
                                        <li><a href="#"><FaHamburger className="far" />Restaurants</a></li>
                                        <li><a href="#"><FaDollyFlatbed className="far" />Hotels</a></li>
                                        <li><a href="#"><MdOutlineShoppingBag className="far" />Shops</a></li>
                                        <li><a href="#"><FaDumbbell className="far" />Fitness</a></li>
                                        <li><a href="#"><FaCocktail className="far" />Events</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header-section-link">
                {showTopBtn1 && (
                    <span className="custom-scroll-link" href="#a"><MdKeyboardDoubleArrowDown className="down-aarow" onClick={goTobottom}/></span>
                )}
                </div>
            </div>

            {/* latest listings section */}
            <div className="latest-section">
                <div className="latest-sec-title">
                    <h2>The Latest Listings</h2>
                    <div className="latest-sec-subtitle">
                        <h1>Newest  Listings</h1>
                    </div>
                    <span className="section-separator"></span>
                    <p>Mauris ac maximus neque. Nam in mauris quis libero sodales eleifend. Morbi varius, nulla sit amet rutrum elementum.</p>
                </div>

                <div className="">

                    <Slider {...settings}>
                        <div className="px-2">
                            <div className="listing-box position-relative overflow-hidden">
                                <img className="list-box-img  w-100 object-fit-cover" src={img_one} alt="" />
                                <div className="list-card-box">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="list-card-title">
                                            <h4><a href="http://#">Shop in Aurora Center</a></h4>
                                            <div className="list-location">
                                                <a className="d-flex align-items-center gap-1" href="http://#"><MdLocationPin className="location-pin" /> 40 Journal Square Plaza, NJ,  USA</a>
                                            </div>
                                        </div>
                                        <div className="review-rating d-flex align-items-center gap-3">
                                            <div className="review-score">5.0</div>
                                            <div>
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <div className="review-count">2 Reviews</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item-footer d-flex justify-content-between align-items-center gap-2">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="green-bg listing-item-category d-flex justify-content-center align-items-center">
                                                <BiCartDownload className="list-item-icon" />
                                            </div>
                                            <span className="list-cate-name">Shopping</span>
                                        </div>
                                        <div className="list-cate-price">
                                            <span>$</span>
                                            <span>$</span>
                                            <span>$</span>
                                            <span>$</span>
                                        </div>
                                        <div className="post-author d-flex align-items-center gap-2">
                                            <img className="rounded-circle" src={author_one} alt="" />
                                            <span>By , Kliff Antony</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="favourite-icon-box position-absolute">
                                    <div className="favourite-icon position-relative d-flex justify-content-center align-items-center">
                                        <MdFavorite className="like-icon" />
                                        <span>Save</span>
                                    </div>
                                </div>
                                <div className="open-close-btn green-bg d-flex align-items-center gap-2">
                                    <RxLockOpen2 />Open Now
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="listing-box position-relative overflow-hidden">
                                <img className="list-box-img  w-100 object-fit-cover" src={img_two} alt="" />
                                <div className="list-card-box">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="list-card-title">
                                            <h4><a href="http://#">The Goggi Restaurant</a></h4>
                                            <div className="list-location">
                                                <a className="d-flex align-items-center gap-1" href="http://#"><MdLocationPin className="location-pin" />  34-42 Montgomery St , NY, USA</a>
                                            </div>
                                        </div>
                                        <div className="review-rating d-flex align-items-center gap-3">
                                            <div className="review-score">4.1</div>
                                            <div>
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-grey star-icon" />
                                                <div className="review-count">26 Reviews</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item-footer d-flex justify-content-between align-items-center gap-2">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="pink-bg listing-item-category d-flex justify-content-center align-items-center">
                                                <FaHamburger className="list-item-icon" />
                                            </div>
                                            <span className="list-cate-name">Restaurants</span>
                                        </div>
                                        <div className="list-cate-price">
                                            <span>$</span>
                                            <span>$</span>
                                            <span>$</span>
                                            <span>$</span>
                                        </div>
                                        <div className="post-author d-flex align-items-center gap-2">
                                            <img className="rounded-circle" src={author_two} alt="" />
                                            <span>By , Nasty Wood</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="favourite-icon-box position-absolute">
                                    <div className="favourite-icon position-relative d-flex justify-content-center align-items-center">
                                        <MdFavorite className="like-icon" />
                                        <span>Save</span>
                                    </div>
                                </div>
                                <div className="open-close-btn green-bg d-flex align-items-center gap-2">
                                    <RxLockOpen2 />Open Now
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="listing-box position-relative overflow-hidden">
                                <img className="list-box-img  w-100 object-fit-cover" src={img_three} alt="" />
                                <div className="list-card-box">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="list-card-title">
                                            <h4><a href="http://#">Gym in the Center</a></h4>
                                            <div className="list-location">
                                                <a className="d-flex align-items-center gap-1" href="http://#"><MdLocationPin className="location-pin" />  70 Bright St New York, USA</a>
                                            </div>
                                        </div>
                                        <div className="review-rating d-flex align-items-center gap-3">
                                            <div className="review-score">5.0</div>
                                            <div>
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <div className="review-count">7 Reviews</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item-footer d-flex justify-content-between align-items-center gap-2">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="blue-bg listing-item-category d-flex justify-content-center align-items-center">
                                                <FaDumbbell className="list-item-icon" />
                                            </div>
                                            <span className="list-cate-name">Fitness / Gym</span>
                                        </div>
                                        <div className="list-cate-price">
                                            <span>$</span>
                                            <span>$</span>
                                            <span>$</span>
                                            <span>$</span>
                                        </div>
                                        <div className="post-author d-flex align-items-center gap-2">
                                            <img className="rounded-circle" src={author_three} alt="" />
                                            <span>By , Mark Rose</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="favourite-icon-box position-absolute">
                                    <div className="favourite-icon position-relative d-flex justify-content-center align-items-center">
                                        <MdFavorite className="like-icon" />
                                        <span>Save</span>
                                    </div>
                                </div>
                                <div className="open-close-btn pink-bg d-flex align-items-center gap-2">
                                    <RxLockOpen2 />Closed Now
                                </div>
                            </div>
                        </div>
                        <div className="px-2">
                            <div className="listing-box position-relative overflow-hidden">
                                <img className="list-box-img  w-100 object-fit-cover" src={img_four} alt="" />
                                <div className="list-card-box">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="list-card-title">
                                            <h4><a href="http://#">Moonlight Hotel</a></h4>
                                            <div className="list-location">
                                                <a className="d-flex align-items-center gap-1" href="http://#"><MdLocationPin className="location-pin" /> 34-42 Montgomery St , NY, USA</a>
                                            </div>
                                        </div>
                                        <div className="review-rating d-flex align-items-center gap-3">
                                            <div className="review-score">4.2</div>
                                            <div>
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <FaStar className="text-yellow star-icon" />
                                                <div className="review-count">3 Reviews</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="list-item-footer d-flex justify-content-between align-items-center gap-2">
                                        <div className="d-flex align-items-center gap-2">
                                            <div className="yellow-bg listing-item-category d-flex justify-content-center align-items-center">
                                                <FaBed className="list-item-icon" />
                                            </div>
                                            <span className="list-cate-name">Hotels</span>
                                        </div>
                                        <div className="list-cate-price">
                                            <span>$</span>
                                            <span>$</span>
                                            <span>$</span>
                                            <span>$</span>
                                        </div>
                                        <div className="post-author d-flex align-items-center gap-2">
                                            <img className="rounded-circle" src={author_four} alt="" />
                                            <span>By , Nasty Wood</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="favourite-icon-box position-absolute">
                                    <div className="favourite-icon position-relative d-flex justify-content-center align-items-center">
                                        <MdFavorite className="like-icon" />
                                        <span>Save</span>
                                    </div>
                                </div>
                                <div className="open-close-btn green-bg d-flex align-items-center gap-2">
                                    <RxLockOpen2 />Open Now
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>

            {/* Explore The Best Citites */}

            <div className="explore-section position-relative w-100">
                <div className="latest-sec-title">
                    <h2>Explore Best Cities</h2>
                    <div className="latest-sec-subtitle">
                        <h1 className="">Catalog of Categories</h1>
                    </div>
                    <span className="section-separator"></span>
                    <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus.</p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-12 pt-4">
                            <div className="listing-box w-100 position-relative overflow-hidden">
                                <img className="list-box-img  w-100 object-fit-cover" src={explore_img_one} alt="" />
                                <div className="explore-title">
                                    <h4 className="position-relative"><a href="http://#">New York</a></h4>
                                    <p>Constant care and attention to the patients makes good record</p>
                                </div>
                                <div className="location-count">
                                    <p className="p-0 m-0 text-white"><span>16</span>Locations</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pt-4">
                            <div className="listing-box w-100 position-relative overflow-hidden">
                                <img className="list-box-img  w-100 object-fit-cover" src={explore_img_two} alt="" />
                                <div className="explore-title">
                                    <h4 className="position-relative"><a href="http://#">Paris</a></h4>
                                    <p>Constant care and attention to the patients makes good record</p>
                                </div>
                                <div className="location-count">
                                    <p className="p-0 m-0 text-white"><span>22</span>Locations</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pt-4">
                            <div className="listing-box w-100 position-relative overflow-hidden">
                                <img className="list-box-img  w-100 object-fit-cover" src={explore_img_three} alt="" />
                                <div className="explore-title">
                                    <h4 className="position-relative"><a href="http://#">Moscow</a></h4>
                                    <p>Constant care and attention to the patients makes good record</p>
                                </div>
                                <div className="location-count">
                                    <p className="p-0 m-0 text-white"><span>9</span>Locations</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-12 pt-4">
                            <div className="listing-box w-100 position-relative overflow-hidden">
                                <img className="list-box-img  w-100 object-fit-cover" src={explore_img_four} alt="" />
                                <div className="explore-title">
                                    <h4 className="position-relative"><a href="http://#">Rome</a></h4>
                                    <p>Constant care and attention to the patients makes good record</p>
                                </div>
                                <div className="location-count">
                                    <p className="p-0 m-0 text-white"><span>12</span>Locations</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-12 pt-4">
                            <div className="listing-box w-100 position-relative overflow-hidden">
                                <img className="list-box-img  w-100 object-fit-cover" src={explore_img_five} alt="" />
                                <div className="explore-title">
                                    <h4 className="position-relative"><a href="http://#">London</a></h4>
                                    <p>Constant care and attention to the patients makes good record</p>
                                </div>
                                <div className="location-count">
                                    <p className="p-0 m-0 text-white"><span>33</span>Locations</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="view-btn">
                        <button className="view-all-btn">View All Cities<TiArrowRightOutline className="btn-icon" /></button>
                    </div>
                </div>
            </div>


            {/* counter section count number */}

            <div className="counter-section" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="counter-box position-relative z-1">
                                <div className="counter-num" data-content="0" data-num="1440">1254</div>
                                <h4>New Visiters Every Week</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="counter-box position-relative z-1">
                                <div className="counter-num" data-content="0" data-num="1440">12168</div>
                                <h4>Happy customers every year</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="counter-box position-relative z-1">
                                <div className="counter-num" data-content="0" data-num="1440">2172</div>
                                <h4>Won Amazing Awards</h4>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-12">
                            <div className="counter-box position-relative z-1">
                                <div className="counter-num" data-content="0" data-num="1440">732</div>
                                <h4>New Listing Every Week</h4>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* Most popular places section */}

            <div className="most-place-section">
                <div className="latest-sec-title">
                    <h2>Most Popular Palces</h2>
                    <div className="latest-sec-subtitle">
                        <h1>Best Listings</h1>
                    </div>
                    <span className="section-separator"></span>
                    <p>Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.</p>
                </div>
                <div className="filter-select-btn d-flex justify-content-center align-items-center">
                    {/* <ul class="filter__section list-unstyled d-flex justify-content-center"> */}
                    <button value="All" onClick={handleBtns} className={activeBtn === "All" ? "active-tab" : ""}>All Categories</button>
                    <button value="restaurant" onClick={handleBtns} className={activeBtn === "restaurant" ? "active-tab" : ""}>Restaurant</button>
                    <button value="event" onClick={handleBtns} className={activeBtn === "event" ? "active-tab" : ""}>Event</button>
                    <button value="fitness" onClick={handleBtns} className={activeBtn === "fitness" ? "active-tab" : ""}>Fitness</button>
                    <button value="hotel" onClick={handleBtns} className={activeBtn === "hotel" ? "active-tab" : ""}>Hotel</button>
                    {/* </ul> */}
                </div>
                <div className="filter-box container">
                    {category.map((item) => (
                        <div className="cate-box-one" key={item.id}>
                            <div className="cate-place-img cate-img-wrap position-relative overflow-hidden">
                                <img className="w-100" src={item.linkImg} alt="hello" />
                                <div className="favourite-icon-box position-absolute">
                                    <div className="favourite-icon position-relative d-flex justify-content-center align-items-center">
                                        <MdFavorite className="like-icon" />
                                        <span>Save</span>
                                    </div>
                                </div>
                                <div style={{ backgroundColor: item.open_color, }} className="open-close-btn green-bg d-flex align-items-center gap-2">
                                    {item.openicon}{item.store}
                                </div>
                                <div className="review-rating d-flex align-items-center gap-3">
                                    <div className="review-score">{item.rating}</div>
                                    <div>
                                        <FaStar className="text-yellow star-icon" style={{ color: item.textyellow, }} />
                                        <FaStar className="text-yellow star-icon" style={{ color: item.textyellow, }} />
                                        <FaStar className="text-yellow star-icon" style={{ color: item.textgrey_two, }} />
                                        <FaStar className="text-yellow star-icon" style={{ color: item.textgrey, }} />
                                        <FaStar className="text-yellow star-icon" style={{ color: item.textgrey, }} />
                                        <div className="review-count">{item.review}</div>
                                    </div>
                                </div>
                                <div className="listing-avatar">
                                    <img src={item.profileimg} alt="" />
                                    <div className="avtar-detail d-flex align-items-center">
                                        <h4 className="m-0">Added By <span>Alisa Noory</span></h4>
                                    </div>
                                </div>
                            </div>
                            <div className="cate-box-title position-relative">
                                <div className="cate-title">
                                    <h3 className="m-0 d-flex align-items-center gap-3">{item.title} <span style={{ backgroundColor: item.righticon_bg, }}>{item.righticon}</span> </h3>
                                    <a className="d-flex align-items-center gap-2" href="#"><IoLocationOutline className="location-icon" /> {item.address}</a>
                                </div>
                                <div className="cate-text">
                                    <p className="m-0">{item.text}</p>
                                    <div className="facility-tab d-flex align-items-center gap-3">
                                        <h4 className="m-0">Facilities : </h4>
                                        <ul className="list-unstyled m-0 d-flex align-items-center gap-2">
                                            <li data-tooltip-id="my-tooltip-1"><FaWifi />
                                                <ReactTooltip className="tooltip-style" id="my-tooltip-1" place="top" variant="info" content="Free WiFi" />
                                            </li>
                                            <li data-tooltip-id="my-tooltip-2"><TbParking />
                                                <ReactTooltip className="tooltip-style" id="my-tooltip-2" place="top" variant="info" content="Parking" />
                                            </li>
                                            <li data-tooltip-id="my-tooltip-3"><FaSmokingBan />
                                                <ReactTooltip className="tooltip-style" id="my-tooltip-3" place="top" variant="info" content="No Smoking Rooms" />
                                            </li>
                                            <li data-tooltip-id="my-tooltip-4"><LiaDogSolid />
                                                <ReactTooltip className="tooltip-style" id="my-tooltip-4" place="top" variant="info" content="Pets Friendly" />
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="cate-footer d-flex justify-content-between align-items-center">
                                    <div className="footer-rest d-flex align-items-center gap-2">
                                        <div className=" footer-circle d-flex justify-content-center align-items-center" style={{ backgroundColor: item.rest_bg_color, fontSize: '20px' }}>
                                            {item.rest_icon}
                                        </div>
                                        <span>{item.category}</span>
                                    </div>
                                    <div className="footer-list">
                                        <ul className="m-o list-unstyled d-flex align-items-center gap-2">
                                            <li onClick={() => toggleActive(item.id)} data-tooltip-id="my-tooltip-5" id="open"><MdOutlineMail className="far" />
                                                <ReactTooltip className="tooltip-style" id="my-tooltip-5" place="top" variant="info" content="Contact Info" />
                                            </li>
                                            <li data-tooltip-id="my-tooltip-6"><MdOutlineLocationOn onClick={handleShow} className="far" />
                                                <ReactTooltip className="tooltip-style" id="my-tooltip-6" place="top" variant="info" content="On The map" />
                                            </li>
                                            <li data-tooltip-id="my-tooltip-7"><MdZoomIn className="far" />
                                                <ReactTooltip className="tooltip-style" id="my-tooltip-7" place="top" variant="info" content="Gallery" />
                                            </li>
                                        </ul>
                                    </div>
                                    {activeId === item.id && (
                                        <div className="contact-info-show position-absolute">
                                            <div className="contact-details position-relative">
                                                <ul className="m-0 list-unstyled">
                                                    <li><span><FaPhone className="footer-contact-icon" /> Call : </span><a href="http://#">+38099231212</a></li>
                                                    <li><span><MdOutlineMail className="footer-contact-icon" /> Write : </span><a href="http://#">yourmail@domain.com</a></li>
                                                </ul>
                                                <div className="footer-close position-absolute   d-flex justify-content-center align-items-center" onClick={() => setActiveId(false)}>
                                                    <IoCloseCircleOutline className="close-footer-btn" />
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>


                {/* <section>
        <div>
          <h2>React Filter</h2>
          <div>
            <button value="All" onClick={handleBtns}>All</button>
            <button value="Cars" onClick={handleBtns}>Cars</button>
            <button value="Views" onClick={handleBtns}>Views</button>
          </div>
 
          <div>
            {category.map((item) => (
              <div key={item.id}>
                <div>
                  <img src={item.linkImg} alt={item.name} />
                  <div>
                    <h1>{item.name}</h1>
                    <p>{item.kind}</p>
                     <p>{item.info} </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}



            </div>

            {/* section four image */}

            <div className="promo-video">
                <div className="promo-title text-center">
                    <h3>Aliquam erat volutpat interdum</h3>
                    <h2>Get ready to start your exciting journey. <br /> Our agency will lead you through the amazing digital world</h2>
                    <button className="d-flex align-items-center gap-3"><FaPlayCircle className="play-icon" />Promo Video</button>
                </div>



            </div>


            {/* how it works */}

            <div className="works-section">
                <div className="latest-sec-title">
                    <h2>How it works</h2>
                    <div className="latest-sec-subtitle">
                        <h1>Discover & Connect</h1>
                    </div>
                    <span className="section-separator"></span>
                    <p>Morbi varius, nulla sit amet rutrum elementum, est elit finibus tellus, ut tristique elit risus at metus.</p>
                </div>
                <div className="process-section position-relative">
                    <ul className="m-0 list-unstyled position-relative">
                        <li className="">
                            <div className="process-box position-relative">
                                <div className="process-title-icon d-flex justify-content-center">
                                    <MdOutlineLocationOn className="process-icon" />
                                </div>
                                <div className="process-title text-center mt-4">
                                    <h4>Find Interesting Place</h4>
                                    <p>Proin dapibus nisl ornare diam varius tempus. Aenean a quam luctus, finibus tellus ut, convallis eros sollicitudin turpis.</p>
                                </div>
                                <span className="process-count bg-white">01</span>
                            </div>
                            <span className="straight-line"></span>
                        </li>
                        <li>
                            <div className="process-box position-relative">
                                <div className="process-title-icon d-flex justify-content-center">
                                    <LiaMailBulkSolid className="process-icon" />
                                </div>
                                <div className="process-title text-center mt-4">
                                    <h4>Contact a Few Owners</h4>
                                    <p>Faucibus ante, in porttitor tellus blandit et. Phasellus tincidunt metus lectus sollicitudin feugiat pharetra consectetur.</p>
                                </div>
                                <span className="process-count bg-white">02</span>
                            </div>
                            <span className="straight-line"></span>
                        </li>
                        <li>
                            <div className="process-box ">
                                <div className="process-title-icon d-flex justify-content-center">
                                    <BiLayerPlus className="process-icon" />
                                </div>
                                <div className="process-title text-center mt-4">
                                    <h4>Make a Listing</h4>
                                    <p>Maecenas pulvinar, risus in facilisis dignissim, quam nisi hendrerit nulla, id vestibulum metus nullam viverra porta.</p>
                                </div>
                                <span className="process-count bg-white">03</span>
                            </div>
                        </li>
                    </ul>
                    <div className="">
                        <div className="process-end d-flex justify-content-center align-items-center">
                            <IoCheckmark className="check-icon" />
                        </div>
                    </div>
                </div>

            </div>


            {/* our app available now */}

            <div className="available-section position-relative overflow-hidden">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-12">
                            <div className="app-title">
                                <h3>Our App   Available Now</h3>
                                <p>In ut odio libero, at vulputate urna. Nulla tristique mi a massa convallis cursus. Nulla eu mi magna. Etiam suscipit commodo gravida. Lorem ipsum dolor sit amet, conse ctetuer adipiscing elit.</p>
                                <div className="app-btn-main d-flex gap-4 mt-4">
                                    <button className="m-0 down-btn position-relative text-center w-100"><IoLogoApple className="play-icon position-absolute" />App Store</button>
                                    <button className="m-0 down-btn position-relative text-center w-100"><DiAndroid className="play-icon position-absolute" />Play Store</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-12">
                            <div className="college-image position-relative text-center">
                                <img src={mob_img} className="main-mobile-img" alt="" />
                                <div className="img-title position-absolute">
                                    <img src={logo_img} alt="" />
                                </div>
                                <div className="green-bg d-flex align-items-center justify-content-center like-box rounded-circle">
                                    <AiOutlineLike className="text-white fs-4" />
                                </div>
                                <div className="coll-img-one col-pos-two position-absolute">
                                    <img className="rounded-circle" src={mobi_one} alt="" />
                                </div>
                                <div className="coll-img-one col-pos-one position-absolute">
                                    <img className="rounded-circle" src={mobi_two} alt="" />
                                </div>
                                <div className="book-box green-bg text-white position-absolute">Booking now</div>
                                <div className="input-text bg-white d-flex justify-content-between align-items-center position-absolute">Search<FaSearch className="search-icon m-0 fs-6" /></div>


                            </div>
                        </div>

                    </div>

                </div>
                <div className="bg-grad-color box-one"></div>
                <div className="bg-grad-color box-two"></div>
                <div className="circle-wrap cir-one position-absolute">
                    <div className="circle-bg-one circle-big"></div>
                </div>
                <div className="circle-wrap cir-two position-absolute">
                    <div className="circle-bg-one circle-small"></div>
                </div>
                <div className="circle-wrap cir-three position-absolute">
                    <div className="circle-bg-one circle-small"></div>
                </div>
                <div className="circle-wrap cir-four position-absolute">
                    <div className="circle-bg-one circle-small-two"></div>
                </div>
                <div className="circle-wrap cir-five position-absolute">
                    <div className="circle-bg-one circle-small"></div>
                </div>
                <div className="circle-wrap cir-six position-absolute">
                    <div className="circle-bg-one circle-small-two"></div>
                </div>

            </div>


            {/* testimonial section */}

            <div className="test-section">
                <div className="latest-sec-title">
                    <h2>Testimonilas</h2>
                    <div className="latest-sec-subtitle">
                        <h1>Clients Reviews</h1>
                    </div>
                    <span className="section-separator"></span>
                    <p>Maecenas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.</p>
                </div>
                <div className="slider-card-carousel">
                    <div className="slider-container">
                        <Slider {...setting}>
                            <div className="box-slider position-relative">
                                <div className="test-title text-center">
                                    <div className="listing-star text-center">
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                    </div>
                                    <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                                    <h3>Frank Dellov</h3>
                                    <h4>Hotel Owner</h4>
                                </div>
                                <div className="avtar-img-test">
                                    <img className="rounded-circle w-100" src={avtar_two} alt="" />
                                </div>
                            </div>
                            <div className="box-slider position-relative">
                                <div className="test-title text-center">
                                    <div className="listing-star text-center">
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                    </div>
                                    <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                                    <h3>Centa Simpson</h3>
                                    <h4>Restaurant Owner</h4>
                                </div>
                                <div className="avtar-img-test">
                                    <img className="rounded-circle w-100" src={avtar_three} alt="" />
                                </div>
                            </div>
                            <div className="box-slider position-relative">
                                <div className="test-title text-center">
                                    <div className="listing-star text-center">
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                    </div>
                                    <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                                    <h3>Linda Svensky</h3>
                                    <h4>Shop Owner</h4>
                                </div>
                                <div className="avtar-img-test">
                                    <img className="rounded-circle w-100" src={avtar_four} alt="" />
                                </div>
                            </div>
                            <div className="box-slider position-relative">
                                <div className="test-title text-center">
                                    <div className="listing-star text-center">
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                        <FaStar className="star-icon star-yellow" />
                                    </div>
                                    <p>"Vestibulum orci felis, ullamcorper non condimentum non, ultrices ac nunc. Mauris non ligula suscipit, vulputate mi accumsan, dapibus felis. Nullam sed sapien dui. Nulla auctor sit amet sem non porta. "</p>
                                    <h3>Andy Dimasky</h3>
                                    <h4>Restaurant Owner</h4>
                                </div>
                                <div className="avtar-img-test">
                                    <img className="rounded-circle w-100" src={avtar_one} alt="" />
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>

            </div>


            {/* client section logo image */}

            <div className="wave-section position-relative">
                <div className="wave-img position-absolute">

                </div>

            </div>
            <div className="client-detail">
                <div className="container">
                    <div className="slider-container">
                        <Slider {...settings}>
                            <div className="client-item">
                                <img src={client_one} alt="" />
                            </div>
                            <div className="client-item">
                                <img src={client_two} alt="" />
                            </div>
                            <div className="client-item">
                                <img src={client_three} alt="" />
                            </div>
                            <div className="client-item">
                                <img src={client_one} alt="" />
                            </div>
                            <div className="client-item">
                                <img src={client_two} alt="" />
                            </div>
                            <div className="client-item">
                                <img src={client_three} alt="" />
                            </div>
                            <div className="client-item">
                                <img src={client_one} alt="" />
                            </div>
                            <div className="client-item">
                                <img src={client_two} alt="" />
                            </div>
                            <div className="client-item">
                                <img src={client_three} alt="" />
                            </div>
                        </Slider>
                    </div>

                </div>

            </div>

            <div className="top-to-btm">
                {showTopBtn && (
                    <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
                )}
            </div>
            {/* model open */}

            <div className="maps-open-box" >
                <Modal show={show} onHide={handleClose} animation={false} className="maps-open-box" centered>
                    <Modal.Header closeButton>
                        <Modal.Title >
                            Location for : <span>Rocko Band in Marquee Club</span>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52808140.21705447!2d-161.46429918210544!3d36.11412792251988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sin!4v1713617400700!5m2!1sen!2sin" width="470" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Modal.Body>

                </Modal>
            </div>
        </div>
    );
}

export default Homebanner;







{/* <section>
<div>
    <div>
        <button value="All" onClick={handleBtns}>All</button>
        <button value="Cars" onClick={handleBtns}>Cars</button>
        <button value="Views" onClick={handleBtns}>Views</button>
    </div>

    <div className="d-flex">
        {category.map((item) => (
            <div key={item.id}>
                <div>
                    <img src={item.linkImg} width="300px" alt={item.name} />
                    <div>
                        <h1>{item.name}</h1>
                        <p>{item.kind}</p>
                        <p>{item.info} </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
</section> */}