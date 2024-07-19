import "./Header.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../Asset/Images/logo.png';
import { IoSearchOutline, IoLocationOutline, IoMenu, IoHeartOutline, IoLogInOutline } from "react-icons/io5";
import { FaSearchLocation, FaKeyboard, FaSearch, FaUserAlt, FaSignInAlt, FaUserPlus } from "react-icons/fa";
import { MdArrowDropDown, MdOutlinePlaylistAdd } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";
import { BiWorld } from "react-icons/bi";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function Header() {
    const [show, setShow] = useState(false);
  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const [signin, setShow2] = useState(false);


    const [isOpen, setIsOpen] = useState(false);
  
    function toggle() {
      setIsOpen(!isOpen);
    }
    

   
  

  
    
  return (
    <div className="App">
        {/* headr bar */}
        <div className="header-menu position-relative z-1">
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home"><img className="logo-image" src={logo} alt="Logo" /></Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                <Nav.Link className="search-menu justify-content-lg-center d-flex align-items-center" onClick={() => setShow(true)} href="#link">< IoSearchOutline className="search-icon" /><span className="position-relative" >search</span></Nav.Link>
                                <NavDropdown title="Home" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Parallax Image</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Slider</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Slidershow</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Video</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Map</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">RTL Version</NavDropdown.Item>
                                  </NavDropdown>
                                  
                                  <NavDropdown title="Listings" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Column Map</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Column Map 2</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Fullwidth Map</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Fullwidth Map 2</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Without Map</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Without Map 2</NavDropdown.Item>                                       
                                            <div className="second-drop-menu">
                                            <NavDropdown title="Single" id="basic-nav-dropdown">
                                            <NavDropdown.Item href="#action/3.1">Style 1</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.2">Style 2</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Style 3</NavDropdown.Item>
                                            <NavDropdown.Item href="#action/3.3">Style 4</NavDropdown.Item>
                                            </NavDropdown>
                                            </div>
                                  </NavDropdown>
                                  <Nav.Link href="#link">News</Nav.Link>
                                  <NavDropdown title="Pages" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Shop</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">About</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Contacts</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">User Single</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">How it Works</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Booking</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Price</NavDropdown.Item>
                                  </NavDropdown>
                                </Nav>
                                

                                <div className="bg-sky-blue align-items-center z-1">
                                    <div className="header-two d-flex align-items-center">
                                        <div className="lang-data position-relative ">
                                            <label className="contry-icon position-absolute"><BiWorld /></label>
                                            <label className="down-icon position-absolute"><MdArrowDropDown /></label>
                                            <Form.Select className="w-100" aria-label="Default select example">
                                                <option>En</option>
                                                <option value="1">Fr</option>
                                                <option value="2">Ger</option>
                                                <option value="3">chin</option>
                                            </Form.Select>
                                        </div>  
                                        <div className="d-flex align-items-center gap-2">
                                          <Button className="sign-in-btn d-flex align-items-center gap-2" variant=""  onClick={handleShow2}><FaUserAlt className="user-sign-in" />Sign In</Button>
                                          <div className="like-btn text-center position-relative" id='add'>
                                              <IoHeartOutline className="like-icon "  onClick={toggle} />
                                              
                                          </div>
                                          </div>                              
                                    </div>                              
                                    <Button className="add-list-btn d-flex align-items-center gap-2" variant="">Add Listing<MdOutlinePlaylistAdd className="add-list-icon" /></Button>
                                </div>
                            </Navbar.Collapse>
                </Container>
            </Navbar>


            {/* search modal box */}
            
            <div className="search-box-open"> 

                <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" className="search-box-modal" aria-labelledby="example-custom-modal-styling-title">
                   
                    <Modal.Body>
                       
                        <div className="header-search-bar position-relative d-flex justify-content-center align-items-center">
                                <FaSearchLocation className="modal-search-icon position-absolute" />
                            <div className="modal-input-data-main d-flex flex-lg-nowrap flex-wrap align-items-center gap-3">
                                <div className="data-input position-relative w-100">
                                    <label className="key-icon position-absolute"><FaKeyboard /></label>
                                    <input type="text" placeholder="What are you looking for ?"></input>
                                </div>
                                <div className="data-input position-relative w-100">
                                    <label className="key-icon position-absolute"><IoLocationOutline /></label>
                                    <input type="text" placeholder="Location..."></input>
                                </div>
                                <div className="data-input position-relative w-100">
                                    <label className="key-icon position-absolute"><IoMenu /></label>
                                    <Form.Select className="w-100" aria-label="Default select example">
                                        <option>All Categories</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </div>
                                <div className="w-100 ">
                                    <button className="search-header-btn d-flex justify-content-center align-items-center gap-2"><FaSearch />Search</button>
                                </div>                                
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

            </div>

            {/* sign in modal */}
            <div className="sign-in-modal-box">
                   

                 <Modal show={signin} onHide={handleClose2} className="sign-in-modal" centered>
                     <Modal.Header  closeButton>
                       <Modal.Title>Welcome to <span>TOWN</span>HUB<span>.</span></Modal.Title>
                     </Modal.Header>
                     <Modal.Body>
                        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
                            <Tab  eventKey="home"   title={<span><FaSignInAlt className="icon-register me-2" />Login</span>}>
                                
                            <Form className="sign-in-data">
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                  <Form.Label>Username or Email Address*</Form.Label>
                                  <Form.Control type="email" placeholder="" autoFocus/>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                    <Form.Label>Password*</Form.Label>
                                    <Form.Control type="password" placeholder="" />
                                </Form.Group>
                                <Button variant="" className="login-modal-btn position-relative text-white d-flex align-items-center gap-3" onClick={handleClose2}>
                                  Log In<IoMdArrowDropright className="arrow-right" />
                                </Button>
                             
                            </Form>
                            <div className=" d-flex justify-content-between align-items-center">
                                    <div>   {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className=" mt-3">
                                                <Form.Check
                                                  inline
                                                  label="Remember me"
                                                  name="group1"
                                                  type={type}
                                                  id={`inline-${type}-1`}
                                                /></div> 
                                                ))}
                                    </div>
                                    <div className="lost-password mt-3">
                                        <a href="#">Lost Your Password?</a>
                                    </div>
                            </div>                         
                            </Tab>
                            <Tab eventKey="profile"   title={<span><FaUserPlus className="icon-register me-2" />Register</span>}>

                                    <Form className="sign-in-data">
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                          <Form.Label>Full Name*</Form.Label>
                                          <Form.Control type="text" placeholder="" autoFocus/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                          <Form.Label>Email Address*</Form.Label>
                                          <Form.Control type="email" placeholder="" autoFocus/>
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
                                            <Form.Label>Password*</Form.Label>
                                            <Form.Control type="password" placeholder="" />
                                        </Form.Group>
                                        <div>   {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className=" mt-3">
                                                <Form.Check
                                                  inline
                                                  name="group1"
                                                  type={type}
                                                  id={`inline-${type}-1`}
                                                  />
                                                  <label className="form-check-label">I agree to the <a href="#">Privacy Policy</a></label>
                                                </div> 
                                                ))}
                                        </div>
                                        <div>   {['checkbox'].map((type) => (
                                                <div key={`inline-${type}`} className=" mt-3">
                                                <Form.Check
                                                  inline
                                                  name="group1"
                                                  type={type}
                                                  id={`inline-${type}-1`}
                                                />
                                                  <label className="form-check-label">I agree to the <a href="#">Terms & Conditions</a></label>
                                                </div> 
                                                ))}
                                        </div>

                                        <Button variant="" className="login-modal-btn position-relative text-white d-flex align-items-center gap-3 mt-4" onClick={handleClose2}>
                                          Register <IoMdArrowDropright className="arrow-right" />
                                        </Button>
                                    </Form>
                               


                            </Tab>
                        </Tabs>


                         
                     </Modal.Body>
                         <Modal.Footer>                           
                             <div className="log-seprator position-relative d-flex justify-content-center align-items-center my-4">
                                <span>OR</span>
                            </div>
                            <div className="facebook-login">
                                <p className="text-center">For faster login or register use your social account.</p>
                                <button className="fb-btn w-100 text-white text-center" type="">Facebook</button>
                            </div>
                             <div className="wave-bg">
                                <div className="wave -one">

                                </div>
                                <div className="wave -two">

                                </div>

                             </div>
                         </Modal.Footer>
                 </Modal>


            </div>

            {/* like button open */}
            { isOpen ? <div className="like-box-open" id=''>



            </div> : ""
            }

                {/* <div className={!isOpen ? "active" : "like-box-open"} >
                         
                    </div> */}


        </div>



    </div>
  );
}

export default Header;
