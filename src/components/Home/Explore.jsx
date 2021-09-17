import React from 'react'
import call1 from '../images/call1.jpg'
import call2 from '../images/call2.jpg'
import call3 from '../images/call3.jpg'
import call4 from '../images/call4.jpg'
import call5 from '../images/call5.jpg'
import call6 from '../images/call6.jpg'




function Explore() {
  
    return (
        <div className='explore'>
            <div className="explore-heading">
<h3>Explore our Services</h3>
            </div>
           <div className="explore-services">
               <div className="service">
                   <div className="icon">
                       <img src={call1} alt="callImage" />
                   </div>
                   <h3>INBOUND CUSTOMER</h3>
                   <p>OAKYA SOLUTIONS offers 24/7 customer support and inbound call center outsourcing services. Hence now we shall not let you miss your important business calls, as the responsibility of satisfying your</p>
               </div>
               <div className="service">
                   <div className="icon">
                       <img src={call2} alt="callImage" />
                   </div>
                   <h3>OUTBOUND CUSTOMER</h3>
                   <p>we provide outbound call center services which comprises of an innovative call center setup,equipped with all the latest tools, which enable us to make successful marketing calls for your products and services.  </p>
               </div>
               <div className="service">
                   <div className="icon">
                       <img src={call3} alt="callImage" />
                   </div>
                   <h3>FINANCE & ACCOUNTING</h3>
                   <p>We keep ourselves abrest of the changes in accounting rules,financial regulation and compliance policies. By routinely tracking the latest policy developments.</p>
               </div>
               <div className="service">
                   <div className="icon">
                       <img src={call4} alt="callImage" />
                   </div>
                   <h3>Live Chat</h3>
                   <p>We offer cost-effective live chat services to customers around the globe.Our comprehensive live chat provides personalised customer service for various technical and non-technical products and services.</p>
               </div>
               <div className="service">
                   <div className="icon">
                       <img src={call5} alt="callImage" />
                   </div>
                   <h3>CAMPAIGN MANAGEMENT</h3>
                   <p>Essentially, campaign managemt is the planning, tracking analysis and execution of all the factors involved in a standard marketing activites. These activities can be used to lauch a new product or event.</p>
               </div>
               <div className="service">
                   <div className="icon">
                       <img src={call6} alt="callImage" />
                   </div>
                   <h3>TECH SUPPORT & DITITAL ANALYTICS</h3>
                   <p>we are technical support centers & outsourcing has a long since evolved from simple call handling to business process reeengineering.It helps in expanded to the integrated services.</p>
               </div>
           </div>

        </div>
    )
}

export default Explore
