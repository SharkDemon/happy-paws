import React from 'react';
import { Link } from 'react-router-dom';

const landing = () => {
    return (
        <section>
            <h3 className='landingText'>An App made for dogs transportation!</h3>
            <div id='buttonContainer'>
                <Link
                    style={{ textDecoration: 'none', color: '#FFD700' }}
                    id='startButton'
                    to='/home'>Click to transport!
                </Link>
            </div>
            <p id='landingText' className='landingText'>
                We are so glad that you're considering help a pet today! Here's what to expect when using our site to find a volunteer:
            </p>
            <p className='landingText'>
                <b className='yellow'>Click </b>the button above to get started. On the next page, you will be able to see all the pets that need transportation, all the volunteers and the trips that requires your help.
            </p>
            <p className='landingText'>
                Thank you for your willingness to give them new <em className='yellow'>pawsibilities</em>!
            </p>
        </section>
    )
}

export default landing;