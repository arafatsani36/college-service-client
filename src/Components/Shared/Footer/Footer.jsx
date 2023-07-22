import { Link } from "react-router-dom";
import './Footer.css'
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 primary-bg primary-text">
            <div className="grid grid-flow-col gap-4">
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/'>Colleges</Link></li>
                <li><Link to='/'>Admission</Link></li>
                <li><Link to='/'>My College</Link></li>   
            </div> 
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a><FaFacebookF></FaFacebookF></a> 
                    <a><FaInstagram></FaInstagram></a> 
                    <a><FaYoutube></FaYoutube></a>
                </div>
            </div> 
            <div>
                <p>Copyright © 2023 - All right reserved by College Service</p>
            </div>
            </footer>
    );
};

export default Footer;