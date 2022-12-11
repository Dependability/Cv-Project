import React, {Component} from 'react';
class Edu extends Component {

    constructor(props) {
        super(props);
        this.state = {}
        this.inputChange = this.inputChange.bind(this);
        this.delete = this.delete.bind(this)
    }
    
    inputChange(e) {
        const prevState = {...this.props.eduState[this.props.ind]};
        prevState[e.target.name] = e.target.value;
        this.props.editEduState(this.props.ind, prevState)


    }

    delete() {
        this.props.removeEdu(this.props.ind);
        this.setState({})
    }

    render() {
        return <div className='educationinfo'>
            <form>
                <input name='name' placeholder="University Name" onChange={this.inputChange} value={this.props.eduState[this.props.ind]['name']}/>
                <input name='city' placeholder="City" onChange={this.inputChange} value={this.props.eduState[this.props.ind]['city']}/>
                <input name='degree' placeholder="Degree" onChange={this.inputChange} value={this.props.eduState[this.props.ind]['degree']}/>
                <input name='subject' placeholder="Subject" onChange={this.inputChange} value={this.props.eduState[this.props.ind]['subject']}/>
                <input name='from' placeholder="From" onChange={this.inputChange} value={this.props.eduState[this.props.ind]['from']}/>
                <input name='to' placeholder="To" onChange={this.inputChange} value={this.props.eduState[this.props.ind]['to']}/>
            </form>
            <button onClick={this.delete}>Delete</button>
        </div>

    }
}

class Education extends Component {
    constructor(props) {
        super(props);
        this.addEducation = this.addEducation.bind(this)
    }

    addEducation() {
        const sample = {
            'position': '',
            'company': '',
            'city': '',
            'from': '',
            'to': ''
        };
        
        this.props.addEduState(sample)
        
    }
    render() {
        return <div>
            {this.props.eduState.map((val, index) => {
                return <Edu key={index} editEduState={this.props.editEduState} ind={index} eduState={this.props.eduState} removeEdu={this.props.removeEdu}/>
            })}
            <button onClick={this.addEducation}>Add</button>
        </div>
        }
}

export default Education;