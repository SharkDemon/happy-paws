import React from 'react';
import BASE_URL from '../config';
import Image from '../Image/Image';

export default function Trip(props) {
    return(
        <div>
            <div className='block-vol flex'>
                <ul>
                    <li>Pick Up Location: {props.trips.startCity}</li>
                    <li>Starting State: {props.trips.startState}</li>
                    <li>Starting ZipCode: {props.trips.startZip}</li>
                    <li>Starting Date & Time: {props.trips.formattedStartDate}</li>
                    <hr />
                    <li>Delivering Date & Time: {props.trips.formattedEndDate}</li>
                    <li>Delivery City: {props.trips.endCity}</li>
                    <li>Delivery State: {props.trips.endState}</li>
                    <li>Delivery ZipCode: {props.trips.endZip}</li>
                    <li>Total Mileage: {props.trips.estimatedMiles}</li>
                </ul>
                <Image image={`${BASE_URL}${props.trips.pet.image}`} imageT={`${BASE_URL}${props.trips.pet.imageThumb}`}/>
                <p>{props.trips.pet.name}</p>
                <div>         </div>
            </div>
        </div>
    );
}