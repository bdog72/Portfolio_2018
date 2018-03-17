import React, { Component } from "react";

import "font-awesome/css/font-awesome.min.css";

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <header>
                        <h1>Brian Bycynski</h1>
                        <img
                            className="img-fluid mx-auto d-block profile-pic"
                            src={require("./img/profile_pic copy.jpg")}
                            alt="profile-pic"
                        />
                    </header>
                    <article>
                        <p>My current GitHub chart</p>
                        <a href="https://github.com/bdog72">
                            <img
                                className="img-fluid mx-auto d-block"
                                src="http://ghchart.rshah.org/272930/bdog72"
                                alt="hithub-chart"
                            />
                        </a>
                    </article>
                    <section>
                        <p>Some of the skills i have learned</p>
                        <div className="icons">
                            <img
                                className="icon"
                                src={require("./img/html5.png")}
                                alt="html-icon"
                            />
                            <img
                                className="icon"
                                src={require("./img/css3.png")}
                                alt="html-icon"
                            />
                            <img
                                className="icon"
                                src={require("./img/js.png")}
                                alt="html-icon"
                            />

                            <img
                                className="icon"
                                src={require("./img/bootstrap.png")}
                                alt="html-icon"
                            />
                            <img
                                className="icon"
                                src={require("./img/React.js.png")}
                                alt="html-icon"
                            />
                        </div>
                    </section>
                    <footer>
                        <p>Follow Me On</p>
                        <div className="social-media-icons">
                            <a href="https://twitter.com/Bdoggy72">
                                <i
                                    style={{
                                        fontSize: "100px",
                                        color: "black",
                                        margin: "20px"
                                    }}
                                    className="fa fa-twitter"
                                />
                            </a>
                            <a href="https://www.linkedin.com/feed/">
                                <i
                                    style={{
                                        fontSize: "100px",
                                        color: "black",
                                        margin: "20px"
                                    }}
                                    className="fa fa-linkedin"
                                />
                            </a>
                        </div>
                        <p>high5bri@hotmail.com</p>
                        <p>813-505-4733</p>
                        <p>
                            Made With <span>&hearts;</span> in 2018
                        </p>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
