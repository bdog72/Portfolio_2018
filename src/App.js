import React, { Component } from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            location: "",
            imageURL: "",
            bio: ""
        };
    }
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
            <div>
                <header className="container-head">
                    <div>
                        <h1 className="header-name text-center">
                            Brian Bycynski
                        </h1>
                        <img
                            alt=""
                            className="img-fluid mx-auto d-block"
                            src={require("./images/profile_pic.jpg")}
                        />
                    </div>
                </header>
                <section>
                    <div className="github-container">
                        <h1 className="text-center">My Current Github Chart</h1>
                        <a href="https://github.com/bdog72">
                            <img
                                alt=""
                                className="img-fluid mx-auto d-block"
                                src="http://ghchart.rshah.org/bdog72"
                            />
                        </a>
                    </div>
                </section>
                <section>
                    <h1 className="text-center">
                        Follow me on LinkedIn and Twitter
                    </h1>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <a href="https://www.linkedin.com/feed/">
                                    <img
                                        alt=""
                                        src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_color-256.png"
                                        height="150"
                                        width="150"
                                    />
                                </a>
                            </div>
                            <div className="col">
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
                </section>
                <section>
                    <h1>Some of the skills i have learned</h1>
                    <img alt="" src={require("./images/html5.png")} />
                    <img alt="" src={require("./images/css3.png")} />
                    <img alt="" src={require("./images/bootstrap.png")} />
                    <img alt="" src={require("./images/js.png")} />
                    <img alt="" src={require("./images/React.js.png")} />
                </section>
                <footer>
                    <p>813-505-4733</p>
                    <p>high5bri&#64;hotmail.com</p>
                    <p className="text-center">
                        Made With &hearts; From What I Learned At The Iron Yard
                    </p>
                </footer>
            </div>
        );
    }
}

export default App;
