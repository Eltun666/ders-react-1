import "./SectionNine.scss"
import { RiFacebookFill } from "react-icons/ri";
import { FaGooglePlusG } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

const SectionNine = () => {
  return (
    <section className="SectionNine">
      <div className="sec-nine-box">
      <div className="left-box">
        <div className="logo">
            <img src="https://preview.colorlib.com/theme/logistico/img/logo.png.webp" alt="" />
        </div>
        <div className="icone-boxs">
            <div className="icone">
            <RiFacebookFill />
            </div>
            <div className="icone-gogle icone">
            <FaGooglePlusG />
            </div>
            <div className="icone-twit icone">
            <FaTwitter />
            </div>
            <div className="icone-youtub icone">
            <TfiYoutube />
            </div>
        </div>
      </div>
      <div className="right-box">
        <div className="locadion-box">
            <div className="img-box">
                <img src="https://preview.colorlib.com/theme/logistico/img/icon/address.svg" alt="" />
                <h3>Location</h3>
            </div>
            <p>600/D, Kings road, Green lane NewYork-2563</p>
        </div>
        <div className="locadion-box">
            <div className="img-box">
                <img src="https://preview.colorlib.com/theme/logistico/img/icon/support.svg" alt="" />
                <h3>Location</h3>
            </div>
            <p>600/D, Kings road, Green lane NewYork-2563</p>
        </div>
      </div>
      </div>
    </section>
  )
}

export default SectionNine
