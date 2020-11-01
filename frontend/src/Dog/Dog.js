import React from 'react';
import BASE_URL from '../config';

export default function Dog(props) {
    return(
        <div>
            <div className='block-vol flex'>
                <ul>
                    <li>Name: {props.pet.name}</li>
                    <li>Age: {props.pet.age}</li>
                    <li>Weight: {props.pet.weight}</li>
                    <li>Breed: {props.pet.breed}</li>
                    <li>Gender: {props.pet.gender}</li>
                    <li>Adoption Date: {props.pet.formattedAdoptionDate}</li>
                </ul>
                <img src={`${BASE_URL}${props.pet.imageThumb}`} alt={props.pet.name}/>
            </div>
        </div>
    );
}