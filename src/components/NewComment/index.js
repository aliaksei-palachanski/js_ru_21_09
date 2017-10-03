import React, { Component } from 'react'
class NewComment extends Component {

    state = {
        showNewForm: false,
        username: '',
        text: '',
        status: '',
        usernameError: '',
        textError: ''
    }

    handleUserInput = (ev) => {

    }

    handleTextInput = (ev) => {
        if (ev.target.value.length > 10) return this.setState({
            username: ''
        })

        this.setState({
            username: ev.target.value
        })
    }

    handleButtonClick = (ev) => {

        if (!this.state.showNewForm) {
            // make add comment form visible
            this.setState({ showNewForm: true, status: '' });
            return;
        }

        if (this.validateOnSubmit()) {
            this.setState({
                username: '',
                text: '',
                status: <h4>Succesfully submitted</h4>
            });
        }

    }

    validateOnSubmit() {
        return true;

    }

    renderBody() {
        return (
            <div>
                <table>
                    <tr>
                        <td>
                            User:
                        </td>
                        <td>
                            <input 
                                type='text'
                                value={this.state.username}
                                onChange={this.handleUserInput} 
                                placeholder="Enter user name"
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Comment:
                        </td>
                        <td> <textarea
                                value={this.state.text}
                                onChange={this.handleTextInput}
                                placeholder="Not less than 10 not more then 50 symbols"
                            />
                        </td>
                    </tr>
                </table>
            </div>
        )
    }

    render() {

        const body = this.state.showNewForm ? this.renderBody() : null;
        const status = this.state.status;

        return (
            <div>
                {status}
                {body}
                <button onClick={this.handleButtonClick}>
                    {this.state.showNewForm ? 'Submit comment' : 'Add new comment'}
                </button>
            </div>
        )
    }
}


export default NewComment