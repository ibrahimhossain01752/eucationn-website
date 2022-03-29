import React from 'react';
import './AdmisionAid.css';
import { BsFillArrowUpRightSquareFill} from "react-icons/bs";
//import educationAid from './../../../../images/education333.webp';
import educationAid from './../../../../images/edu333 (1).jpg';
const AdmisionAid = () => {
    return (
        <div>
           <div class="row container">
           <div class="col-lg-6 col-md-6 col-sm-12 p-4">
                <h2>AdmissionAid</h2>
                <p class="para2"> <span class="span1">We prepare you to launch your carrer by providing a</span> <span class="span2">supportive, creative and professional environment</span> <span class="span3">from which to learn practical skills, build a network</span> <span class="span4">of  industry
                    connects.</span>
                    <button class="button1"> View Details<BsFillArrowUpRightSquareFill class="symbol1"></BsFillArrowUpRightSquareFill></button>
                </p>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 p-4">
               <div class="educationAid w-25 h-25">
               <img src={educationAid} className="banner" alt="..."/>
               </div>
            </div>
           </div>
        </div>
    );
};

export default AdmisionAid;