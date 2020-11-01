import React from 'react';
import BASE_URL from '../config';
import Image from '../Image/Image';

export default function Dog(props) {
    return(
        <div>
            <div className='block-vol flex'>
                <ul className='space'>
                    <li>Name: {props.pet.name}</li>
                    <li>Age: {props.pet.age}</li>
                    <li>Weight: {props.pet.weight}</li>
                    <li>Breed: {props.pet.breed}</li>
                    <li>Gender: {props.pet.gender}</li>
                    <li>Adoption Date: {props.pet.formattedAdoptionDate}</li>
                </ul>
                <Image image={`${BASE_URL}${props.pet.image}`} imageT={`${BASE_URL}${props.pet.imageThumb}`}/>
                <div>         </div>
            </div>
            <div>
                
            </div>
        </div>
    );
}