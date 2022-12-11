import React, {Component} from 'react';
class Exp extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.inputChange = this.inputChange.bind(this);
        this.delete = this.delete.bind(this)
    }
    
    inputChange(e) {
        const prevState = {...this.props.experienceState[this.props.ind]};
        prevState[e.target.name] = e.target.value;
        this.props.editExperienceState(this.props.ind, prevState)


    }

    delete() {
        this.props.removeExp(this.props.ind);
        this.setState({})
    }

    render() {
        return <div className='experienceinfo'>
            <form>
                <input name='position' placeholder="Position" onChange={this.inputChange} value={this.props.experienceState[this.props.ind]['position']}/>
                <input name='company' placeholder="Company" onChange={this.inputChange} value={this.props.experienceState[this.props.ind]['company']}/>
                <input name='city' placeholder="City" onChange={this.inputChange} value={this.props.experienceState[this.props.ind]['city']}/>
                <input name='from' placeholder="From" onChange={this.inputChange} value={this.props.experienceState[this.props.ind]['from']}/>
                <input name='to' placeholder="To" onChange={this.inputChange} value={this.props.experienceState[this.props.ind]['to']}/>
            </form>
            <button onClick={this.delete}>Delete</button>
        </div>

    }
}

class Experience extends Component {
    constructor(props) {
        super(props);
        this.addExperience = this.addExperience.bind(this)
    }

    addExperience() {
        const sample = {
            'position': '',
            'company': '',
            'city': '',
            'from': '',
            'to': ''
        };
        
        this.props.addExperienceState(sample)
        
    }
    render() {
        return <div>
            {this.props.experienceState.map((val, index) => {
                return <Exp key={index} editExperienceState={this.props.editExperienceState} ind={index} experienceState={this.props.experienceState} removeExp={this.props.removeExp}/>
            })}
            <button onClick={this.addExperience}>Add</button>
        </div>
        }
}

export default Experience;