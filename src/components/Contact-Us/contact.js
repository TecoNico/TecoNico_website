import React from 'react';
import  { FaMapMarkerAlt } from 'react-icons/fa';
import  { FaPhoneAlt } from 'react-icons/fa';
import  { FaMailBulk } from 'react-icons/fa';
/* import image from "../../Assets/image.png";*/
import "./contact.css";

const contact = () => {
    return (
        <div className="contact">
     
            <div className="content">
             <h2 align="center">Contact Us</h2>
                <p> We at TecoNico Pvt. Ltd. try our best to solve modern-day problems
            with smart solutions using advanced technology. Our main tools are
            AI and ML technology that provides the effortless result with utmost
            accuracy.We provide different technologies in both hardware and
            software solutions. Our main aim to provide best of best products
            and services to clients.Quality is the only thing by which TecoNico
            is alive. Our team follow passion in their work, support in the team
            work, professionalism with clients.</p>
            </div>
            <div className="container">
                <div className="contactinfo">
                   <div className="box">
                       <div className="icon">
                       <FaMapMarkerAlt/>
                       </div>
                       <div className="text">
                           <h3>Address</h3>
                           <p>Delhi , India</p>
                       </div>
                       <div className="box">
                       <div className="icon">
                       < FaMailBulk />
                       </div>
                       <div className="text">
                           <h3>Email</h3>
                           <p>xyz@gmail.com</p>
                       </div>
                       </div>
                       <div className="box">
                       <div className="icon">
                      <FaPhoneAlt/>
                       </div>
                       <div className="text">
                           <h3>Phone</h3>
                           <p>8739387394</p>
                       </div>
                       </div>
                   </div>
                   <div className="contactform">
                       <form><label>
                           <h2>Send Message</h2>
                           </label>
                           <div className="inputbox">
                           <label>
                               <input type="text" name="" required="required" />
                                   <span>Full Name</span>
                                   </label>
                           </div>
                           <div className="inputbox">
                           <label>
                               <input type="text" name="" required="required" />
                                   <span>Email</span>
                                   </label>
                           </div>
                           <div className="inputbox">
                               <label>
                               <textarea  required="required"></textarea>
                               <span>Type Your Message...</span>
                               </label>
                           </div>
                           <div className="inputbox">
                               <input type="submit" name="" value="Send"/>
                           </div>
                       </form>
                   </div>
                </div>
            </div>
            </div>
    )
}

export default contact
