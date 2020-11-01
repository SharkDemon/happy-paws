import React from 'react';
import { Link } from 'react-router-dom';

const landing = () => {
    return (
        <section>
            <h3>An App made for dogs transportation!</h3>
            <div>
                <Link to='/home'>
                    <button className='button'>Click to transport!</button>
                </Link>
            </div>
            <div className='welcome'>
                <p>
                    We are so glad that you're considering help a pet today! Here's what to expect when using our site to find a volunteer.
                </p>
                <p>
                    <b className='yellow'>Click </b>the button above to get started. On the next page, you will be able to see all the pets that need transportation, all the volunteers and the trips that requires your help.
                </p>
                <p>
                    Thank you for your willingness to give them new <em className='yellow'>pawsibilities</em>!
                </p>
            </div>
        </section>
    )
}

export default landing;