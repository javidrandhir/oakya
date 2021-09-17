import React from 'react'
import vision from '../images/vision.jpg';
import mission from '../images/mission.jfif';
import values from '../images/values.jpg'

function Maindown() {
    return (
        <div className='main-down'>
            <div className="down1">
                <h3>About Company</h3>
                <p className='underline'></p>
                <p>
This does not happen by coincidence and at OAKYA we are passionate about
 playing a role in making these connections. We believe that by investing in people we are investing in the success of our clients.</p>
<p>With our combined industry knowledge and years of experience working with people across the technology sector, we can help you make the right connection.</p>
            </div>
            <h3 className='card-title'>Our Companys :</h3>
            <div className="cards">
            <div className='çontainer'>
                <div className="card">
                   <div className="box">
                        <img src={vision} alt="vision of oakya" />
                   </div>
                   <div className="details">
                       <h2>Vision</h2>
                       <p>Our mission is to enhance business growth of our customers with creative design, development and to deliver market defining high quality solutions that create value
                         and reliable competitive advantage to customers around the globe.</p>
                   </div>
                </div>
               
               
            </div>
            <div className='çontainer'>
                <div className="card">
                   <div className="box">
                        <img src={mission} alt="vision of oakya" />
                   </div>
                   <div className="details">
                       <h2>mission</h2>
                       <p>To be a globally preferred business process transformation partner for our clients, creating value in their business through innovative outsourcing solutions.</p>
                   </div>
                </div>
               
               
            </div>
            <div className='çontainer'>
                <div className="card">
                   <div className="box">
                        <img src={values} alt="vision of oakya" />
                   </div>
                   <div className="details">
                       <h2>values</h2>
                       <p>Our employees, our clients, and their customers are at the heart of everything we do.

</p>
                   </div>
                </div>
               
               
            </div>
            </div>
            
        </div>
    )
}

export default Maindown
