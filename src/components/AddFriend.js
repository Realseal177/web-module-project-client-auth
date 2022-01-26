import React from 'react';
import axios from 'axios';

class AddFriend extends React.Component {
    state = {
        name: '', 
        email: ''
    }

    handleChange = e => {
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token')

        axios.post('http://localhost:9000/api/friends', this.state, {
            headers: {
                authorization: token
            }
        })
        .then(resp => {
            console.log('this', this);
            this.props.history.push('/friends');
        })
        .catch(err => {
            console.error(err);
        })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <input
                        type='text'
                        name='name'
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <input
                        type='text'
                        name='email'
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                    <button>Add Friend</button>
                </form>
            </div>
        )
    }
}

export default AddFriend;