import React from 'react'
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { AiOutlineBank } from "react-icons/ai";
import { FcFactory,FcAdvertising } from "react-icons/fc";
import { FaHospitalSymbol,FaBroadcastTower,FaHandsHelping,FaTruckMoving } from "react-icons/fa";

function Industrycon() {
    return (
        <div className="industry">

       
        <div className='industry-con'>
            <div className="con1">
                <h2>INDUSTRY expertise</h2>
                <p>We’ve exceled our experience in a wide range of industries to bring valuable insights and provide our customers with the truly beneficial solutions.</p>
            </div>
            <div className="con-2">
                <ul>
                    <div>
                        <p><HiOutlineDesktopComputer /></p>
                        <h5>IT/Software</h5>
                    </div>
                    <div>
                        <p><AiOutlineBank /></p>
                        <h5>Banking</h5>
                    </div>
                    <div>
                        <p><FcFactory /></p>
                        <h5>Manufacturing</h5>
                    </div>
                    <div>
                        <p><FaHospitalSymbol /></p>
                        <h5>Health Care</h5>
                    </div>
                    <div>
                        <p><FaBroadcastTower /></p>
                        <h5>TeleCommunication</h5>
                    </div>
                    <div>
                        <p><FaTruckMoving /></p>
                        <h5>Logistics and Transportation</h5>
                    </div>
                    <div>
                        <p><FaHandsHelping /></p>
                        <h5>Insurance</h5>
                    </div>
                    <div>
                        <p><FcAdvertising /></p>
                        <h5>Advertising</h5>
                    </div>
                </ul>
            </div>
         </div>
        </div>
    )
}

export default Industrycon
