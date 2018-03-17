import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            <div className="container">
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
                            src="http://ghchart.rshah.org/1325c5/bdog72"
                            alt="hithub-chart"
                        />
                    </a>
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
                </article>
                <footer>
                    <p>high5bri@hotmail.com</p>
                    <p>813-505-4733</p>
                </footer>
            </div>
        );
    }
}

export default App;
