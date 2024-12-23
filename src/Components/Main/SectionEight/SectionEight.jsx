import "./SectionEight.scss"

const SectionEight = () => {
  return (
    <section className='SectionEight'>
      <div className="sec-eight-color">
        <div className="left-box">
            <h4>Get free Estimate</h4>
            <p>Esteem spirit temper too say adieus who direct esteem. It look estee luckily or picture placing.</p>
            <button className="btn">+10 672 457 356</button>
        </div>
        <div className="right-box">
            <form action="">
                <div className="inp-box">
                    <input type="text" placeholder="Your name" className="name"/>
                    <input type="text" placeholder="Email" className="email"/>
                </div>
                <div className="selec-box">
                    <select>
                        <option value="">Product type</option>
                        <option value="">small</option>
                        <option value="">standart</option>
                        <option value="">high</option>
                    </select>
                    <select>
                        <option value="">Product size</option>
                        <option value="">M</option>
                        <option value="">L</option>
                        <option value="">Xl</option>
                    </select>
                </div>
                <div className="selec-box">
                    <select>
                        <option value="">City of separture</option>
                        <option value="">departure</option>
                        <option value="">departure</option>
                        <option value="">departure</option>
                    </select>
                    <select>
                        <option value="">City of Departure</option>
                        <option value="">Deliveriy</option>
                        <option value="">Deliveriy</option>
                        <option value="">Deliveriy</option>
                    </select>
                </div>
                <div className="massage-and-btn-box">
                    <textarea placeholder="Message"></textarea>
                    <button>Send Estimate</button>
                </div>
            </form>
        </div>
      </div>
    </section>
  )
}

export default SectionEight
