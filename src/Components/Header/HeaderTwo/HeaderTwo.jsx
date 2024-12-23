import "./headertwo.scss"
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FaBars } from "react-icons/fa";

const HeaderTwo = () => {
  return (
    <>
    <div className="border">
        <div className="headertwo">
        <nav>
            <ul className="ul">
                <li><a href="">Home</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">About</a></li>
                <li className="hoveli"><a href="">Pages<MdKeyboardArrowDown /></a>
                <div className="hovediv">
                    <ul>
                        <li><a href="">Service Details</a></li>
                        <li><a href="">Elements</a></li>
                    </ul>
                </div>
                </li>
                <li className="hoveli"><a href="">Blog<MdKeyboardArrowDown /></a>
                <div className="hovediv">
                    <ul>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Single-Blog</a></li>
                    </ul>
                </div>
                </li>
                <li><a href="">Contact</a></li>
            </ul>
        </nav>
        <div id="search-box" className="search-box">
        <IoMdSearch className="icone"/>
        </div>
    </div>
    </div>
    <div className="menu">
        <div className="menubox">
         <span>MENU <FaBars className="logo"/></span>
        </div>
    </div>
    </>
  )
}

export default HeaderTwo
