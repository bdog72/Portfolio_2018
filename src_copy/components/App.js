import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container">
                <h1>Brian Bycynski</h1>
                <img
                    src={require('./img/profile_pic copy.jpg')}
                    alt="profile-pic"
                />
            </div>
        );
    }
}

export default App;
