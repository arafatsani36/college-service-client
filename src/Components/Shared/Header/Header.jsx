import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {
    const navItem = <>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/'>Colleges</Link></li>
        <li><Link to='/'>Admission</Link></li>
        <li><Link to='/'>My College</Link></li>
    </>


    return (
        <div className="navbar primary-bg primary-text">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu  dropdown-content mt-3 z-[1] p-2 primary-bg rounded-box w-52">
                {navItem}
            </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">College Service</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navItem}
            </ul>
        </div>
        <div className="navbar-end">
           <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        </div>
    );
};

export default Header;