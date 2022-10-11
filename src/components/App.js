import React, {Component} from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';

class App extends Component {

    render () {
        return <div>
            <General />
            <Education />
            <Experience />
            </div>
    }
}

export default App