import React, {Component} from 'react';
class General extends Component {

    constructor(props) {
        super(props);
        this.changeValues = this.changeValues.bind(this);
    }

    changeValues(e) {
        const copiedState = {...this.props.generalState};
        copiedState[e.target.name] = e.target.value;
        this.props.editGeneralState(copiedState);
        
        
    } 
    render() {
        return <div className='personalinfo'> 
        <h2>General Information</h2>
            <form>
                <input placeholder='First Name' name='first-name' onChange={this.changeValues}/>
                <input placeholder='Last Name' name='last-name' onChange={this.changeValues}/>
                <input placeholder='Title' name='title'onChange={this.changeValues}/>
                <input placeholder='Address' name='address'onChange={this.changeValues}/>
                <input placeholder='Phone Number' name='phone-number'onChange={this.changeValues}/>
                <input placeholder='Email' name='email-address'onChange={this.changeValues}/>
                <input placeholder='Description' name='description'onChange={this.changeValues}/>
            </form>
            </div>
    }
}



export default General;