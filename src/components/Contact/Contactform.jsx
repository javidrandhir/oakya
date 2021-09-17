import React from 'react'
import { GrSend } from "react-icons/gr";
import { VscCallIncoming } from "react-icons/vsc";
import { IoMdLocate,IoIosMail } from "react-icons/io";

function Contactform() {
    return (
    <>
     <div className='contact-form' >
    <div className="contact-left">
        <div className="left1">
            <h3>Oakya Solutions</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione!</p>
        </div>
        <div className="left2">
            <h5><span><IoMdLocate /></span> adress :</h5>
            <p>
                
Door no :8-334/1, MKR enclave, 4th floor, Pantakalva Road,vijayawada
            </p>
        </div>
        <div className="left3">
            <h5><span><VscCallIncoming /></span> Dial us :</h5>
            <p>
+91 9000285555</p>
        </div>
        <div className="left4">
            <h5><span><IoIosMail /></span> General Support</h5>
            <p>
info@oakyasolutions.com</p>
        </div>
    </div>
       
            <form action="">
                <h2>Contact Us</h2>
                <div className="form-in">
                    <label htmlFor="Name">Your Name :</label>
                    <input type="text" placeholder='Name'/>
                </div>
                <div className="form-in">
                    <label htmlFor="email">Your Email :</label>
                    <input type="email" placeholder='email'/>
                </div>
                <div className="form-in">
                    <label htmlFor="mobile">Your Mobile num :</label>
                    <input type="text" placeholder='91+'/>
                </div>
                <div className="form-in">
                   <textarea placeholder='Write your message .....' cols='30' rows='7'></textarea>
                </div>
                <div className="button">
                    <button className='form-btn' type='sumit'>Send <span><GrSend /></span></button>
                </div>

            </form>
        </div>
    </>
    )
}

export default Contactform
