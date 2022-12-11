import React, {Component} from 'react';
import General from './EditGeneral';
import Experience from './EditExperience';
import Education from './EditEducation';
class EditCV extends Component {



    render() {
        return <div className='edit'>
            <General editGeneralState={this.props.editGeneralState} generalState={this.props.generalState}/>
            
            <h2>Experience</h2>
            <Experience addExperienceState={this.props.addExperienceState} editExperienceState={this.props.editExperienceState} experienceState={this.props.experienceState} 
            removeExp={this.props.removeExp}/>
            <h2>Education</h2>
            <Education 
                addEduState={this.props.addEduState}
                editEduState={this.props.editEduState}
                eduState={this.props.eduState}
                removeEdu={this.props.removeEdu}
            />


             </div>
    }
}


export default EditCV