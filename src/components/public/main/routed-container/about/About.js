import React from 'react'
import './About.scss'
import aboutpic from '../../../../../assets/thom1.jpg'
import { TwitterTimelineEmbed} from 'react-twitter-embed';

export default function About(){
    return(
        <div className='about-whole-container'>
            <div className='header-container'>
                <div className='side-line'></div>
                <h1>About Thom</h1>
                <div className='side-line'></div>
            </div>    
            <div className='about-container'>
                <div className='about-split'>
                    <div className='left'>
                        <img src={aboutpic}/>
                        <br/>
                        <p>
                        BELIEVE IN THOM. He dives in combating masculine toxicity in today’s culture. He’s in a forever journey to find the line between every subject between free speech and mental illness. Follow him into the rabbit hole of love, loss and eternal confusion. STAY SAFE.
                        </p>
                    </div>
                    <div className='right'>
                        <i class="fab fa-twitter"></i>
                        <div className='twitter-cont'>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="thomratz"
                                options={{height: 400}}
                                />
                                
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}