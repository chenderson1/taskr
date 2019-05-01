import React from 'react'
import { StyledInfo, StyledParentCard, StyledImg } from '../../elements/index'

const WhyTaskr = () => {
    return (
        <StyledParentCard>
            <div>
                <h3>Parents:</h3>
                <StyledInfo>
                    <h4>task'r is a task managment app designed to help kids develop executive functioning.</h4>
                    
                   
                </StyledInfo>
            </div>
            <StyledImg src={require('../../resources/superhero.jpg')}></StyledImg>
            <StyledImg src={require('../../resources/kids.jpg')}></StyledImg>
            <StyledInfo>
                Executive functioning is responsible for a number of skills, including: <br></br> <br></br>
                <ul> 
                    <li>Paying attention</li>
                    <li>Organizing, planning, and prioritizing</li>
                    <li>Starting tasks and staying focused on them to completion</li>
                </ul>
            </StyledInfo>
            <StyledInfo>
                Having children do chores is one of the most effective methods of teaching these skills, and is also one of the top indicators of whether or not a child will be successful or not later in life.
            </StyledInfo>
            <div></div>

        </StyledParentCard>
    )
}

export default WhyTaskr
