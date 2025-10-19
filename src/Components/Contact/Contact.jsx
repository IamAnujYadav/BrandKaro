import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "277b4436-eb12-4d3a-b8c8-a19ac6c86c28");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        })    
          const data = await response.json();

          if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
          } else {
            console.log("Error", data);
            setResult(data.message);
          }
        };

        return (
            <div className='contact'>
                <div className="contact-col">
                    <h3>Write the Diwali message <img src={msg_icon} alt="" /></h3>
                    {/* <p>Got a project in mind, a question about our services, or just want to say hello? We'd love to hear from you! Reach out to us, and a member of the Brandkaro team will get back to you shortly.</p> */}
                    <ul>
                        <li> <img src={mail_icon} alt="" />brandKaro.email@gmail.com</li>
                        <li><img src={phone_icon} alt="" />+91 9236228554</li>
                        <li><img src={location_icon} alt="" />Rajasthan,jaipur</li>
                    </ul>
                </div>
                <div className="contact-col">
                    <form onSubmit={onSubmit}>
                        <label>Your name</label>
                        <input type="text" name='name' placeholder='Enter your name' required />
                        <label>Phone number</label>
                        <input type="tel" name='phone' placeholder='Enter your phone number' required />
                        <label>Write your message here</label>
                        <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
                        <button type='submit ' className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                    </form>
                    <span>{result}</span>
                </div>
            </div>
        )
    }

    export default Contact