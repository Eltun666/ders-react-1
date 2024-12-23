import "./headerOne.scss"
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

const HeaderOne = () => {
  return (
        <div className="headerone">
            <div className="logo-box">
                <img src="https://preview.colorlib.com/theme/logistico/img/logo.png.webp" alt="" />
            </div>
            <div className="text-box">
                <div className="email-box">
                <MdEmail className="email-logo"/>
                <span>info@docmed.com</span>
                </div>
                <div className="number-box">
                <FaPhoneAlt className="number-logo"/>
                <span>1601-609 6780</span>
                </div>
                <div className="btn-box">
                    <button>Get Free Quote</button>
                </div>
            </div>
        </div>
  )
}

export default HeaderOne
