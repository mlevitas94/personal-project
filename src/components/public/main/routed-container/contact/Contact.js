import React from 'react'
import './Contact.scss'

export default function Contact(){
    return(
        <div className='whole-contact-container'>
            <div className='header-container'>
                <div className='side-line'></div>
                <h1>Contact Information</h1>
                <div className='side-line'></div>
            </div>
            <div className='contact-container'>
                <p className='first-contact'>If you would like to feature THOM to showcase any of his services, please use the contact information used below.</p>
                <br/>
                <p>Phone number: 908-798-0338</p>
                <p>Email: Thomratz1906@gmail.com</p>
                <div className='social-medias'>
                    <div>
                        <i class="fab fa-instagram"></i>
                    </div>
                    <div className='fb-cont'>
                        <i class="fab fa-facebook-f"></i>
                    </div>
                    <div>
                        <i class="fab fa-twitter"></i>
                    </div>
                </div>
            </div>
        </div>

    )
}