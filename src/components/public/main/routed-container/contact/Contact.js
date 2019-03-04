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
                <p><span>Phone number </span>: 908-798-0338</p>
                <br/>
                <p><span>Email</span>: Thomratz1906@gmail.com</p>
                <div className='social-medias'>
                <a target='_blank' rel='noopener noreferrer' href='https://www.instagram.com/thomratz/'>
                    <div className='insta-cont'>
                        <i className="fab fa-instagram"></i>
                    </div>
                </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://www.facebook.com/thomratz/'>
                        <div className='fb-cont'>
                            <i className="fab fa-facebook-f"></i>
                        </div>
                    </a>
                    <a target='_blank' rel='noopener noreferrer' href='https://twitter.com/thomratz'>
                        <div className='tw-cont'>
                            <i className="fab fa-twitter"></i>
                        </div>
                    </a>
                </div>
            </div>
        </div>

    )
}