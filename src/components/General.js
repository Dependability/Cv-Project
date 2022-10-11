import React, {Component} from 'react';

class General extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Seyi Bakare",
            email: "seybak07@gmail.com",
            phone: "469-750-6094",
            editing: false


        }

        this.submitForm = this.submitForm.bind(this);
        this.editForm = this.editForm.bind(this);
    }

    submitForm(e) {
        this.setState({name: e.target.name.value, email: e.target.email.value, phone: e.target.phone.value, editing: false})
        console.log(this.state)

        e.preventDefault();
    }

    editForm(e) {


        this.setState((prevState) => {
            
            return {editing: prevState.editing ? prevState.editing : !prevState.editing}
        })

        e.preventDefault();
    }


    render() {
        const viewElems  = (
            <div>
                <h2>General Information</h2>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <p>{this.state.phone}</p>
                <button onClick={this.editForm}>Edit</button>
            </div>
        )

        const editElems = (
            <form onSubmit ={this.submitForm}>
                <label htmlFor='name'>Name: <input type='text' name='name' id='name' /></label>
                <label htmlFor='email'>Email: <input type='email' name='email' id='email'/></label>
                <label htmlFor='phone'>Phone: <input type='phone' name='phone' id='phone' /></label>
                <input type="submit" />
            </form>
        )


        return this.state.editing ? <div>{viewElems}{editElems}</div> : <div>{viewElems}</div>
    }

}





export default General;
