import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <header>
                        <p>BRIAN BYCYNSKI</p>
                        <img
                            className="img-fluid mx-auto d-block profile-pic"
                            src={require("./img/profile_pic copy.jpg")}
                            alt="profile-pic"
                        />
                    </header>
                    <article>
                        <p>My Current Github Chart</p>
                        <a href="https://github.com/bdog72">
                            <img
                                className="img-fluid mx-auto d-block"
                                src="http://ghchart.rshah.org/bdog72"
                                alt="hithub-chart"
                            />
                        </a>
                    </article>
                    <aside>
                        <p>Some of the skills i have learned</p>
                        <div className="icons">
                            <img
                                src={require("./img/html5.png")}
                                alt="html-icon"
                            />
                            <img
                                src={require("./img/css3.png")}
                                alt="html-icon"
                            />
                            <img
                                src={require("./img/js.png")}
                                alt="html-icon"
                            />
                            <img
                                src={require("./img/bootstrap.png")}
                                alt="html-icon"
                            />
                            <img
                                src={require("./img/React.js.png")}
                                alt="html-icon"
                            />
                        </div>
                    </aside>
                </div>
            </div>
        );
    }
}

export default App;
