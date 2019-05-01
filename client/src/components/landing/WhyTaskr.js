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
                Executive functioning is responsible for many skills, including: <br></br> <br></br>
                <ul> 
                    <li>Paying attention</li>
                    <li>Organizing, planning, and prioritizing</li>
                    <li>Starting tasks and staying focused on them to completion</li>
                </ul>
            </StyledInfo>
            <StyledInfo>
                Having children do chores is one of the most effective methods of teaching these skills, and is also one of the top indicators of whether or not a child will be successful or not later in life.
            </StyledInfo>
            <StyledImg src={require('../../resources/class.jpg')}></StyledImg>
            <StyledImg src={require('../../resources/class.jpg')}></StyledImg>
            <StyledInfo>
            "If kids aren't doing the dishes, it means someone else is doing that for them, and so they're absolved of not only the work, but of learning that work has to be done and that each one of us must contribute for the betterment of the whole." <br></br>- Julie Lythcott-Haims, former Dean of Freshmen at Stanford University and author of 'How to Raise an Adult'
            </StyledInfo>
        </StyledParentCard>
    )
}

export default WhyTaskr
