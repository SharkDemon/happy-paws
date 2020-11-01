import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default function Success() {
    return(
        <Carousel autoPlay>
        <div>
            <img alt="" src="http://192.168.86.94/images/pets/8-husky.png" />
            <p className="legend">Ronnie</p>
        </div>
        <div>
            <img alt="" src="http://192.168.86.94/images/pets/5-beagle.png" />
            <p className="legend">Amanda</p>
        </div>
        <div>
            <img alt="" src="http://192.168.86.94/images/pets/7-beagle.png" />
            <p className="legend">Dennis</p>
        </div>
        <div>
            <img alt="" src="http://192.168.86.94/images/pets/2-corgi.png" />
            <p className="legend">Josie</p>
        </div>
        <div>
            <img alt="" src="http://192.168.86.94/images/pets/4-husky.png" />
            <p className="legend">Emerald</p>
        </div>
        <div>
            <img alt="" src="http://192.168.86.94/images/pets/1-beagle.png"  />
            <p className="legend">Chuck</p>
        </div>
        <div>
            <img alt="" src="http://192.168.86.94/images/pets/10-corgi.png" />
            <p className="legend">Rufus</p>
        </div>
        <div>
            <img alt="" src="http://192.168.86.94/images/pets/6-malamute.png" />
            <p className="legend">Jonah</p>
        </div>
    </Carousel>
    );

};
