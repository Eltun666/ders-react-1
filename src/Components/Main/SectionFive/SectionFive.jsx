import './sectionFive.scss'
import { TfiArrowCircleDown } from "react-icons/tfi";

const SectionFive = () => {
  return (
    <section className='sectionFive'>
       <div className="boxs">
        <div className="imgbox">
            <img src="https://preview.colorlib.com/theme/logistico/img/about/about.png.webp" alt="" />
            <div className="color"></div>
        </div>
        <div className="textboxx">
            <h2>Why Choose Us?</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
            <ul>
                <li><a href="">Apartments frequently or motionless.</a></li>
                <li><a href="">Duis aute irure dolor in reprehenderit in voluptate.</a></li>
                <li><a href="">Voluptatem quia voluptas sit aspernatur.</a></li>
            </ul>
            <button>About Us</button>
        </div>
       </div>
    </section>
  )
}

export default SectionFive
