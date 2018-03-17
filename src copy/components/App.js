import React, { Component } from "react";

class App extends Component {
    render() {
        return (
            // <div className="container">
            <div className="wrapper">
                <header>
                    <p>BRIAN BYCYNSKI</p>
                    <img
                        className="img-fluid mx-auto d-block profile-pic"
                        src={require("./img/profile_pic copy.jpg")}
                        alt="profile-pic"
                    />
                    <br />
                    <h3>I am a JR Front End Web Developer</h3>
                    <h3>You can reach me by Email or Phone</h3>
                    <h3>high5bri@hotmail.com</h3>
                    <h3>813-505-4733</h3>
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
                        <img src={require("./img/html5.png")} alt="html-icon" />
                        <img src={require("./img/css3.png")} alt="html-icon" />
                        <img src={require("./img/js.png")} alt="html-icon" />

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
            // </div>
        );
    }
}

export default App;
// <p>high5bri@hotmail.com</p>
// <p>813-505-4733</p>
// <p>Made With &hearts; 2018</p>
