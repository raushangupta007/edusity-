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

        formData.append("access_key", "58b09538-0006-4bfa-ae9d-07f96d7e2758");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

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
            <div className='contact-col'>
                <h3>Send us a message <img src={msg_icon} /> </h3>
                <p>Feel free to reach out through contact form or find our contact information below. Your feedback, questions, and suggestions are important to us as we strive to provide exceptional service to our university community.</p>
                <ul>
                    <li> <img src={mail_icon} /> Contact @educity.com</li>
                    <li> <img src={phone_icon} /> +1123-456-7890</li>
                    <li> <img src={location_icon} /> 77 Massachusetts Ave, Cambridge
                        MA 02139, United States</li>
                </ul>
            </div>
            <div className='contact-col'>
                <form onSubmit={onSubmit}>
                    <label>Your name</label>
                    <input type='text' name='name' placeholder='Enter your name' required />
                    <label>Phone Number</label>
                    <input type='tel' name='phone' placeholder='Enter Your mobile number' required />
                    <label>Write your message here</label>
                    <textarea name='message' rows="10" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Sumbit now <img src={white_arrow} /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact