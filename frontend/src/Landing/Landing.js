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
                We are so glad that you're considering rescuing a pet today! Here's what to expect when using our site to find a pet:
            </p>
            <p className='landingText'>
                <b className='yellow'>Click </b>the button above to get started. On the next page, enter your name to join a line of people waiting to adopt. Each person in line will have 15 seconds to choose either the available dog or cat before the next person is called.
            </p>
            <p className='landingText'>
                While you're waiting, you can see who else is waiting in line with you, view recent adoptions, and of course, read up on the available pets.
            </p>
            <p className='landingText'>
                Once it's your turn, you'll see <b className='yellow'>"Adopt me!"</b> buttons appear beneath the available pets. Make your selection and leave with a new friend!
            </p>
            <p className='landingText'>
                Thank you for your willingness to give them new <em className='yellow'>pawsibilities</em>!
            </p>
        </section>
    )
}

export default landing;