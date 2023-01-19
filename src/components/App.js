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
                Created by <a href='https://www.github.com/Dependability'>Dependability<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
            </footer>
            
            </div>
    }
}

export default App