import React, {Component} from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';
import EditCV from './EditCV';
import Display from './Display';



class App extends Component {


    constructor(props) {
        super(props);
        this.state  = {
            "General" : {},
            "Experience": [{}],
            "Education": [{}]
        }
        this.editGeneralState = this.editGeneralState.bind(this);
        this.addExperienceState = this.addExperienceState.bind(this);
        this.editExperienceState = this.editExperienceState.bind(this);
        this.removeExp = this.removeExp.bind(this);
        this.editEduState = this.editEduState.bind(this);
        this.addEduState = this.addEduState.bind(this);
        this.removeEdu = this.removeEdu.bind(this);
    }

    editExperienceState(key, obj) {
        const currentState = {...this.state};
        currentState["Experience"] = [...currentState["Experience"]];
        currentState['Experience'][key] = obj;
        
        this.setState(currentState);
    }

    editEduState(key, obj) {
        const currentState = {...this.state};
        currentState["Education"] = [...currentState["Education"]];
        currentState['Education'][key] = obj;
        
        this.setState(currentState);

    }

    removeExp(ind) {
        const currentState = {...this.state};
        let newArray = [...currentState["Experience"]];
        newArray.splice(ind, 1);
        currentState["Experience"] = newArray;
        
        this.setState(currentState)
    }
    removeEdu(ind) {
        const currentState = {...this.state};
        let newArray = [...currentState["Education"]];
        newArray.splice(ind, 1);
        currentState["Education"] = newArray;
        
        this.setState(currentState)

    }
    addExperienceState(obj) {
        const currentState = {...this.state};
        currentState["Experience"] = currentState["Experience"].concat(obj);
        this.setState(currentState)
    } 
    addEduState(obj) {
        const currentState = {...this.state};
        currentState["Education"] = currentState["Education"].concat(obj);
        this.setState(currentState)
    }

    editGeneralState(obj) {
        const currentState = {...this.state};
        currentState.General = {...obj};
        this.setState(currentState)
    }
    render () {
        return <div className='main'>
            <header>
                <h1>CV CREATOR</h1>
            </header>
            <main>
            <EditCV editGeneralState={this.editGeneralState} editExperienceState={this.editExperienceState} addExperienceState={this.addExperienceState}  editEducationState={this.editEducationState} educationState ={this.state["Education"]} generalState={this.state['General']} 
            experienceState={this.state["Experience"]}
            removeExp={this.removeExp}
            removeEdu={this.removeEdu}
            editEduState={this.editEduState}
            addEduState={this.addEduState}
            eduState={this.state["Education"]}/>
            <Display
                generalState={this.state["General"]}
                experienceState={this.state["Experience"]}
                educationState={this.state["Education"]}
            />
            {/* <div className='display'>
                <General generalState={this.state["General"]} />
                <Experience experienceState={this.state["Experience"]} />
                <Education eduState ={this.state["Education"]}/>
                
            </div> */}
            </main>
            <footer>
                created by me
            </footer>
            
            </div>
    }
}

export default App