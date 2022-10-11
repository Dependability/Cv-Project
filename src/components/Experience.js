import {Component} from 'react';

class Exp extends Component {


    render() {
        console.log(this.props)
        return <div >
            <p>School: {this.props.jobName}</p>
            <p>Start: {this.props.startDate}</p>
            <p>Major:   {this.props.endDate}</p>
            <button onClick={this.props.delete} className={"experience-" + this.props.usablekey}>Remove</button>
        </div>

    }
}



class Experience extends Component {

    constructor(props) {
        super(props)
        this.state = {
            exp: [],
            edit: false
        }

        this.addJob = this.addJob.bind(this);
        this.editForm = this.editForm.bind(this);
        this.deleteEd = this.deleteEd.bind(this);
    }

    deleteEd(e) {
        console.log(e);

        this.setState((state) => {
           let returnVar = state.exp.filter((elem, index) => {
                console.log(elem.props.usablekey)
                return "experience-" + elem.props.usablekey !== e.target.className

           }) 
           return {exp: returnVar}
        })
    }

    addJob(e) {
        e.preventDefault();
        console.log(this)
        //<School jobName="Collin Community College" startDate="Today" endDate="General"/>)
        this.setState((prevState) => {

            let school = (
                <Exp jobName={e.target.jobName.value} startDate={e.target.startDate.value} endDate={e.target.endDate.value}/>)
            
            let ls = prevState.exp.map((elem) => elem).concat(school);

            let concat = ls.map((elem, index) => {
                return <Exp jobName={elem.props.jobName} startDate={elem.props.startDate} endDate={elem.props.endDate} key={index} delete={this.deleteEd} usablekey={index}/>
            });

            return {exp: concat, edit: false}
        })
       
    }

    editForm(e) {

        this.setState((prevState) => {
            return {edit: prevState.edit ? prevState.edit : !prevState.edit}
        })
        console.log("YERR")
        e.preventDefault();
    }

    

    render() {
        const newEdit = (
            <form onSubmit={this.addJob}>
                <label>Job: <input name="jobName" type="text" id="jobName"/></label>
                <label>Start Date: <input id="startDate" name="startDate" type="text"/></label>
                <label>End Date: <input id="endDate" name="endDate" type="text"/></label>
                <input type="submit" />
            </form>
        )
        
        return this.state.edit ? (<div>
            <h2>Experience</h2>
            {this.state.exp}
            <button onClick={this.editForm}>Add</button>
            {newEdit}
        </div> ): (<div>
            <h2>Experience</h2>
            {this.state.exp}
            <button onClick={this.editForm}>Add</button>
        </div> )


    }

}


export default Experience;

