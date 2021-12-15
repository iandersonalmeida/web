import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import {useNavigate} from 'react-router-dom';


//This component is the header of the page. In the header is the header to indicate the header of the
//page. a navagation bar is added to the header, so I have a navagation header. 
//In the container-fluid was added a button that will show or hide the content (data-bs-toggle="collapse")
//A <div> is open to create a sidebar navigation menu (the content)
//

class HeaderComponent extends Component {
    
        render() {
       
        return (
                <header> 
                    <nav className="navbar navbar-dark bg-dark">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/web">Iânderson de Almeida</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                             data-bs-target="#offcanvasNavbar" >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar">
                            <div className="offcanvas-header">
                                <h5 className="offcanvas-title">Iânderson</h5>
                                 <button className="btn-close text-reset" data-bs-dismiss="offcanvas" ></button>
                            </div>
                          
                            <div className="offcanvas-body">
                                <ul className="nav flex-column justify-content-end flex-grow-1 pe-3">
                                    <li className="nav-item">
                                        <a className="nav-link active text-dark" href="/web">Home</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link text-dark" href="about">About me</a>
                                    </li>                                   

                                    <li className="nav-item">
                                        <a className="nav-link text-dark" href="portfolio">Portfolio</a>
                                    </li>

                                    <li className="nav-item">
                                        <a className="nav-link active text-dark" href="contact">Contact</a>
                                    </li>

                                </ul>

                            </div>

                        </div>
                    </nav>                   
                </header>          
        );
    }
}

export default HeaderComponent;