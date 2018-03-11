import React, { Component } from "react";

class App extends Component {
    state = {
        name: "",
        location: "",
        imageURL: "",
        bio: ""
    };

    componentDidMount() {
        window
            .fetch("https://api.github.com/users/bdog72")
            .then(response => {
                return response.json();
            })
            .then(data => {
                this.setState({
                    name: data.name,
                    location: data.location,
                    imageURL: data.avatar_url,
                    bio: data.bio
                });
            });
    }

    render() {
        return (
            <div className="container mt-5 mb-5">
                <h1>Brian Bycynski</h1>
                <img
                    alt=""
                    className="img-fluid mx-auto d-block profile-pic"
                    src={require("../styles/images/profile_pic.jpg")}
                />
                <a href="https://github.com/bdog72">
                    <img
                        alt=""
                        className="img-fluid mx-auto d-block"
                        src="http://ghchart.rshah.org/bdog72"
                    />
                </a>
                <h1 className="text-center">
                    Follow me on LinkedIn and Twitter
                </h1>
                <div className="container">
                    <div className="row">
                        <div className="col d-flex justify-content-center">
                            <a href="https://www.linkedin.com/feed/">
                                <img
                                    alt=""
                                    src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-256.png"
                                    height="150"
                                    width="150"
                                />
                            </a>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <a href="https://twitter.com/Bdoggy72">
                                <img
                                    alt=""
                                    src="https://cdn1.iconfinder.com/data/icons/social-media-icon-1/112/twitter-128.png"
                                    height="150"
                                    width="150"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                <section>
                    <h1>Some of the skills i have learned</h1>
                    <div className="d-flex flex-wrap justify-content-around">
                        <img
                            alt=""
                            src={require("../styles/images/html5.png")}
                        />
                        <img
                            alt=""
                            src={require("../styles/images/css3.png")}
                        />
                        <img
                            alt=""
                            src={require("../styles/images/bootstrap.png")}
                        />
                        <img alt="" src={require("../styles/images/js.png")} />
                        <img
                            alt=""
                            src={require("../styles/images/React.js.png")}
                        />
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
