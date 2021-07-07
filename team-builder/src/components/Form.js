import React from 'react';
import cool from 'styled-components';

const CoolForm = cool.form`
   display: flex;
   flex-direction: column; 
`;

const Form = (props) => {

    return (
        <CoolForm>
            <label htmlFor="nameInput">Name</label>
            <input type="text" id="nameInput" />
            
            <label htmlFor="emailInput">Email</label>
            <input type="email" id="emailInput" />
            
            <label htmlFor="specialtyInput">Specialty</label>
            <input type="text" id="specialtyInput"/>
        </CoolForm>
    )
}



export default Form;