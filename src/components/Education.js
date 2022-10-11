import {Component} from 'react';

class School extends Component {


    render() {
        console.log(this.props)
        return <div >
            <p>School: {this.props.schoolName}</p>
            <p>Start: {this.props.startDate}</p>
            <p>Major:   {this.props.schoolMajor}</p>
            <button onClick={this.props.delete} className={"education-" + this.props.usablekey}>Remove</button>
        </div>

    }
}



class Education extends Component {

    constructor(props) {
        super(props)
        this.state = {
            exp: [],
            edit: false
        }

        this.addSchool = this.addSchool.bind(this);
        this.editForm = this.editForm.bind(this);
        this.deleteEd = this.deleteEd.bind(this);
    }

    deleteEd(e) {
        console.log(e);

        this.setState((state) => {
           let returnVar = state.exp.filter((elem, index) => {
                console.log(elem.props.usablekey)
                return "education-" + elem.props.usablekey !== e.target.className

           }) 
           return {exp: returnVar}
        })
    }

    addSchool(e) {
        e.preventDefault();
        console.log(this)
        //<School schoolName="Collin Community College" startDate="Today" schoolMajor="General"/>)
        this.setState((prevState) => {

            let school = (
                <School schoolName={e.target.schoolName.value} startDate={e.target.startDate.value} schoolMajor={e.target.schoolMajor.value}/>)
            
            let ls = prevState.exp.map((elem) => elem).concat(school);

            let concat = ls.map((elem, index) => {
                return <School schoolName={elem.props.schoolName} startDate={elem.props.startDate} schoolMajor={elem.props.schoolMajor} key={index} delete={this.deleteEd} usablekey={index}/>
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
            <form onSubmit={this.addSchool}>
                <label>School Name: <input name="schoolName" type="text" id="schoolName"/></label>
                <label>Start Date: <input id="startDate" name="startDate" type="text"/></label>
                <label>Major: <input id="schoolMajor" name="schoolMajor" type="text"/></label>
                <input type="submit" />
            </form>
        )
        
        return this.state.edit ? (<div>
            <h2>Education</h2>
            {this.state.exp}
            <button onClick={this.editForm}>Add</button>
            {newEdit}
        </div> ): (<div>
            <h2>Education</h2>
            {this.state.exp}
            <button onClick={this.editForm}>Add</button>
        </div> )


    }

}


export default Education;