import React, {Component} from 'react';

class General extends Component {

    render() {
        const viewElems  = (
            <div>
                <h2>General Information</h2>
                <p>{this.props.generalState['first-name']}</p>
                <p>{this.props.generalState['last-name']}</p>
                <p>{this.props.generalState['title']}</p>
                <p>{this.props.generalState['phone-number']}</p>
                <p>{this.props.generalState['description']}</p>
                <p>{this.props.generalState['email-address']}</p>
                <p>{this.props.generalState['address']}</p>

            </div> );


        return viewElems
    }

}





export default General;
