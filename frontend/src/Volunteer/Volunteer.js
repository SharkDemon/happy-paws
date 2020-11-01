import React from 'react';
import BASE_URL from '../config';
import Image from '../Image/Image';

export default function Volunteer(props) {
        return(
            <div>
                <div className='block-vol flex'>
                    <ul>
                        <li>First Name: {props.volunteer.firstName}</li>
                        <li>Last Name: {props.volunteer.lastName}</li>
                        <li>Age: {props.volunteer.age}</li>
                        <li>City: {props.volunteer.city}</li>
                        <li>State: {props.volunteer.state}</li>
                        <li>ZipCode: {props.volunteer.zip}</li>
                        <li>Vehicle Color: {props.volunteer.carColor}</li>
                        <li>Vehicle Brand: {props.volunteer.carMake}</li>
                        <li>Vehicle Model: {props.volunteer.carModel}</li>
                        <li>License Plate: {props.volunteer.licensePlateNumber}</li>
                        <li>License Plate State: {props.volunteer.licensePlateState}</li>
                        <li>Verified: { renderImage(props.volunteer.verified) }</li>
                    </ul>
                    <Image image={`${BASE_URL}${props.volunteer.image}`} imageT={`${BASE_URL}${props.volunteer.imageThumb}`}/>
                    <div>         </div>
                </div>
            </div>
        ); 
}

function renderImage(verified) {
    return verified ? "🟢" : "🔴";
}
