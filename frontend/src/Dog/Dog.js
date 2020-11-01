import React from 'react';

export default class Dog extends React.Component {
    render(){
    return(
        <div>
            <h1>Dogs</h1>
            <div className='block-vol flex'>
                <ul>
                    <li>Name: </li>
                    <li>Age: </li>
                    <li>Weight: </li>
                    <li>Breed: </li>
                    <li>Gender: </li>
                </ul>
            </div>
            <div className='block-vol flex'>
                <ul>
                    <li>Name: </li>
                    <li>Age: </li>
                    <li>Weight: </li>
                    <li>Breed: </li>
                    <li>Gender: </li>
                </ul>
            </div>            
            <div className='block-vol flex'>
                <ul>
                    <li>Name: </li>
                    <li>Age: </li>
                    <li>Weight: </li>
                    <li>Breed: </li>
                    <li>Gender: </li>
                </ul>
            </div>
        </div>
    );
 }

}