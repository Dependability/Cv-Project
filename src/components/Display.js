import React, {Component} from 'react';

class Display extends Component {


    render() {
        return <div className='display'>
            <header>
                <div className='name'>
                <h1>{this.props.generalState['first-name']}</h1>
                <h1>{this.props.generalState['last-name']}</h1>
                </div>
                <p className='title'>{this.props.generalState['title']}</p>
            </header>
            <main>
                <div className='left'>
                <div className='description'>
                    <h2>Description</h2>
                    <hr/>
                    <p>{this.props.generalState['description']}</p>
                </div>
                <div className='experience'>
                    <h2>Experience</h2>
                    <hr />
                    {this.props.experienceState.map((val)=>{
                        return (<div className='experience-child'>
                            <div className='span'>{val['from']} - {val['to']}</div>
                            <div className='company'>
                                <p className='position'>{val['position']}</p>
                                <p className='exacts'>{val['company']}, {val['city']}</p>
                            </div>
                        </div>)
                    })}
                </div>
                <div className='education'>
                    <h2>Education</h2>
                    <hr />
                    {this.props.educationState.map((val)=>{
                        return (<div className='education-child'>
                            <div className='span'>{val['from']} - {val['to']}</div>
                            <div className='university'>
                            <p className='exacts'>{val['name']}, {val['city']}</p>
                            <p className='degree'>Degree: {val['degree']}</p>
                            <p className='subject'>Subject: {val['subject']}</p>
                                
                            </div>
                        </div>)
                    })}
                </div>
                </div>
                <div className='right'>
                    <img class='photo' src={ this.props.generalState['imgsrc'] ? this.props.generalState['imgsrc'] : 'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'} alt='Invalid Link'></img>
                    <div class='details'>
                        <div className='header'>
                            <h2>Personal Details</h2>
                            <hr />
                        </div>
                        <h2>Address</h2>
                        <p>{this.props.generalState['address']}</p>
                        <h2>Phone Number</h2>
                        <p>{this.props.generalState['phone-number']}</p>
                        <h2>Email</h2>
                        <p>{this.props.generalState['email-address']}</p>
                    </div>
                </div>
            </main>

        </div>
    }
}

export default Display;