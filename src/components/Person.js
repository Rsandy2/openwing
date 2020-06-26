import React from 'react'; 

const Person = props => (
    <div>
        <h1>{props.id}. {props.name} </h1>
        <p>{props.status}</p>
    </div>

);

export default Person;