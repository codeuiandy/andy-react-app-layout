import React, { Component } from "react";
import "./layout.css";

export default class Navbar extends Component {
	render() {
		return (
			<div>
				<div className="App-header">
					<nav className="navRoutes">
						<a className="appLogo"></a>
						<a className="linkNav" href="">
							Home
						</a>
						<a className="linkNav" href="">
							About
						</a>
						<a className="linkNav" href="">
							Read Me
						</a>
						<a className="linkNav" href="">
							Terms
						</a>
						<div className="toggleEl">
							<i
								onClick={this.props.handleSideBar}
								className="fa fa-bars togMenu"
								aria-hidden="true"
							></i>
						</div>
					</nav>
				</div>
			</div>
		);
	}
}
