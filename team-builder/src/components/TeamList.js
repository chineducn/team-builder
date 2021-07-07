import React from 'react';
import Member from './Member';


const TeamList = (props) => {
    const { teamArray } = props;
    debugger
    return (
        teamArray.map(member => 
            <Member
                key={member.id}
                name={member.name}
                specialty={member.specialty}
            />
        )
    )
}


export default TeamList;