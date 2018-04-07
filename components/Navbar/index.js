import React, { Component } from "react";
import { Link } from "react-router-dom";
import MenuHorizontal from "./MenuHorizontal";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.navbarToggle = this.navbarToggle.bind(this);
        this.state = {
            navbarOpen: false
        };
    }
    navbarToggle() {
        this.setState({ navbarOpen: !this.state.navbarOpen });
    }

    render() {
        let navbarStatus = this.state.navbarOpen ? "in" : "";

        return (
            <div>
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#custom-collapse"
                        aria-expanded="false"
                        onClick={this.navbarToggle}
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <Link className="navbar-brand brand" to="/">
                        {this.props.settings.site_title.value}
                    </Link>
                </div>

                <div
                    className={"collapse navbar-collapse " + navbarStatus}
                    id="custom-collapse"
                >
                    <MenuHorizontal
                        ref="secondaryMenuItems"
                        secondary={true}
                        items={JSON.parse(this.props.settings.menu.value)}
                        router={this.props.router}
                    />
                </div>
            </div>
        );
    }
}

export default Navbar;
