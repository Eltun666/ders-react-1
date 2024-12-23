import "./FooterOne.scss"

const FooterOne = () => {
  return (
    <div className='footerOne'>
        <div className="foot-box">
        <div className="text-boxs-foot">
          <div className="text-box-foot">
            <h4>Services</h4>
            <ul>
              <li><a href="">Air Transportation</a></li>
              <li><a href="">Ocean Freight</a></li>
              <li><a href="">Ocean Cargo</a></li>
              <li><a href="">Logistics</a></li>
              <li><a href="">Warehouse Moving</a></li>
            </ul>
          </div>
          <div className="text-box-foot textboxfoot">
            <h4>Company</h4>
            <ul>
              <li><a href="">About</a></li>
              <li><a href="">News</a></li>
              <li><a href="">Testimonials</a></li>
              <li><a href="">Why Us?</a></li>
            </ul>
          </div>
          <div className="text-box-foot">
            <h4>Industries</h4>
            <ul>
              <li><a href="">Chemicals</a></li>
              <li><a href="">Automotive</a></li>
              <li><a href="">Consumer Goods</a></li>
              <li><a href="">Life Science</a></li>
              <li><a href="">Foreign Trade</a></li>
            </ul>
          </div>
        </div>
        <div className="inp-foot-box">
          <h3>Subscribe</h3>
          <form action="">
            <input type="text" placeholder="Enter your mail"/>
            <button>Subscribe</button>
          </form>
          <p>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
        </div>
        </div>
    </div>
  )
}

export default FooterOne

