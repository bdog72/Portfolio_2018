import React, { Component } from 'react';

class App extends Component {
    render() {
        return (
            <div className="container border border-dark">
                <div className="row">
                    <div className="col-sm-6 col-md-8 col-lg-8">
                        <img
                            // style={{ maxHeight: '300px' }}
                            className="img-fluid mx-auto d-block"
                            src={require('./img/profile_pic copy.jpg')}
                            alt="profile-pic"
                        />
                    </div>
                    <div className="col-sm-6 col-md-4 col-lg-4">
                        <h1 className="text-center">Brian Bycynski</h1>
                        <h3>I am a JR Front End Web Developer</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
