import React from 'react';
import cozy from 'styled-components';

const CoolPar = cozy.p`
 span {
     font-weight: bold;
     color: orange;
     font-style: italic;
 }
`
const Member = (props) => {
    const { name, specialty } = props;
    return <CoolPar>
        <span>{name}</span> is a member of teamReact and seems to excel at <span>{specialty}</span>.
    </CoolPar>
}



export default Member;