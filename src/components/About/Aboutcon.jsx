import React from 'react'
import collage from '../images/collage.png'
import admin from '../images/admin.png'

function Aboutcon() {
    return (
        <div className='about-con'>
            <div className="about-left">
               
               <img src={collage} alt="" />
            </div>
            <div className="about-right">
                <div className='manager'>
       <img src={admin} alt="" />
       <h3>Hema ramreddy Kommareddy <span>_ MD & Founder</span></h3>
       <p>Oakya Solutions Pvt Ltd</p>
                </div>
                <p>This does not happen by coincidence and at OAKYA we are passionate about playing a role in making these connections. We believe that by investing in people we are investing in the success of our clients.
                    <br />With our combined industry knowledge and years of experience working with people across the technology sector, we can help you make the right connection. We work to achieve this through adherence to several key values:
                </p>
             <div className="people">

                 <h3>People </h3>
                 <p>Our passion is people. There are many components required for achieving success in business, but none of them work without the right people. Building the right team is a critical first step toward developing and delivering successful solutions to complex business problems.</p>
             </div>
             <div className="planning">
                    <h3>planning </h3>
                    <p>Our team of professionals bring a unique and dynamic perspective on what it takes to build a team and deliver results. Combining years of industry knowledge with an extensive network of partners and professionals, we can collaborate with you to quickly assess, identify, and deliver viable team resourcing and professional services to help achieve your goals.</p>
             </div>
             <div className="passion">
                 <h3>Passion</h3>
                 <p>Our team of professionals bring a unique and dynamic perspective on what it takes to build a team and deliver results. Combining years of industry knowledge with an extensive network of partners and professionals, we can collaborate with you to quickly assess, identify, and deliver viable team resourcing and professional services to help achieve your goals.</p>
             </div>
            </div>
        </div>
    )
}

export default Aboutcon
