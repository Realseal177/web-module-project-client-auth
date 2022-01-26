import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        const token = localStorage.getItem('token')

        axios.get('http://localhost:9000/api/friends', {
            headers: {
                authorization: token
            }
        })
            .then(resp => {
                // console.log('FriendsList axios resp =>', resp.data);
                this.setState({
                    friends: resp.data
                })
            })
            .catch(err => {
                console.error(err);
            })
    }

    render() {
        return (
            <div className='friends-list'>
                <h2>Friends List</h2>
                {
                    this.state.friends.map(friend => (
                        <div key={friend.id}>
                            <p>{friend.name} - {friend.email}</p>
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default FriendsList;