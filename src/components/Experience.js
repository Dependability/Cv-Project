import {Component} from 'react';

class Experience extends Component {




    

    render() {

        
        return <div>
            <h2>Experience</h2>
            {this.props.experienceState.map((val)=> {
                return (<div>
                    <p>{val.from} - {val.to}</p>
                    <p>{val.position}</p>
                    <p>{val.company}{val.city ? `,${val.city}` : ''}</p>
                     </div>)
            })}
        </div>


    }

}


export default Experience;

