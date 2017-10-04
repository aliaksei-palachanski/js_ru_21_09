import React, { Component } from 'react'
import './style.css'

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
        if (ev.target.value.length < 1) {
            this.setState({
                usernameError: <h4 className="error-message">Username is required</h4>,
                username: ev.target.value
            })
        } else {
            this.setState({
                usernameError: '',
                username: ev.target.value
            })
        }
    }

    handleTextInput = (ev) => {
        if (ev.target.value.length < 10) {
            this.setState({
                textError: <h4 className="error-message">Enter not less than 10 symbols</h4>,
                text: ev.target.value
            })
        } else if (ev.target.value.length > 50) {
            this.setState({
                textError: <h4 className="error-message">Enter less than 50 symbols</h4>,
                text: ev.target.value
            })
        } else {
            this.setState({
                textError: '',
                text: ev.target.value
            })
        }
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
                usernameError: '',
                textError: '',
                status: <h4>Succesfully submitted</h4>
            });
        } else {
            this.setState({
                status: <h4>Comment is not valid</h4>
            })
        }
    }

    validateOnSubmit() {        
        let username = this.state.username;
        let text = this.state.text;
        let usernameError;
        let textError;
        if (username.length < 1) {
            usernameError = <h4 className="error-message">Username is required</h4>;
        }
        if (text.length < 10) {
            textError = <h4 className="error-message">Enter not less than 10 symbols</h4>
        } else if (text.length > 50) {
            textError = <h4 className="error-message">Enter less than 50 symbols</h4>
        }

        if (!!usernameError || !!textError) {
            this.setState({
                usernameError: usernameError,
                textError: textError
            });
            return false;
        } else {
            return true;
        }
    }

    renderBody() {
        return (
            <div>
                <table>
                    <tbody>
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
                                {this.state.usernameError}
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
                                {this.state.textError}
                            </td>
                        </tr>
                    </tbody>
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