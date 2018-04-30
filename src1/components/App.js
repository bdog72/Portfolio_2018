import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-8 col-lg-6">
                        <img
                            className="img-fluid"
                            src={require('./img/profile_pic copy.jpg')}
                            alt="profile-pic"
                        />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-6">
                        <h1>Brian Bycynski</h1>
                        <h3>I am a JR Front End Web Developer</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
