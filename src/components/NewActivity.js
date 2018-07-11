import React, { Component } from 'react';

class NewActivity extends Component {
    render() {
        constructor () {
            super ()
            this.state = {
                name: '',
                location: '',
                date: '',
                time: '',
                description: ''
            }
        }

        handleChange = () => {
            // code this function to update the state with the inputs
        }

        handleSubmit = () => {
            // code this function to send the create request to the api
        }

        return (
            <div className="new-activity">
            <h1>New Activity: </h1>
                <form>
                    <input type="text" name="name" onChange={this.handleChange}>Activity Name:</input>
                    <input type="text" name="location" onChange={this.handleChange}>Location:</input>
                    <input type="text" name="date" onChange={this.handleChange}>Date: </input>
                    <input type="text" name="time" onChange={this.handleChange}>Time: </input>
                    <textarea name="description" onChange={this.handeChange}>Description:</textarea>
                    <input type="submit" value="submit" onClick={this.handleSubmit}/>
                </form>
            </div>
        );
    }
}

export default NewActivity;