import {Component} from 'react';


class Education extends Component {
    render() {
        return <div>
        <h2>Education</h2>
        {this.props.eduState.map((val)=> {
            return (<div>
                <p>{val.from} - {val.to}</p>
                <p>{val.degree}</p>
                <p>{val.subject}</p>
                <p>{val.name}{val.city ? `,${val.city}` : ''}</p>
                 </div>)
        })}
    </div>
    }

}


export default Education;